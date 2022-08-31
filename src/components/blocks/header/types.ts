import React, { KeyboardEvent } from "react";
import { BaseProps, ReactChildren } from "../../../types";
import { Bounds } from "../../core/overlay/types";

export interface HeaderProps extends BaseProps {
       mobileMenuToggle?: ReactChildren,
       mobileMenu?: ReactChildren
}

export interface HeaderDropdownProps extends BaseProps {
       id: number,
       isVisible : boolean,       
       onChangeVisibility: (id:number, show: boolean) => void,
       showOverlay: boolean,
       overlayOffset?: Bounds,
       headerElement: ReactChildren,
       dropdownClass: string,
       showOnHeaderElementClick?: boolean,
       dropdownTopOffset?: number,
       dropdownLeftOffset?: number,
       hideOnOverlayClick: boolean,
       showOnMobile?: boolean
}

export interface MobileMenuProps extends BaseProps{
}