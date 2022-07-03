import { OptionGroupProps } from './types';
import Option from './FrameworkOption';
import { useState } from 'react';
import getItem from '../../../shared/getSelectedItem';


function OptionGroup({ dataSource, name, selectedId, textSelector, isEnabled = true, onChange }: OptionGroupProps) {

       let [selectedItem, setSelectedItem] = useState(getItem(dataSource, selectedId));

       const onOptionChange = (isSelected, item) => {

              let selectItem = getItem(dataSource, dataSource.idSelector(item));
              setSelectedItem(selectItem);
              onChange(selectItem);
       };

       return (
              <div className="option-group">
                     {
                            dataSource.data.map((item) => {
                                   let id = dataSource.idSelector(item);
                                   return (
                                          <Option
                                                 key={id}
                                                 isChecked={item === selectedItem}
                                                 isEnabled={isEnabled}
                                                 onChange={(isSelected) => onOptionChange(isSelected, item)}
                                                 id={id}
                                                 name={name}>
                                                        
                                                        {textSelector(item)}
                                                 
                                          </Option>
                                   )
                            })
                     }
              </div>
       )

}

export default OptionGroup;