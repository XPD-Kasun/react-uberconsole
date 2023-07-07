import { BaseProps } from "../../../types";

export interface OverlayProps extends BaseProps {
    isShowing: boolean,
    overlayBounds?: Bounds,
    onOverlayClick?: (evt: MouseEvent) => void
}

export interface ModalBaseProps extends BaseProps {
    isShowing: boolean;
    closeTimeout?: number;
}

export interface ModalProps extends ModalBaseProps {
    title?: string,
    showCloseBtn?: boolean,
    onCloseBtnClick: (evt: MouseEvent) => void
}

export type Bounds = {
    top: number,
    left: number,
    right: number,
    bottom: number
};

export interface PopoverProps extends BaseProps {
    isShowing: boolean,
    overlayBounds?: Bounds,
    showOverlay: boolean,
    onOverlayClick: (evt: MouseEvent) => void
}

export interface PopoverWithRefProps extends PopoverProps {
    popoverRef: any
}

export interface ContextMenuProps extends BaseProps {
    owner?: HTMLElement,
}