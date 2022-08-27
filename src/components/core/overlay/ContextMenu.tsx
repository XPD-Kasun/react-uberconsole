import { useEffect, useRef, useState } from "react";
import cx from "classnames";
import Popover from "./Popover";
import { ContextMenuProps } from "./types";

function setPosition(ref, x, y) {
       ref.style.top = y;
       ref.style.left = x;
}

function ContextMenu({ children, className, owner }: ContextMenuProps) {

       let [isShowing, setIsShowing] = useState(false);
       let contextMenuRef = useRef();

       const onOverlayClick = () => {
              setIsShowing(false);
       };

       let cls = cx({
              'context-menu': true,
              [className]: className
       });

       useEffect(() => {

              function onContextMenu(evt) {

                     if (owner) {

                            let overlayPass = true;
                            let overlayRoot = document.getElementById('overlay-root');
                            if (overlayRoot) {
                                   if (overlayRoot.contains(evt.target)) {
                                          overlayPass = true;
                                   }
                                   else {
                                          overlayPass = false;
                                   }
                            }

                            if (owner.contains(evt.target) || overlayPass) {

                                   setPosition(contextMenuRef, evt.clientX, evt.clientY);
                                   setIsShowing(true);
                            }
                     }
                     else {
                            setPosition(contextMenuRef, evt.clientX, evt.clientY);
                            setIsShowing(true);
                     }

                     evt.preventDefault();

              }

              window.document.addEventListener('contextmenu', onContextMenu);

              return () => {
                     window.document.removeEventListener('contextmenu', onContextMenu);
              }

       }, []);


       return (
              <Popover
                     className={cls}
                     isShowing={isShowing}
                     showOverlay={true}
                     ref={contextMenuRef}
                     onOverlayClick={onOverlayClick}>
                     {children}
              </Popover>
       )

}

export default ContextMenu;