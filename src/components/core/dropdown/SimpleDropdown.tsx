import { useMemo, useState } from 'react';
import { ControlDataSource } from '../../../types';
import FrameworkDropdown from './FrameworkDropdown';
import { DropdownProps } from './types';

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

function SimpleDropdown({ className = "dropdown", dataSource, isBlur=true, selectedId, htmlID, name, textSelector, isEnabled }: DropdownProps) {

       let [searchTerm, setSearchTerm] = useState('');

       if(!dataSource.idSelector || !textSelector) {
              throw new Error("For dropdown to work an idSelector and a textSelector is needed. Make sure both are provided. idSelector is provided via dataSource prop and textSelector is provided directly as a prop. See the documentation on how to use Dropdown component")
       }

       let memoizedDataSource = useMemo<ControlDataSource>(() => {

              let dataSourceCopy: ControlDataSource = {
                     idSelector: dataSource.idSelector,
                     data: null
              };

              dataSourceCopy.data = dataSource.data.filter(x => {
                     if (searchTerm) {
                     
                            if (textSelector(x).toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
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
                     isBlur={isBlur}
                     htmlID={htmlID}
                     name={name}
                     isEnabled={isEnabled}
                     labelComponent={DefaultLabal}
                     listItemComponent={ListItem}
                     onSearchChange={onSearchChange}>
              </FrameworkDropdown>
       )

}

export default SimpleDropdown;