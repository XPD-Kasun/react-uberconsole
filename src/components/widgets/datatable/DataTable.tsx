import cx from "classnames";
import { Box } from "../../core/box";
import { Button } from "../../core/button";
import { Action, ColumnMeta, DataTableProps } from "./types";

function getActionButtons(item, column: ColumnMeta, onActionClick) {

       return (
              <div className="btn-container">
                     {
                            column.actions.map((action, i) => {
                                   return (
                                          <Button key={i} onClick={e => onActionClick(action, item)}>{typeof (action) === 'string' ? action : action.text}</Button>
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

       const onActionClick = (action: (Action | string), item) => {

              if (typeof (action) === 'string') {
                     onAction && onAction(action, item);
              }
              else {
                     onAction && onAction(action.id, item);
              }

       }


       return (
              <Box>
                     <div className={cls}>
                            <table className="simple">
                                   <thead>
                                          <tr>
                                                 {
                                                        columns.map((x,i) => <th style={{ width: x.width }} key={i}>{x.displayName}</th>)
                                                 }
                                          </tr>
                                   </thead>
                                   <tbody>
                                          {
                                                 dataSource.data.map((item, j) => {
                                                        return (
                                                               <tr key={j}>
                                                                      {
                                                                             columns.map((column, i) => {

                                                                                    if (column.type && column.type == 'action') {
                                                                                           return (
                                                                                                  <td key={`${j}_${i}`}>
                                                                                                         {
                                                                                                                getActionButtons(item, column, onActionClick)
                                                                                                         }
                                                                                                  </td>
                                                                                           )

                                                                                    }
                                                                                    return (
                                                                                           <td key={`${j}_${i}`}>
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
              </Box>
       )

}

export default DataTable;