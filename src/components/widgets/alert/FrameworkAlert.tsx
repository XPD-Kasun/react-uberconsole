import { AlertProps, AlertType } from './types';
import cx from "classnames";
import { IoInformationCircleOutline, IoCloseCircleOutline, IoWarningOutline, IoClose } from 'react-icons/io5';

function FrameworkAlert({ className, icon, onClose, type = AlertType.default, children, canClose = false }: AlertProps) {

       let Icon = icon;
       let iconColor = '';

       const _onClose = (evt) => {
              onClose && onClose(evt);              
       };

       if (!Icon) {

              switch (type) {
                     case AlertType.default:
                            Icon = IoInformationCircleOutline;
                            iconColor = "#555";
                            break;

                     case AlertType.info:
                            Icon = IoInformationCircleOutline;
                            iconColor = '#3d51b5';
                            break;

                     case AlertType.warn:
                            Icon = IoWarningOutline;
                            iconColor = '#7f5b0d';
                            break;

                     case AlertType.error:
                            Icon = IoCloseCircleOutline;
                            iconColor = '#e91e63';
                            break;
              }
       }

       let cls = cx({
              "info-panel": true,
              [type]: type,
              [className]: className
       });

       return (
              <div className={cls}>
                     <div className="panel-container">
                            <div className="panel-layer">
                                   <div className="icon">
                                          <Icon size="20" color={iconColor} style={{strokeWidth:3}}/>
                                   </div>
                                   <div className="panel-content">
                                          {children}
                                   </div>
                                   {
                                          canClose && <div className="icon close-btn" onClick={_onClose}><IoClose></IoClose></div>
                                   }
                            </div>
                     </div>
              </div>
       )
}

export default FrameworkAlert;