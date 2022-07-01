import * as React from "react";
import { ReactChildren } from "../../../types";

export type ButtonType = 'submit' | 'reset' | 'button' | undefined;

export interface FrameworkButtonProps {
       type?: ButtonType,
       className?: string,
       children: ReactChildren,
       isEnabled?: boolean,
       onClick?: (evt: React.MouseEvent<HTMLElement>) => void,
       busyContent?: ReactChildren,
       isBusy?: boolean
}


