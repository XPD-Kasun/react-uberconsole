import btnClass from "./btnClasses";
import FrameworkButton from "./FrameworkButton";
import { FrameworkButtonProps } from "./types";

function BusyButton({
       children,
       onClick,
       isBusy,
       busyContent,
       isEnabled = true,
       className = btnClass.default,
       type = "button" }: FrameworkButtonProps) {

       return (
              <FrameworkButton
                     onClick={onClick}
                     isEnabled={isEnabled}
                     className={className}
                     isBusy={isBusy}
                     busyContent={busyContent}
                     type={type}>
                     {children}
              </FrameworkButton>
       )
}

export default BusyButton;