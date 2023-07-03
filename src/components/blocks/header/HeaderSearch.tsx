import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Popover } from "../../core/overlay";
import { HeaderDropdownProps } from "./types";
import cx from 'classnames';
import usePopoverManager from "../../core/uberProvider/usePopoverManager";
import ToolMenu from "../../core/toolMenu/ToolMenu";
import { SearchTextBox } from "../../core/textbox";

function HeaderSearch({
       dropdownClass,
       showOnMobile = true,
       children,
       onControllerConnect,
       headerHeight = 40,
       className,
       headerElement: title,
       dropdownTopOffset = 0,
       dropdownLeftOffset = 0
}: HeaderDropdownProps) {       

       let cls = cx({
              "header-menu": true,
              "header-search": true,
              [className]: className
       });

       let dropdownCls = cx({
              "header-dropdown": true,
              [dropdownClass]:dropdownClass
       });

       let popoverManager = usePopoverManager();

       if(!popoverManager) {
              console.error("HeaderDropdown must be nested under a PopoverManager component");
              throw Error("PopoverManager component not found");
       }

       return (
              <ToolMenu
                     dropdownClass={dropdownClass}
                     toolElement={<SearchTextBox/>}
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
                     showOnToolElementClick={true}

              />
       );
}

export default HeaderSearch;