import cx from 'classnames';
import { useState } from "react";


function FrameworkTextBox({className = '', hasBorder=true, placeholder, onChange, isEnabled = true}) {

       let [text, setText] = useState('');
       let cls = cx({
              [className]: className,
              "textbox": true,
              disabled: !isEnabled,
              'no-border': !hasBorder
       });

       const _onChange = (evt) => {

              if(isEnabled) {

                     setText(evt.target.value);
                     onChange && onChange(evt.target.value);

              }
       }

       return(
              <div className={cls}>
                     <input disabled={!isEnabled} type="text" placeholder={placeholder} className="text" onChange={_onChange} value={text} />
              </div>
       )

}

export default FrameworkTextBox;