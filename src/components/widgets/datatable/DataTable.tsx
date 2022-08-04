import cx from "classnames";
import { Button } from "../../core/button";
import { Action, ColumnMeta, DataTableProps } from "./types";

function getActionButtons(column: ColumnMeta, onActionClick) {

       return (
              <div className="btn-container">
                     {
                            column.actions.map((action) => {
                                   return (
                                          <Button onClick={e => onActionClick(action)}>{typeof (action) === 'string' ? action : action.text}</Button>
                                   )
                            })
                     }
              </div>
       )

}

function DataTable({ className, dataSource, columnConfig, onAction }: DataTableProps) {

       let cls = cx({
              'datatable': true,
              [className]: className
       });

       let columns: ColumnMeta[] = [];

       if (columnConfig && dataSource.data.length > 0) {

              let firstRow = dataSource.data[0];
              columns = Object.keys(firstRow).map(colName => columnConfig[colName]);

              for (let a in columnConfig) {
                     if (columnConfig[a].type == 'action') {
                            columns.push(columnConfig[a]);
                     }
              }

              columns = columns.filter(col => col);
              columns.sort((a, b) => a.order - b.order);
       }
       else {
              columns = Object.keys(dataSource.data[0]).map((col, index) => {
                     return {
                            name: col,
                            displayName: col,
                            order: index,
                            width: 'auto'
                     }
              });
       }

       const onActionClick = (action: (Action | string)) => {

              if(typeof(action) === 'string') {
                     onAction && onAction(action);
              }
              else {
                     onAction && onAction(action.id);
              }

       }


       return (
              <div className={cls}>
                     <table className="simple">
                            <thead>
                                   <tr>
                                          {
                                                 columns.map(x => <th style={{width:x.width}}>{x.displayName}</th>)
                                          }
                                   </tr>
                            </thead>
                            <tbody>
                                   {
                                          dataSource.data.map(item => {
                                                 return (
                                                        <tr>
                                                               {
                                                                      columns.map(column => {

                                                                             if (column.type && column.type == 'action') {
                                                                                    return (
                                                                                           <td>
                                                                                                  {
                                                                                                         getActionButtons(column, onActionClick)
                                                                                                  }
                                                                                           </td>
                                                                                    )

                                                                             }
                                                                             return (
                                                                                    <td>
                                                                                           {item[column.name]}
                                                                                    </td>
                                                                             );
                                                                      })
                                                               }
                                                        </tr>
                                                 )
                                          })

                                   }

                            </tbody>
                     </table>
              </div>
       )

}

export default DataTable;