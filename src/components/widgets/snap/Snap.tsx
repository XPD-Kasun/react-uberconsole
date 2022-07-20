import { IoCaretDown } from 'react-icons/io5';
import FrameworkSnap from './FrameworkSnap';

const getDefaultHeader = (title, isCollapsible, onClickCollapsible) => {
       return (
              <>
                     {
                            isCollapsible && <div className="collapse" onClick={onClickCollapsible}><IoCaretDown></IoCaretDown></div>
                     }
                     <div className="header-title">{title}</div>
              </>
       )
}

function Snap({ title, isCollapsible, children }) {

       const onCollapsible = () => {
              alert('test')
       }

       return (
              <FrameworkSnap 
                     header={getDefaultHeader(title, isCollapsible, onCollapsible)} 
                     content={children}>                          
              </FrameworkSnap>
       )
}

export default Snap;