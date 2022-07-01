import { useMemo, useState } from 'react';
import { ControlDataSource } from '../../../types';
import FrameworkDropdown from './FrameworkDropdown';
import { SimpleDropdownProps } from './types';

function DefaultLabal({item}) {
       return (
              <div className="labal-content">
                     {item.text}
              </div>
       )
}

function ListItem({item, onSelect}) {

       return (
              <div className="dropdown-item-content" onClick={evt => onSelect(evt, item)}>
                     {item.text}
              </div>
       )
}

function SimpleDropdown({ className = "dropdown", dataSource, selectedId, textSelector }: SimpleDropdownProps) {

       let memoizedDataSource = useMemo<ControlDataSource>(() => {

              dataSource.data = dataSource.data.map(x => ({
                     value: dataSource.idSelector(x),
                     text: textSelector(x)
              }));

              return dataSource;

       }, [dataSource]);

       return (
              <FrameworkDropdown              
                     className={className}
                     dataSource={memoizedDataSource}
                     selectedId={selectedId}
                     labelComponent={DefaultLabal}
                     listItemComponent={ListItem}>
              </FrameworkDropdown>
       )

}

export default SimpleDropdown;