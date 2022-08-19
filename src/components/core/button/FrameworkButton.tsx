import cx from "classnames";
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
       
       let cls = cx({
              btn: true,
              disabled: !props.isEnabled,
              [props.className]: props.className       
       });

       return (
              <button type={props.type} className={cls} onClick={onBtnClick}>
                     { content}
              </button>
       )
}

export default FrameworkButton;