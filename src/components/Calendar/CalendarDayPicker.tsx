interface IProps {
  day: number;
  disabled: boolean;
  onClick: () => void;
  isSelected: boolean;
}

const CalendarDayPicker = ({ day, disabled, onClick, isSelected }: IProps) => {
  return (
    <button
      disabled={disabled}
      className={`w-full max-w-8 aspect-square  flex items-center justify-center text-sm  rounded-full transition-colors ${
        isSelected ? "bg-blue-600 text-white" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {day}
    </button>
  );
};

export default CalendarDayPicker;
