import React from "react";
import { IconType } from "react-icons";
import { BaseProps, ReactChildren } from "../../../types";


export enum AlertType {
       default = "default",
       info = "info",
       error = 'error',
       warn = 'warn'
}

export interface AlertProps extends BaseProps {
       icon?: IconType,
       onClose?: (evt: React.MouseEvent) => void,
       type?:AlertType,
       canClose?: boolean
}