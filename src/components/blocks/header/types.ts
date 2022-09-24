import React, { KeyboardEvent } from "react";
import { BaseProps, ReactChildren } from "../../../types";
import { Bounds } from "../../core/overlay/types";

export interface HeaderProps extends BaseProps {
       mobileMenuToggle?: ReactChildren,
       mobileMenu?: ReactChildren
}

export interface HeaderDropdownProps extends BaseProps {
       onControllerConnect?: (requestShow: (show:boolean) => void) => void,
       headerElement: ReactChildren,
       dropdownClass: string,
       showOnHeaderElementClick?: boolean,
       dropdownLeftOffset: number,
       dropdownTopOffset: number,
       showOnMobile?: boolean,
       headerHeight: number

}

export interface MobileMenuProps extends BaseProps{
}