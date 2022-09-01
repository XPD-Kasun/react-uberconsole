import { useRef, useState } from 'react';
import cx from "classnames";
import { BaseDropdownProps } from './types';
import { TextBox } from '../textbox';
import getItem from '../../../shared/getSelectedItem';
import { IoSearch, IoChevronDownOutline, IoTvOutline } from 'react-icons/io5';


function FrameworkDropdown({
       className = "dropdown",
       isBlur = true,
       dataSource,
       onSearchChange,
       isEnabled = true,
       selectedId,
       htmlID,
       name,
       onSelectItem,
       labelComponent,
       listItemComponent }: BaseDropdownProps) {

       let [selectedItem, setSelectedItem] = useState(getItem(dataSource, selectedId));
       let [isOpen, setIsOpen] = useState(false);
       let ref = useRef<HTMLDivElement>();

       let LabelComponent = labelComponent;
       let ListItemComponent = listItemComponent;

       let cls = cx({
              dropdown: true,
              opened: isOpen,
              disabled: !isEnabled,
              [className]: className
       });

       const onBlur = (evt) => {
              if (isBlur && !ref.current.contains(evt.relatedTarget)) {
                     setIsOpen(false);
              }
       };

       const onListItemSelect = (evt, item) => {
              setSelectedItem(item);
              setIsOpen(false);
              onSelectItem && onSelectItem(item);
       };

       const onLabelClick = () => {

              if (isEnabled) {
                     setIsOpen((isOpen) => !isOpen);
                     ref.current.focus();
              }
       };

       const onSearchTermChange = (evt) => {
              onSearchChange && onSearchChange(evt.target.value);
       };

       const onKeyDown = (evt) => {
              if (evt.key === 'Escape') {
                     setIsOpen(false);
              }
       }

       const emptyFn = useRef(()=>{});

       return (
              <div className={cls} onBlur={onBlur} ref={ref} tabIndex={0} onKeyDown={onKeyDown}>
                     <div className="dropdown-wrapper">
                            <div className="dropdown-container">
                                   <div className="dropdown-hidden-select">
                                          <select onChange={emptyFn.current} id={htmlID} name={name} value={dataSource.idSelector(selectedItem)}>
                                                 {
                                                        selectedItem && (
                                                               <option value={dataSource.idSelector(selectedItem)}></option>
                                                        )
                                                 }
                                          </select>
                                   </div>
                                   <div className="dropdown-display-label" onClick={onLabelClick}>
                                          <div className="label-text">
                                                 <LabelComponent item={selectedItem}></LabelComponent>
                                          </div>
                                          <div className="label-icon">
                                                 <IoChevronDownOutline></IoChevronDownOutline>
                                          </div>

                                   </div>
                                   <div className="dropdown-popup" style={{ display: (isOpen ? 'block' : 'none') }}>
                                          <div className="dropdown-popup-container">
                                                 <div className="dropdown-search">
                                                        <div className="search-container">
                                                               <div className="search-icon"><IoSearch color="#90a7b6"></IoSearch></div>
                                                               <TextBox hasBorder={false} placeholder="Search" onChange={onSearchTermChange}></TextBox>
                                                        </div>
                                                 </div>
                                                 <ul className="dropdown-items">
                                                        {
                                                               dataSource.data.map((item) => {
                                                                      return (
                                                                             <li key={dataSource.idSelector(item)}>
                                                                                    <ListItemComponent item={item} onSelect={onListItemSelect} />
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