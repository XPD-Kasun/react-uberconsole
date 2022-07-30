import React, { ForwardRefExoticComponent } from "react";
import { ReactChildren } from "../../../types";

export interface ModalProps {
    children: ReactChildren;
    isShowing: boolean;
    className: string;
}

export type Bounds = {
    top: number,
    left: number,
    right: number,
    bottom: number
};

export interface PopoverProps {
    x: number,
    y: number,
    className?: string,
    isShowing: boolean,
    overlayBounds?: Bounds,
    showOverlay: boolean,
    children: ReactChildren,
    onOverlayClick: (evt: MouseEvent) => void
}

export interface PopoverWithRefProps extends PopoverProps {
    popoverRef: any
}

export interface ContextMenuProps {
    children: ReactChildren,
    target?: HTMLElement,
    className?: string
}