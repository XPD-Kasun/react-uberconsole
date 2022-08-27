import { useState } from "react";
import cx from 'classnames';
import { CheckboxProps } from "./types";

export default function FrameworkCheckBox({
       className,
       htmlID,
       name,
       isChecked = false,
       isEnabled = true,
       value,
       onChange,
       toggleComponent,
       children }: CheckboxProps) {

       let cls = cx({
              "checkbox": true,
              [className]: className,
              disabled: !isEnabled,
              checked: isChecked
       });

       const onClick = () => {

              if (isEnabled) {
                     onChange && onChange(isChecked);
              }

       };

       return (
              <div className={cls} onClick={onClick}>
                     <div className="checkbox-container">
                            <div className="toggle">
                                   {toggleComponent}
                            </div>
                            <div className="label">{children}</div>
                            <input id={htmlID} name={name} type="checkbox" value={value} checked={isChecked} readOnly />
                     </div>
              </div>

       );
}