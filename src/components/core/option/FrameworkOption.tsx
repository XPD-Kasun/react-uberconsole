import cx from 'classnames';
import { useState } from 'react';

function FrameworkOption({ isEnabled, isChecked, className = "option", id, name, children, onChange }) {

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
                                          <div className="option-dot"></div>
                                   </div>
                                   <div style={{display: "none"}}>
                                          <input type="radio" value={id} name={name} checked={isChecked} />
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