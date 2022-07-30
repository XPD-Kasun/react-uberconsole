import { useState } from 'react';
import { IoCaretDown } from 'react-icons/io5';
import FrameworkSnap from './FrameworkSnap';
import { SnapProps } from './types';

const getDefaultHeader = (title, actionArea, isCollapsible, isCollapsed, onClickCollapsible) => {
       return (
              <div className="snap-default-header">
                     {
                            isCollapsible && <div className="collapse" onClick={onClickCollapsible}><IoCaretDown style={{ transform: `rotate(${isCollapsed ? 270 : 0}deg)` }} color="#2f3137"></IoCaretDown></div>
                     }
                     <div className="title-content">
                            <div className="header-title">{title}</div>
                            <div className="action-area">
                                   {
                                          actionArea
                                   }
                            </div>
                     </div>
              </div>
       )
}

function Snap({ title, actionArea, isCollapsible, children }: SnapProps) {

       let [isCollapsed, setIsCollapsed] = useState(false);

       const onCollapsible = () => {
              setIsCollapsed(val => !val);
       };

       return (
              <FrameworkSnap
                     header={getDefaultHeader(title, actionArea, isCollapsible, isCollapsed, onCollapsible)}>
                     {
                            !isCollapsed && children
                     }
              </FrameworkSnap>
       )
}

export default Snap;