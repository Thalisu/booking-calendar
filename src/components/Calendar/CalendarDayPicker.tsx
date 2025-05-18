interface IProps {
  day: number;
  disabled: boolean;
  onClick: () => void;
  isSelected: boolean;
}

const CalendarDayPicker = ({ day, disabled, onClick, isSelected }: IProps) => {
  return (
    <button
      aria-disabled={disabled}
      aria-label={`Choose day ${day}`}
      disabled={disabled}
      className="w-full max-w-8 aspect-square  flex items-center justify-center text-sm hover:bg-blue-200!  rounded-full transition-colors disabled:opacity-70 disabled:cursor-not-allowed! disabled:bg-gray-200!"
      style={{
        backgroundColor: isSelected ? "#007bff" : "transparent",
        color: isSelected ? "white" : "black",
      }}
      onClick={onClick}
    >
      {day}
    </button>
  );
};

export default CalendarDayPicker;
