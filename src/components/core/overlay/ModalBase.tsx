import cx from 'classnames';
import { useEffect, useState } from 'react';
import Overlay from './Overlay';
import { ModalProps } from "./types";

function ModalBase({ className, children, isShowing }: ModalProps) {

       let [retainContent, setRetainCont] = useState(isShowing);

       useEffect(() => {

              if(!isShowing) {
                     setTimeout(() => {
                            setRetainCont(false)
                     }, 200);              
              }
              else{
                     setRetainCont(true);
              }

       }, [isShowing]);

       let cls = cx({
              'modal': true,
              [className]: className,
              'close': !isShowing
       });

       return (             
              retainContent && <Overlay className="glass" isShowing={isShowing}>
                     <div className={cls}>
                            {
                                   children
                            }
                     </div>
              </Overlay>
       )
}

export default ModalBase;