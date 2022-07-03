import { useState } from "react";

function FrameworkTextBox({className="textbox", hasBorder=true, placeholder, onChange, isEnabled = true}) {

       let [text, setText] = useState('');

       if(!isEnabled) {
              className += ' disabled';
       }
       if(!hasBorder) {
              className += ' no-border';
       }

       const _onChange = (evt) => {

              if(isEnabled) {

                     setText(evt.target.value);
                     onChange && onChange(evt.target.value);

              }
       }

       return(
              <div className={className}>
                     <input type="text" placeholder={placeholder} className="text" onChange={_onChange} value={text} />
              </div>
       )

}

export default FrameworkTextBox;