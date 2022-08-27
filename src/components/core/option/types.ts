import {KeySelector, ControlDataSource, FormControlProps } from '../../../types';

export interface OptionProps extends FormControlProps {
       isChecked?: boolean,
       onChange: (isChecked: boolean) => void
}

export interface OptionGroupProps {
       dataSource: ControlDataSource,
       selectedId: string,
       textSelector: KeySelector,
       isEnabled?: boolean,
       htmlID?: string,
       name: string,
       onChange?: (item: any) => void
}