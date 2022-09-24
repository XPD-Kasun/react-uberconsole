import { HeaderDropdownProps } from "./types";
import cx from "classnames";
import ToolMenu from "../../core/toolMenu/ToolMenu";
import usePopoverManager from "../../core/uberProvider/usePopoverManager";

function HeaderDropdown({
       className,
       dropdownClass,
       onControllerConnect,
       showOnMobile = true,
       children,
       headerElement,
       showOnHeaderElementClick = true,
       dropdownLeftOffset = -5,
       dropdownTopOffset = 5,
       headerHeight = 40
}: HeaderDropdownProps) {

       let popoverManager = usePopoverManager();

       if(!popoverManager) {
              console.error("HeaderDropdown must be nested under a PopoverManager component");
              throw Error("PopoverManager component not found");
       }

       let cls = cx({
              'header-dropdown': true,
              [className]: className
       })

       return (
              <ToolMenu
                     dropdownClass={dropdownClass}
                     toolElement={headerElement}
                     hideOnOverlayClick={true}
                     onControllerConnect={onControllerConnect}
                     showOverlay={true}
                     children={children}
                     popoverManager={popoverManager}
                     className={cls}
                     dropdownLeftOffset={dropdownLeftOffset}
                     dropdownTopOffset={dropdownTopOffset}
                     overlayOffset={{top: headerHeight, left: 0, right: 0, bottom: 0}}
                     showOnMobile={showOnMobile}
                     showOnToolElementClick={showOnHeaderElementClick}

              />
       );
}

export default HeaderDropdown;