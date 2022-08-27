import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Popover } from "../../core/overlay";
import { HeaderDropdownProps } from "./types";
import cx from 'classnames';
import breakPoints from "../../../shared/breakPoints";


function getPopoverLocation(headerMenuItemEl: HTMLDivElement, popoverEl: HTMLDivElement, dropdownLeftOffset, dropdownTopOffset) {

       if(!headerMenuItemEl || !popoverEl) {
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


function HeaderDropdown({
       id,
       className,
       showOverlay = true,
       hideOnOverlayClick = true,
       dropdownClass,
       isVisible,
       onChangeVisibility,
       showOnMobile = true,
       overlayOffset = { top: 0, left: 0, right: 0, bottom: 0 },
       children,
       title,
       dropdownTopOffset = 0,
       dropdownLeftOffset = 0
}: HeaderDropdownProps) {

       let [els, setEls] = useState({
              headerItemEl: null,
              popoverEl: null
       });

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
              "header-menu": true,
              "is-open": isVisible,
              "fixed": showOnMobile,
              [className]: className
       });

       let dropdownCls = cx({
              "header-dropdown": true,
              [dropdownClass]:dropdownClass
       });

       const onTitleClick = (evt) => {

              if (!showOnMobile && isMobile()) {
                     onChangeVisibility(id, false);
                     return;
              }

              onChangeVisibility(id, true);

       };

       const onPopoverOverlayClick = (evt) => {
              onChangeVisibility(id, false);
       };

       const onResize = useCallback(() => {

              let loc = getPopoverLocation(els.headerItemEl, els.popoverEl, dropdownLeftOffset, dropdownTopOffset);
              if(loc) {
                     els.popoverEl.style.top = `${loc.top}px`;
                     els.popoverEl.style.left = `${loc.left}px`;
              }
       }, [els]);

       useEffect(() => {
              
              if(!els.headerItemEl || !els.popoverEl) {
                     return;
              }

              window.addEventListener('resize', onResize);

              return () => {
                     window.removeEventListener('resize', onResize);
              }



       }, [els]);

       useLayoutEffect(() => {

              let loc = getPopoverLocation(els.headerItemEl, els.popoverEl, dropdownLeftOffset, dropdownTopOffset);
              if(loc) {
                     els.popoverEl.style.top = `${loc.top}px`;
                     els.popoverEl.style.left = `${loc.left}px`;
              }

             
       }, [els]);

       return (
              <div className={cls}>
                     <div className="header-content" ref={headerContentRef} onClick={onTitleClick}>
                            {title}
                     </div>
                     <Popover
                            className={dropdownCls}
                            ref={popoverRef}
                            isShowing={isVisible}
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

export default HeaderDropdown;