import { useEffect, useRef, useState } from "react";
import cx from "classnames";
import Popover from "./Popover";
import { ContextMenuProps } from "./types";

function ContextMenu({ children, className, target }: ContextMenuProps) {

       let [isShowing, setIsShowing] = useState(false);
       let [position, setPosition] = useState({
              x: 0,
              y: 0
       });
       let onContextMenuRef = useRef(null);

       const onOverlayClick = () => {
              setIsShowing(false);
       };

       let cls = cx({
              'context-menu': true,
              [className]: className
       });

       useEffect(() => {
              
              window.document.removeEventListener('contextmenu', onContextMenuRef.current);
              onContextMenuRef.current = (evt) => {

                     if (target) {

                            let overlayPass = true;
                            let overlayRoot = document.getElementById('overlay-root');
                            if(overlayRoot) {
                                   if(overlayRoot.contains(evt.target)) {
                                          overlayPass = true;
                                   }
                                   else{
                                          overlayPass = false;
                                   }
                            }

                            if (target.contains(evt.target) || overlayPass) {
                                   
                                   setPosition({
                                          x: evt.clientX,
                                          y: evt.clientY
                                   });
                                   setIsShowing(true);
                            }
                     }
                     else {
                            setPosition({
                                   x: evt.clientX,
                                   y: evt.clientY
                            });
                            setIsShowing(true);
                     }

                     evt.preventDefault();

              };
              window.document.addEventListener('contextmenu', onContextMenuRef.current);

              return () => {
                     window.document.removeEventListener('contextmenu', onContextMenuRef.current);
              }

       }, [target, setIsShowing]);


       return (
              <Popover
                     className={cls}
                     isShowing={isShowing}
                     showOverlay={true}
                     onOverlayClick={onOverlayClick}
                     x={position.x}
                     y={position.y}>
                     {children}
              </Popover>
       )

}

export default ContextMenu;