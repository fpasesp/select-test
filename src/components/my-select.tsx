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
            handleOptionClick={handleOptionClick}
            value={1}
            label="uno"
          />
          <MyOption
            handleOptionClick={handleOptionClick}
            value={2}
            label="dos"
          />
          <MyOption
            handleOptionClick={handleOptionClick}
            value={3}
            label="tres"
          />
          <MyOption
            handleOptionClick={handleOptionClick}
            value={4}
            label="cuatro"
          />
        </div>
      )}
    </div>
  );
};

export default MySelect;
