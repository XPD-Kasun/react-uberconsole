import { IoSearch } from 'react-icons/io5';
import cx from 'classnames';
import FrameworkTextBox from './FrameworkTextBox';
import { BaseTextboxProps } from './types';

function SearchTextBox(props: BaseTextboxProps) {

       let cls = cx({
              [props.className]: props.className,
              'search': true
       });

       return (
              <div className={cls}>
                     <IoSearch size={18} />
                     <FrameworkTextBox {...props} hasBorder={false} />
              </div>
       )
}

export default SearchTextBox;