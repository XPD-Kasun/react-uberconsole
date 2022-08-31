import React from 'react';
import cx from 'classnames';
import { BoxProps } from "./types";


function Box({className, children}: BoxProps) {

       let cls = cx({
              box: true,
              [className]: className
       });

       return (
              <div className={cls}>
                     {children}
              </div>
       );

}

export default Box;