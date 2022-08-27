import FrameworkButton from "./FrameworkButton";
import { ButtonType, FrameworkButtonProps } from "./types";

function BusyButton({
       children,
       onClick,
       isBusy,
       busyContent,
       isEnabled = true,
       className = "default",
       type = ButtonType.button }: FrameworkButtonProps) {

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