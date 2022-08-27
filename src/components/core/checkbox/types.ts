import { FormControlProps, ReactChildren } from "../../../types";

export interface CheckboxProps extends FormControlProps {
       isChecked?: boolean,
       onChange?: (isChecked: boolean) => void,
       toggleComponent?: ReactChildren,
       children?: ReactChildren
}