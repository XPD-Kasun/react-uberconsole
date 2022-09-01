import cx from 'classnames';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { TextboxProps } from './types';

function FrameworkTextBox({ className, isEnabled = true, name, value = '', htmlID, hasBorder = true, canClear = false, onChange, placeholder, clearBtnSize = 18, onClear }: TextboxProps) {

       let [hasText, setHasText] = useState(false);

       let cls = cx({
              [className]: className,
              "textbox": true,
              disabled: !isEnabled,
              'no-border': !hasBorder
       });

       const _onChange = (evt) => {

              if (isEnabled) {

                     onChange && onChange(evt);

              }

              if (canClear) {

                     if (evt.target.value.length === 0) {
                            setHasText(false);
                     }
                     else {
                            setHasText(true);
                     }
              }
       }

       const onClearBtnClick = (evt) => {

              if (onClear) {
                     onClear();
                     setHasText(false);
              }

       };

       return (
              <div className={cls}>
                     <input id={htmlID} name={name} disabled={!isEnabled} type="text" placeholder={placeholder} className="text" onChange={_onChange} value={value} />
                     {
                            canClear && (
                                   <div className="clear-btn" onClick={onClearBtnClick} style={{ opacity: hasText ? 1 : 0 }}>
                                          <IoCloseSharp size={clearBtnSize}></IoCloseSharp>
                                   </div>
                            )
                     }
              </div>
       )

}

export default FrameworkTextBox;