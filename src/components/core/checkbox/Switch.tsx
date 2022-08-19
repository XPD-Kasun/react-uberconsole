import FrameworkCheckBox from "./FrameworkCheckBox";

function Switch({ className, isChecked, isEnabled, onChange, value, children }) {

       return (
              <FrameworkCheckBox
                     toggleComponent={<div className="switch"><div className="knob"></div></div>}
                     className={className}
                     value={value}
                     isChecked={isChecked}
                     onChange={onChange}
                     isEnabled={isEnabled}
              >
                     {children}
              </FrameworkCheckBox>
       );
}

export default Switch;