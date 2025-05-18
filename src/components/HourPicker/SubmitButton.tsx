import { useAppointment } from "../../hooks/useAppointment";

interface IProps {
  handleBackToCalendar: () => void;
}

const SubmitButton = ({ handleBackToCalendar }: IProps) => {
  const { isSubmitting, handleSchedule, isReady } = useAppointment();

  return (
    <div className="grid grid-cols-2 gap-3 mt-auto">
      <button
        onClick={handleBackToCalendar}
        className="py-2 px-4 rounded-md text-blue-600 border border-blue-600 hover:bg-blue-50"
        disabled={isSubmitting}
      >
        Alterar data
      </button>
      <button
        onClick={handleSchedule}
        disabled={isSubmitting || !isReady}
        className="py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed! disabled:hover:bg-blue-600"
      >
        {isSubmitting ? "Agendando..." : "Confirmar"}
      </button>
    </div>
  );
};

export default SubmitButton;
