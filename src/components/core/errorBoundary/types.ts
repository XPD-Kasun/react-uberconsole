import React from "react";
import { ReactChildren } from "../../../types";

export interface ErrorBoundaryProps {
       children: ReactChildren,
       logErrors?: boolean,
       logFn?: (error: Error, errorInfo: React.ErrorInfo) => void,
       errorUI?: ReactChildren
}

export interface ErrorBoundaryState {
       hasError: boolean
}