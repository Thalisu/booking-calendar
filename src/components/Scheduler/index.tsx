import { useContext, useState } from "react";
import HourPicker from "../HourPicker";
import appointmentContext from "../../context/appointment.context";
import CalendarStep from "./CalendarStep";

type Step = number;

const Scheduler = () => {
  const { startDate } = useContext(appointmentContext);
  const [currentStep, setCurrentStep] = useState<Step>(0);
  const [animate, setAnimate] = useState(0);

  const handleDateSelect = () => {
    if (!startDate) return;

    setAnimate(1);

    setTimeout(() => {
      setCurrentStep(1);
    }, 200);
  };

  const handleBackToCalendar = () => {
    setAnimate(0);

    setTimeout(() => {
      setCurrentStep(0);
    }, 200);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg p-4 shadow-sm h-124">
      {currentStep === 0 ? (
        <CalendarStep
          handleDateSelect={handleDateSelect}
          toAnimate={animate === 1}
        />
      ) : (
        <HourPicker
          handleBackToCalendar={handleBackToCalendar}
          toAnimate={animate === 0}
        />
      )}
    </div>
  );
};

export default Scheduler;
