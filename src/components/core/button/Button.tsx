import FrameworkButton from "./FrameworkButton";
import { FrameworkButtonProps } from './types';
import btnClass from "./btnClasses";

function Button({ children, onClick, className = btnClass.default, isEnabled = true, type = "button" }
       : FrameworkButtonProps) {

       return (
              <FrameworkButton
                     onClick={onClick}
                     isEnabled={isEnabled}
                     isBusy={false}
                     type={type}
                     className={className}>
                     {children}
              </FrameworkButton>
       );

}


export default Button;