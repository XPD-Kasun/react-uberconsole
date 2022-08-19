import React from "react";
import { ReactChildren } from "../../../types";
import { Bounds } from "../../core/overlay/types";


export interface HeaderDropdownProps {
       id: number,
       isVisible : boolean,       
       onChangeVisibility: (id:number, show: boolean) => void,
       showOverlay: boolean,
       overlayOffset?: Bounds,
       title: ReactChildren,
       children: ReactChildren,
       dropdownClass: string,
       dropdownTopOffset?: number,
       dropdownLeftOffset?: number,
       hideOnOverlayClick: boolean,
       showOnMobile?: boolean
}

export interface MobileMenuProps {
       children: ReactChildren,
       className: string
}