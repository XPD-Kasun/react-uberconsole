import * as React from "react";
import { KeySelector, ControlDataSource, ReactChildren } from "../../../types";


export interface DropdownProps {
       children: ReactChildren
       className: string,
       dataSource: ControlDataSource,
       selectedId: string,
       isBlur?: boolean,
       onSearchChange?: (text: string) => void,
       labelComponent: React.FC<{ item: object }>,
       listItemComponent: React.FC<{ item: object, onSelect: (evt: MouseEvent, item: object) => void }>
}

export interface SimpleDropdownProps extends DropdownProps {
       textSelector: KeySelector
}
