import { FormControlProps } from "../../../types";

export interface BaseTextboxProps extends FormControlProps {
       placeholder?: string,
       onChange?: (evt: KeyboardEvent) => void
}

export interface TextboxProps extends BaseTextboxProps {       
       hasBorder?: boolean,
}

