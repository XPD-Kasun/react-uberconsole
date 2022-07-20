import { infoPanelType } from './types';
import { IoInformationCircleOutline, IoCloseCircleOutline, IoWarningOutline, IoClose } from 'react-icons/io5';

function FrameworkInfoPanel({ className = "info-panel", icon, onClose, type = infoPanelType.default, children, canClose = false }) {

       let Icon = icon;
       let iconColor = '';

       const _onClose = (evt) => {
              onClose && onClose(evt);              
       };

       if (!Icon) {

              switch (type) {
                     case infoPanelType.default:
                            Icon = IoInformationCircleOutline;
                            iconColor = "#555";
                            break;

                     case infoPanelType.info:
                            Icon = IoInformationCircleOutline;
                            iconColor = '#3d51b5';
                            break;

                     case infoPanelType.warn:
                            Icon = IoWarningOutline;
                            iconColor = '#7f5b0d';
                            break;

                     case infoPanelType.error:
                            Icon = IoCloseCircleOutline;
                            iconColor = '#e91e63';
                            break;
              }
       }


       return (
              <div className={className + ' ' + type}>
                     <div className="panel-container">
                            <div className="panel-layer">
                                   <div className="icon">
                                          <Icon color={iconColor} style={{strokeWidth:3}}/>
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

export default FrameworkInfoPanel;