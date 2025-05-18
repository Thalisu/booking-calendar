import HourPickerHeader from "./HourPickerHeader";
import { useAppointment } from "../../hooks/useAppointment";
import Hours from "./Hours";
import SubmitButton from "./SubmitButton";

interface IProps {
  handleBackToCalendar: () => void;
}

const HourPicker = ({ handleBackToCalendar }: IProps) => {
  const { startDate } = useAppointment();

  if (!startDate) {
    return <div className="text-gray-500">Selecione uma data primeiro</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <HourPickerHeader handleBackToCalendar={handleBackToCalendar} />
      <Hours />
      <SubmitButton handleBackToCalendar={handleBackToCalendar} />
    </div>
  );
};

export default HourPicker;
