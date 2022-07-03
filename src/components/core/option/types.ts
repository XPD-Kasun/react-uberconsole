import {KeySelector, ControlDataSource } from '../../../types';

export interface OptionGroupProps {
       dataSource: ControlDataSource,
       selectedId: string,
       textSelector: KeySelector,
       isEnabled: boolean,
       isSelected: boolean,
       name: string,
       onChange: (item: any) => void
}