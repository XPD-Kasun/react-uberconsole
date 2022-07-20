import { ReactChildren } from "../../../types";

export enum Align {
       Left = 'left',
       Right = 'right',
       Center = 'center'
}

export enum Direction {
       Row = 'row',
       Column = 'column'
};


export interface FlexProps {
       children: ReactChildren,
       align: Align,
       direction: Direction,
       className: string
}
