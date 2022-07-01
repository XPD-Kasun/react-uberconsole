import { useState } from 'react';
import { DropdownProps } from './types';
import { ControlDataSource } from '../../../types';

function getSelectedItem(dataSource: ControlDataSource, selectedId: string) {

       let item = dataSource.data.find(x => dataSource.idSelector(x) == selectedId);

       if (!item && dataSource.data.length > 0) {
              return dataSource.data[0];
       }

       return item;
}

function FrameworkDropdown({ className = "dropdown", dataSource, selectedId, labelComponent, listItemComponent }: DropdownProps) {
       
       let [selectedItem, setSelectedItem] = useState(getSelectedItem(dataSource, selectedId));
       let [isOpen, setIsOpen] = useState(false);

       let LabelComponent = labelComponent;
       let ListItemComponent = listItemComponent;

       const onListItemSelect = (evt, item) => {
              setSelectedItem(item);
              setIsOpen(false);
       };

       const onLabelClick = () => {
              setIsOpen((isOpen) => !isOpen);
       };

       return (
              <div className={className}>
                     <div className="dropdown-wrapper">
                            <div className="dropdown-container">
                                   <div className="dropdown-hidden-select">
                                          <select></select>
                                   </div>
                                   <div className="dropdown-display-label" onClick={onLabelClick}>
                                          <LabelComponent item={selectedItem}></LabelComponent>
                                   </div>
                                   <div className="dropdown-popup" style={{ display: (isOpen ? 'block' : 'none') }}>
                                          <div className="dropdown-popup-container">
                                                 <ul className="dropdown-items">
                                                        {
                                                               dataSource.data.map((item) => {
                                                                      return (
                                                                             <li>
                                                                                    <ListItemComponent item={item} onSelect={onListItemSelect}/>
                                                                             </li>
                                                                      );
                                                               })
                                                        }
                                                 </ul>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div >
       )

}

export default FrameworkDropdown;