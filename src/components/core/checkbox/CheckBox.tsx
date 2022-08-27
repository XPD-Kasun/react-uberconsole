import { IoCheckmarkSharp } from "react-icons/io5";
import FrameworkCheckBox from "./FrameworkCheckBox";
import { CheckboxProps } from "./types";

function CheckBox({ className, isChecked, htmlID, name, isEnabled, value, onChange, children }: CheckboxProps) {

       let toggle = (
              <div className="chk">
                     <div className="tick center-block">
                            <IoCheckmarkSharp color="white" size={12} style={{strokeWidth: 45}}></IoCheckmarkSharp>
                     </div>
              </div>
       );

       return (
              <FrameworkCheckBox
                     toggleComponent={toggle}
                     className={className}
                     value={value}
                     isChecked={isChecked}
                     onChange={onChange}
                     isEnabled={isEnabled}
                     htmlID={htmlID}
                     name={name}
              >
                     {children}
              </FrameworkCheckBox>
       );

}

export default CheckBox;

