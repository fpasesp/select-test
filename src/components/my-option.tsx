interface MyOptionProps {
  handleOptionClick: (value: string) => string;
  value: number;
  label: string;
}

const MyOption: React.FC<MyOptionProps> = ({ handleOptionClick, value, label }) => {
  
  return (
    <div
      key={value}
      className="select-option"
      onClick={() => handleOptionClick(label)}
      data-testid="option-container"
    >
      {label}
    </div>
  );
};

export default MyOption;
