import { useEffect, useState } from "react";
import ModalBase from "./ModalBase";


function Modal({className, children, isShowing, title}) {
       
       return (
              <ModalBase isShowing={isShowing} className={className}>
                     <div className="modal-box">
                            <div className="modal-header">
                                   <div className="header-wrapper">
                                          {title}
                                   </div>
                            </div>
                            <div className="modal-content">
                                   {children}
                            </div>
                     </div>
              </ModalBase>
       )
}

export default Modal;