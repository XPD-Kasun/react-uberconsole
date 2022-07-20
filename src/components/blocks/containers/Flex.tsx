import { Align, FlexProps, Direction } from "./types";

export function Flex({ children, direction=Direction.Row, align = Align.Left}: FlexProps) {

       let cls = 'va-flex';

       if(direction == Direction.Column) {
              cls = 'ha-flex';
       }

       let style = {
              justifyContent: 'start'
       };

       switch (align) {
              case Align.Right:
                     style.justifyContent = 'end';
                     break;

              case Align.Center:
                     style.justifyContent = 'center';
                     break;
       }


       return (
              <div className={cls} style={style}>
                     {
                            children
                     }
              </div>
       )

}


export function FlexItem() {

       

}