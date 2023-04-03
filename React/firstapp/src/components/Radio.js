import * as React from "react";

export const RadioGroup = ({ children, selected, onChange }) => {
    const RadioOptions = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            checked: child.props.value === selected,
            onChange: onChange
        });
    });

    return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
    return (
      <div className="RadioOption">
        <input id={value} type="radio" name={value} value={value} checked={checked} onChange={(e) => {onChange(e.target.value);}} />
        <label htmlFor={value}>{children}</label>
      </div>
    );
  };