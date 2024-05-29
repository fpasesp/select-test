interface MyOptionProps {
  option: { value: string; label: string };
  onClick: (value: string) => void;
}

const MyOption: React.FC<MyOptionProps> = ({ option, onClick }) => {
  return (
    <div
      key={option.value}
      className="select-option"
      onClick={() => onClick(option.value)}
      data-testid="option-container"
    >
      {option.label}
    </div>
  );
};

export default MyOption;
