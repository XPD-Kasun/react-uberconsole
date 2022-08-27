import * as React from "react";
import { KeySelector, ControlDataSource, ReactChildren, FormControlProps, BaseProps } from "../../../types";


export interface BaseDropdownProps extends BaseProps {
       dataSource: ControlDataSource,
       htmlID?: string,
       isEnabled?: boolean,
       name?: string,
       selectedId: string,
       onSearchChange?: (text: string) => void,
       labelComponent: React.FC<{ item: object }>,
       listItemComponent: React.FC<{ item: object, onSelect: (evt: MouseEvent, item: object) => void }>
}

export interface FrameworkDropdownProps extends BaseDropdownProps {       
       isBlur?: boolean,
}

export interface DropdownProps extends BaseDropdownProps {
       textSelector: KeySelector
}
