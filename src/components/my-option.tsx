interface MyOptionProps {
  value: (value: string) => string;
  label: string;
}

const MyOption: React.FC<MyOptionProps> = ({ value, label }) => {
  
  return (
    <div
      key={label}
      className="select-option"
      onClick={() => value(label)}
      data-testid="option-container"
    >
      {label}
    </div>
  );
};

export default MyOption;
