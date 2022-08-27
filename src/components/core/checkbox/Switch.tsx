import FrameworkCheckBox from "./FrameworkCheckBox";
import { CheckboxProps } from "./types";

function Switch({ className, isChecked, isEnabled, onChange, value, children,htmlID, name }: CheckboxProps) {

       return (
              <FrameworkCheckBox
                     toggleComponent={<div className="switch"><div className="knob"></div></div>}
                     className={className}
                     value={value}
                     htmlID={htmlID}
                     name={name}
                     isChecked={isChecked}
                     onChange={onChange}
                     isEnabled={isEnabled}
              >
                     {children}
              </FrameworkCheckBox>
       );
}

export default Switch;