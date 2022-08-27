import cx from 'classnames';
import { TextboxProps } from './types';

function FrameworkTextBox({className, isEnabled, name, value, htmlID, hasBorder=true, onChange, placeholder}: TextboxProps) {

       let cls = cx({
              [className]: className,
              "textbox": true,
              disabled: !isEnabled,
              'no-border': !hasBorder
       });

       const _onChange = (evt) => {

              if(isEnabled) {

                     onChange && onChange(evt.target.value);

              }
       }

       return(
              <div className={cls}>
                     <input id={htmlID} name={name} disabled={!isEnabled} type="text" placeholder={placeholder} className="text" onChange={_onChange} value={value} />
              </div>
       )

}

export default FrameworkTextBox;