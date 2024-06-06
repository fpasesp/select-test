import React, { useEffect, useRef, useState } from "react";
import MyOption from "./my-option";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface MySelectProps {
  onChange: (value: string) => void;
}

const MySelect: React.FC<MySelectProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (selectedValue: string) => {
    setSelectedValue(selectedValue);
    setIsOpen(false);
    onChange(selectedValue);
    return selectedValue;
  };

  const handleOutClick = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <div
      className="select-container"
      ref={selectRef}
      data-testid="select-container"
    >
      <div
        className="select-display"
        onClick={handleToggleOpen}
        data-testid="select-option"
      >
        {selectedValue || "Elija una opción"}
        <ArrowDropDownIcon />
      </div>
      {isOpen && (
        <div className="select-options">
          <MyOption
            value={handleOptionClick}
            label="uno"
          />
          <MyOption
            value={handleOptionClick}
            label="dos"
          />
          <MyOption
            value={handleOptionClick}
            label="tres"
          />
          <MyOption
            value={handleOptionClick}
            label="cuatro"
          />
        </div>
      )}
    </div>
  );
};

export default MySelect;