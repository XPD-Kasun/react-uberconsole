import cx from 'classnames';
import { useEffect, useState } from 'react';
import Overlay from './Overlay';
import { ModalBaseProps } from "./types";

function ModalBase({ className, children, isShowing, closeTimeout=200 }: ModalBaseProps) {

       let [retainContent, setRetainCont] = useState(isShowing);

       useEffect(() => {

              if(!isShowing) {
                     setTimeout(() => {
                            setRetainCont(false)
                     }, closeTimeout);              
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