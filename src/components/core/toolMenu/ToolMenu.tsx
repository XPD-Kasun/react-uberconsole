import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Popover } from "../overlay";
import { ToolMenuProps } from "./types";
import cx from 'classnames';
import breakPoints from "../../../shared/breakPoints";


function getPopoverLocation(headerMenuItemEl: HTMLDivElement, popoverEl: HTMLDivElement, dropdownLeftOffset, dropdownTopOffset) {

       if (!headerMenuItemEl || !popoverEl) {
              return null;
       }

       let menuItemRect = headerMenuItemEl.getBoundingClientRect();
       let popoverRect = popoverEl.getBoundingClientRect();

       if (menuItemRect.left > window.innerWidth / 2) {
              return {
                     top: dropdownTopOffset + menuItemRect.bottom,
                     left: menuItemRect.right - popoverRect.width + dropdownLeftOffset
              };
       }
       else {
              return {
                     top: dropdownTopOffset + menuItemRect.bottom,
                     left: menuItemRect.left + dropdownLeftOffset
              };
       }

}

function isMobile() {
       return window.innerWidth < breakPoints.tabWidth;
}


function ToolMenu({
       className,
       showOverlay = true,
       hideOnOverlayClick = true,
       dropdownClass,
       onControllerConnect,
       showOnMobile = true,
       overlayOffset = { top: 0, left: 0, right: 0, bottom: 0 },
       children,
       popoverManager,
       toolElement,
       showOnToolElementClick = true,
       dropdownTopOffset = 0,
       dropdownLeftOffset = 0
}: ToolMenuProps) {

       let [els, setEls] = useState({
              headerItemEl: null,
              popoverEl: null
       });

       onControllerConnect && onControllerConnect((show) => { popoverManager.setVisibility(show) });

       if (!popoverManager) {
              console.error('ToolMenu component must be nested under a PopoverManager component.');
              throw new Error("PopoverManager is not found");
       }

       let isShowing = popoverManager.isShowing();

       let headerContentRef = useCallback((headerItemEl) => {

              headerItemEl && setEls(els => ({
                     headerItemEl,
                     popoverEl: els.popoverEl
              }));

       }, []);

       let popoverRef = useCallback((popoverEl) => {

              popoverEl && setEls(els => ({
                     headerItemEl: els.headerItemEl,
                     popoverEl
              }));

       }, []);

       let cls = cx({
              "tool-menu": true,
              "is-open": isShowing,
              "fixed": showOnMobile,
              [className]: className
       });

       let dropdownCls = cx({
              "header-dropdown": true,
              [dropdownClass]: dropdownClass
       });

       const onTitleClick = (evt) => {

              if (!showOnMobile && isMobile()) {
                     popoverManager.setVisibility(false);
                     return;
              }

              showOnToolElementClick && popoverManager.setVisibility(true);

       };

       const onPopoverOverlayClick = (evt) => {
              hideOnOverlayClick && popoverManager.setVisibility(false)
       };

       const onResize = useCallback(() => {

              let loc = getPopoverLocation(els.headerItemEl, els.popoverEl, dropdownLeftOffset, dropdownTopOffset);
              if (loc) {
                     els.popoverEl.style.top = `${loc.top}px`;
                     els.popoverEl.style.left = `${loc.left}px`;
              }
       }, [els]);

       useEffect(() => {

              if (!els.headerItemEl || !els.popoverEl) {
                     return;
              }

              window.addEventListener('resize', onResize);

              return () => {
                     window.removeEventListener('resize', onResize);
              }



       }, [els]);

       useLayoutEffect(() => {

              let loc = getPopoverLocation(els.headerItemEl, els.popoverEl, dropdownLeftOffset, dropdownTopOffset);
              if (loc) {
                     els.popoverEl.style.top = `${loc.top}px`;
                     els.popoverEl.style.left = `${loc.left}px`;
              }


       }, [els]);

       return (
              <div className={cls}>
                     <div className="tool-content" ref={headerContentRef} onClick={onTitleClick}>
                            {toolElement}
                     </div>
                     <Popover
                            className={dropdownCls}
                            ref={popoverRef}
                            isShowing={isShowing}
                            onOverlayClick={onPopoverOverlayClick}
                            overlayBounds={overlayOffset}
                            showOverlay={showOverlay}>
                            {
                                   children
                            }

                     </Popover>
              </div>
       );
}

export default ToolMenu;