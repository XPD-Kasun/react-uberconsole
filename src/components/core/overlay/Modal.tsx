import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ModalBase from "./ModalBase";


function Modal({className, children, isShowing, title, showCloseBtn=true, onCloseBtnClick}) {
       
       const onCloseClick = (evt) => {
              onCloseBtnClick && onCloseBtnClick(evt);
       };

       return (
              <ModalBase isShowing={isShowing} className={className}>
                     <div className="modal-box">
                            <div className="modal-header">
                                   <div className="header-wrapper">
                                          {title}
                                   </div>
                                   {
                                          showCloseBtn && (
                                                 <div className="close-btn" onClick={onCloseClick}>
                                                        <IoCloseOutline size="24px"></IoCloseOutline>
                                                 </div>
                                          )
                                   }
                            </div>
                            <div className="modal-content">
                                   {children}
                            </div>
                     </div>
              </ModalBase>
       )
}

export default Modal;