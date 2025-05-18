import { useMemo } from "react";
import { useAppointment } from "../../hooks/useAppointment";

const HoursButton = ({ hour }: { hour: { label: string; value: Date } }) => {
  const { isSubmitting, setStartHour, startDate } = useAppointment();

  const handleSelectHour = (hour: Date) => {
    if (isSubmitting) return;

    setStartHour(hour);
  };

  const isSelected = useMemo(
    () => startDate?.getHours() === hour.value.getHours(),
    [startDate, hour]
  );

  return (
    <button
      onClick={() => handleSelectHour(hour.value)}
      className={`py-2 px-4 rounded-md text-sm transition-colors w-full ${
        isSelected
          ? "bg-blue-600 text-white"
          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
      } ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      disabled={isSubmitting}
      aria-selected={isSelected}
    >
      {hour.label}
    </button>
  );
};

export default HoursButton;
