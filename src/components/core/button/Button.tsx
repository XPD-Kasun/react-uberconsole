import FrameworkButton from "./FrameworkButton";
import { ButtonType, FrameworkButtonProps } from './types';

function Button({ children, onClick, className = "default", isEnabled = true, type }
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