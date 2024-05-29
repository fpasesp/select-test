import React, { useEffect, useRef, useState } from "react";
import MyOption from "./my-option";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface MySelectProps {
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
}

const MySelect: React.FC<MySelectProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  const handleOutClick = (e: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const selectedLabel = options.find((option) => option.value === value)?.label;

  return (
    <div className="select-container" ref={selectRef} data-testid="select-container">
      <div className="select-display" onClick={handleToggleOpen} data-testid="select-option">
        {selectedLabel || "Elija una opción"}
        <ArrowDropDownIcon />
      </div>
      {isOpen && (
        <div className="select-options">
          {options.map((option) => (
            <MyOption
              key={option.value}
              option={option}
              onClick={() => handleOptionClick(option.value)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MySelect;
