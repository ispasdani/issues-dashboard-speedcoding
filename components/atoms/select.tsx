import React from "react";

interface SelectProps {
  value: number;
  onChange: (value: number) => void;
  options: number[];
}

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
