import { IoSearch } from 'react-icons/io5';
import cx from 'classnames';
import FrameworkTextBox from './FrameworkTextBox';

function SearchTextBox(props){

       let cls = cx({
              [props.className]: props.className,
              'search': true
       });

       return (
              <div className={cls}>
                     <IoSearch size={18}/>
                     <FrameworkTextBox {...props} hasBorder={false}/>
              </div>
       )
}

export default SearchTextBox;