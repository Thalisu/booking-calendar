import { useAppointment } from "../../hooks/useAppointment";
import { useAppointmentData } from "../../hooks/useAppointmentData";
import { FaArrowLeft } from "react-icons/fa";

const HourPickerHeader = ({
  handleBackToCalendar,
}: {
  handleBackToCalendar: () => void;
}) => {
  const { startDate } = useAppointment();
  const { locale } = useAppointmentData();
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium">Selecione um horário</h3>
        <button
          onClick={handleBackToCalendar}
          className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go back to calendar"
          title="Go back to calendar"
        >
          <FaArrowLeft className="w-3 h-3" aria-hidden="true" />
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Data selecionada:</strong>{" "}
          {startDate?.toLocaleDateString(locale)}
        </p>
      </div>
    </>
  );
};

export default HourPickerHeader;
