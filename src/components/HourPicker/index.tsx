import { useContext, useState } from "react";
import appointmentContext from "../../context/appointment.context";
import { useHourPicker } from "../../hooks/useHourPicker";

interface HourPickerProps {
  minHour?: number;
  maxHour?: number;
  interval?: number;
  disabled?: boolean;
}

const HourPicker: React.FC<HourPickerProps> = ({
  minHour = 8,
  maxHour = 18,
  interval = 30,
  disabled = false,
}) => {
  const { startDate, setStartHour } = useContext(appointmentContext);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  const { availableHours, userTimeZone } = useHourPicker({
    selectedDate: startDate,
    minHour,
    maxHour,
    interval,
  });

  const handleSelectHour = (hour: Date) => {
    if (disabled) return;

    setSelectedHour(
      hour.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );

    setStartHour(hour);
  };

  if (!startDate || availableHours.length === 0) {
    return <div className="text-gray-500">Selecione uma data primeiro</div>;
  }

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-2">Horários disponíveis</h3>
      <div className="flex flex-wrap gap-2">
        {availableHours.map((hour, index) => (
          <button
            key={index}
            onClick={() => handleSelectHour(hour.value)}
            className={`py-2 px-4 rounded-md text-sm ${
              selectedHour === hour.label
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            disabled={disabled}
            aria-selected={selectedHour === hour.label}
          >
            {hour.label}
          </button>
        ))}
      </div>
      <div className="mt-2 text-sm text-gray-500">
        Horários no seu fuso horário local ({userTimeZone})
      </div>
    </div>
  );
};

export default HourPicker;
