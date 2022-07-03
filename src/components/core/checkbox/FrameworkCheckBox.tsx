import { useState } from "react";
import cx from 'classnames';

export default function FrameworkCheckBox({ className="checkbox", isChecked, isEnabled, onChange, children }) {

       let [_isChecked, setIsChecked] = useState(isChecked);

       let cls = cx({
              [className]: true,
              enabled: isEnabled,
              checked: _isChecked
       });

       const onClick = () => {

              if (isEnabled) {
                     setIsChecked((isChecked) => !isChecked);
                     onChange && onChange(_isChecked);
              }

       };

       return (
              <div className={cls} onClick={onClick}>
                     <div className="checkbox-container">
                            <div className="toggle">
                                   <div className="knob"></div>
                            </div>
                            <div className="label">{children}</div>
                     </div>
              </div>

       );
}