import { IoSearch } from 'react-icons/io5';
import cx from 'classnames';
import FrameworkTextBox from './FrameworkTextBox';
import { BaseTextboxProps, SearchTextBoxProps } from './types';

function SearchTextBox(props: SearchTextBoxProps) {

       let searchBtnSize= props.searchBtnSize;

       if(!searchBtnSize) {
              searchBtnSize = 18;
       }

       let cls = cx({
              [props.className]: props.className,
              'search': true,
              'can-clear': props.canClear
       });

       return (
              <div className={cls}>
                     <IoSearch style={{flexShrink: 0}} size={searchBtnSize} />
                     <FrameworkTextBox {...props} hasBorder={false} />
              </div>
       )
}

export default SearchTextBox;