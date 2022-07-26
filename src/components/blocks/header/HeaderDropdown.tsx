import { useCallback, useEffect, useRef, useState } from "react";
import { Popover } from "../../core/overlay";
import { HeaderDropdownProps } from "./types";
import cx from 'classnames';

function assignPopoverLocation(headerContentRef, popoverRef, locationSetter, dropdownLeftOffset, dropdownTopOffset) {

       if (!headerContentRef.current || !popoverRef.current) {
              return;
       }
       let boundsTitle = headerContentRef.current.getBoundingClientRect();
       let boundsPopover = popoverRef.current.getBoundingClientRect();

       if (boundsTitle.left > window.innerWidth / 2) {
              locationSetter({
                     x: boundsTitle.right - boundsPopover.width + dropdownLeftOffset,
                     y: dropdownTopOffset
              });
       }
       else {
              locationSetter({
                     x: boundsTitle.left + dropdownLeftOffset,
                     y: dropdownTopOffset
              });
       }
}


function HeaderDropdown({
       showOverlay = true,
       hideOnOverlayClick = true,
       headerHeight,
       children,
       title,
       onDropdownClick,
       dropdownTopOffset = -5,
       dropdownLeftOffset = 0
}: HeaderDropdownProps) {

       let headerContentRef = useRef<HTMLDivElement>();
       let popoverRef = useRef<HTMLDivElement>();

       let [popoverLocation, setPopoverLocation] = useState({
              x: 0,
              y: 0
       });

       let [isShowing, setIsShowing] = useState(false);

       let cls = cx({
              "header-content": true,
              "is-open": isShowing
       });

       const onTitleClick = (evt) => {

              setIsShowing(showing => {
                     return !showing;
              });

              onDropdownClick && onDropdownClick(evt);

       };

       const onPopoverOverlayClick = (evt) => {
              setIsShowing(false);
       }

       let resizeHandler = useCallback(() => {

              assignPopoverLocation(
                     headerContentRef,
                     popoverRef,
                     setPopoverLocation,
                     dropdownLeftOffset,
                     dropdownTopOffset
              );

       }, [headerContentRef.current, popoverRef.current]);

       useEffect(() => {

              assignPopoverLocation(
                     headerContentRef,
                     popoverRef,
                     setPopoverLocation,
                     dropdownLeftOffset,
                     dropdownTopOffset
              );

              window.addEventListener('resize', resizeHandler);

              return () => {
                     window.removeEventListener('scroll', resizeHandler);
              }

       }, [resizeHandler]);

       return (
              <div className="header-dropdown">
                     <div className={cls} ref={headerContentRef} onClick={onTitleClick}>
                            {title}
                     </div>
                     <Popover
                            ref={popoverRef}
                            isShowing={isShowing}
                            onOverlayClick={onPopoverOverlayClick}
                            overlayBounds={{ top: headerHeight, left: 0, right: 0, bottom: 0 }}
                            showOverlay={showOverlay}
                            x={popoverLocation.x}
                            y={popoverLocation.y}>
                            {
                                   children
                            }

                     </Popover>
              </div>
       );
}

export default HeaderDropdown;