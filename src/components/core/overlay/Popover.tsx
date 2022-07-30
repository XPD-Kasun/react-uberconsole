import React from 'react';
import cx from "classnames";
import Overlay from './Overlay';
import { PopoverProps, PopoverWithRefProps } from './types';

function Popover({ className, popoverRef, x, y, children, isShowing, overlayBounds, onOverlayClick, showOverlay = true }: PopoverWithRefProps) {

       if (!overlayBounds) {
              overlayBounds = {
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0
              };
       }

       let cls = cx({
              [className]: className,
              'popover': true
       });

       if (showOverlay) {
              return (
                     isShowing && <Overlay
                            onOverlayClick={onOverlayClick}
                            className="popover-overlay"
                            isShowing={isShowing}
                            overlayBounds={overlayBounds}>

                            <div className={cls} style={{ top: y, left: x }} ref={popoverRef}>
                                   <div className="popover-menu" onClick={e => onOverlayClick(null)}>
                                          {
                                                 children
                                          }
                                   </div>
                            </div>
                     </Overlay >
              );
       }
       else {
              if (isShowing) {
                     return (
                            <div className="popover" style={{ top: y, left: x }} ref={popoverRef}>
                                   <div className="popover-menu">
                                          {
                                                 children
                                          }
                                   </div>
                            </div>

                     );
              }
              else {
                     return null;
              }
       }
}

export default React.forwardRef((props: PopoverProps, ref) => {
       return <Popover {...props} popoverRef={ref}></Popover>
});