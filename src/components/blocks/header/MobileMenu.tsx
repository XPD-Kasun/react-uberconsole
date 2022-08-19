import cx from "classnames";
import { MobileMenuProps } from "./types";

function MobileMenu({className, children}: MobileMenuProps) {

       let cls = cx({
              'mobile-menu': true,
              [className]: className
       });


       return (
              <div className={cls}>
                     {
                            children
                     }
              </div>
       )
}

export default MobileMenu;