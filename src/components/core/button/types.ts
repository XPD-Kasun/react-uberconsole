import * as React from "react";
import { BaseProps, ReactChildren } from "../../../types";

export enum ButtonType {
       submit = 'submit',
       reset = 'reset',
       button = 'button'
}

export interface FrameworkButtonProps extends BaseProps {
       isEnabled?:boolean,
       type?: ButtonType,
       onClick?: (evt: React.MouseEvent<HTMLElement>) => void,
       busyContent?: ReactChildren,
       isBusy?: boolean
}


