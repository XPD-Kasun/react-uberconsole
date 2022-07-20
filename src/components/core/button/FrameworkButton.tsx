import { ReactChildren } from '../../../types';
import { FrameworkButtonProps } from './types';

function FrameworkButton(props: FrameworkButtonProps) {

       const onBtnClick = (evt) => {

              if (props.isEnabled) {
                     props.onClick && props.onClick(evt);
              }

       };

       let content: ReactChildren = null;

       if (props.isBusy) {
              content = props.busyContent;
       }
       else {
              content = props.children;
       }

       return (
              <button type={props.type} className={props.className} onClick={onBtnClick}>
                     { content}
              </button>
       )
}

export default FrameworkButton;