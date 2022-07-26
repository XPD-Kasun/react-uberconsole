import React from 'react';
import cx from 'classnames';
import { Align, FlexProps, Direction } from "./types";

export function Flex({ className, children, direction = Direction.Row, align = Align.Left, xalign = Align.Center }: FlexProps) {

       let cls = 'v-flex';

       if (direction == Direction.Column) {
              cls = 'h-flex';
       }

       cls = cx({
              [cls]: true,
              [className]: className
       });

       let style = {
              justifyContent: align,
              alignItems: xalign
       };

       return (
              <div className={cls} style={style}>
                     {
                            children
                     }
              </div>
       )

}

export default React.memo(Flex);