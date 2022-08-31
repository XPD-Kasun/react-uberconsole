import { FormControlProps } from "../../../types";

export interface BaseTextboxProps extends FormControlProps {
       placeholder?: string,
       onChange?: (evt: KeyboardEvent) => void,
       canClear?: boolean
}

export interface TextboxProps extends BaseTextboxProps {       
       hasBorder?: boolean,
       clearBtnSize?: string | number,
       onClear?: Function
}

export interface SearchTextBoxProps extends TextboxProps {
       searchBtnSize?: string | number
}
