import { useMemo, useState } from 'react';
import { ControlDataSource } from '../../../types';
import FrameworkDropdown from './FrameworkDropdown';
import { SimpleDropdownProps } from './types';

function DefaultLabal({ item }) {
       return (
              <div className="labal-content">
                     {item.text}
              </div>
       )
}

function ListItem({ item, onSelect }) {

       return (
              <div className="dropdown-item-content" onClick={evt => onSelect(evt, item)}>
                     {item.text}
              </div>
       )
}

function SimpleDropdown({ className = "dropdown", dataSource, selectedId, textSelector }: SimpleDropdownProps) {

       let [searchTerm, setSearchTerm] = useState('');

       let memoizedDataSource = useMemo<ControlDataSource>(() => {

              let dataSourceCopy: ControlDataSource = {
                     idSelector: dataSource.idSelector,
                     data: null
              };

              dataSourceCopy.data = dataSource.data.filter(x => {
                     if (searchTerm) {
                     
                            if (textSelector(x).indexOf(searchTerm) > -1) {
                                   return true;
                            }
                            return false;
                     }
                     return true;

              }).map(x => {

                     x['text'] = textSelector(x);
                     return x;
               
              });

              return dataSourceCopy;

       }, [dataSource, searchTerm]);

       const onSearchChange = (text: string) => {

              setSearchTerm(text);

       };

       return (
              <FrameworkDropdown
                     className={className}
                     dataSource={memoizedDataSource}
                     selectedId={selectedId}
                     labelComponent={DefaultLabal}
                     listItemComponent={ListItem}
                     onSearchChange={onSearchChange}>
              </FrameworkDropdown>
       )

}

export default SimpleDropdown;