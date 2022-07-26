import React from "react";
import { ReactChildren } from "../../../types";
import { Bounds } from "../../core/overlay/types";


export interface HeaderDropdownProps {
       isShowing: boolean,
       showOverlay: boolean,
       headerHeight: number,
       title: ReactChildren,
       children: ReactChildren,
       dropdownTopOffset?: number,
       dropdownLeftOffset?: number,
       hideOnOverlayClick: boolean,
       onDropdownClick: (evt: React.MouseEvent) => void
}