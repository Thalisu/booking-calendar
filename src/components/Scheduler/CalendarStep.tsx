import { useAppointment } from "../../hooks/useAppointment";
import { useAppointmentData } from "../../hooks/useAppointmentData";
import Calendar from "../Calendar";

interface IProps {
  handleDateSelect: () => void;
}

const CalendarStep = ({ handleDateSelect }: IProps) => {
  const { label } = useAppointmentData();
  const { startDate } = useAppointment();

  return (
    <>
      {label && (
        <h3 className="text-lg font-medium mb-3">Selecione uma data</h3>
      )}
      <Calendar />

      <div className="mt-4">
        <button
          onClick={handleDateSelect}
          disabled={!startDate}
          className="w-full py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed! disabled:hover:bg-blue-600"
        >
          Continuar para selecionar horário
        </button>
      </div>
    </>
  );
};

export default CalendarStep;
