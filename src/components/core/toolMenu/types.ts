import { BaseProps, ReactChildren } from "../../../types";
import { Bounds } from "../overlay";
import { PopoverManager } from "../uberProvider/types";

export interface ToolMenuProps extends BaseProps {
       onControllerConnect?: (requestShow: (show:boolean) => void) => void,
       showOverlay: boolean,
       popoverManager: PopoverManager,
       overlayOffset?: Bounds,
       toolElement: ReactChildren,
       dropdownClass: string,
       showOnToolElementClick?: boolean,
       dropdownTopOffset?: number,
       dropdownLeftOffset?: number,
       hideOnOverlayClick: boolean,
       showOnMobile?: boolean
}