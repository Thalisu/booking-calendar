import { useContext, useState } from "react";
import HourPicker from "../HourPicker";
import appointmentContext from "../../context/appointment.context";
import CalendarStep from "./CalendarStep";

type Step = number;

const Scheduler = () => {
  const { startDate } = useContext(appointmentContext);
  const [currentStep, setCurrentStep] = useState<Step>(0);

  const handleDateSelect = () => {
    if (startDate) {
      setCurrentStep(1);
    }
  };

  const handleBackToCalendar = () => {
    setCurrentStep(0);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg p-4 shadow-sm">
      {currentStep === 0 ? (
        <CalendarStep handleDateSelect={handleDateSelect} />
      ) : (
        <HourPicker handleBackToCalendar={handleBackToCalendar} />
      )}
    </div>
  );
};

export default Scheduler;
