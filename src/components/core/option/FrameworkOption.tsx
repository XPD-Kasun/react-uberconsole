import cx from 'classnames';
import { useState } from 'react';
import { OptionProps } from './types';

function FrameworkOption({ isEnabled, isChecked, className = "option", htmlID, name, value, children, onChange }: OptionProps) {

       let cls = cx({
              [className]: true,
              disabled: !isEnabled,
              checked: isChecked
       });

       const onSelect = () => {
              if (isEnabled) {
                     onChange && onChange(isChecked);
              }
       }

       return (
              <div className={cls} onClick={onSelect}>
                     <div className="option-container">
                            <div className="button-container">
                                   <div className="option-button">
                                          <svg version="1.1" width="16" height="16">
                                                 <circle className="option-circle"cx="8" cy="8" r="7" stroke="#6d6d6d" fill="#fff" />
                                                 <circle className="option-dot" cx="8" cy="8" r="5" fill="#ff5722" />
                                          </svg>
                                   </div>
                                   <div style={{ display: "none" }}>
                                          <input type="radio" id={htmlID} value={value} name={name} checked={isChecked} readOnly />
                                   </div>
                            </div>
                            <div className="option-label">
                                   {children}
                            </div>
                     </div>
              </div>
       )
};

export default FrameworkOption;