import { useHourPicker } from "../../hooks/useHourPicker";

import HoursButton from "./HoursButton";

const Hours = () => {
  const { availableHours } = useHourPicker();

  if (availableHours.length === 0) {
    return <div className="text-gray-500">Nenhum horário disponível</div>;
  }

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-2">Horários disponíveis</h3>
      <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-2 w-full">
        {availableHours.map((hour, index) => (
          <HoursButton key={index} hour={hour} />
        ))}
      </div>
    </div>
  );
};

export default Hours;
