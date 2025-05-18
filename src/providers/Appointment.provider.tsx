import { useCallback, useState } from "react";
import appointmentContext from "../context/appointment.context";
import { useAppointmentData } from "../hooks/useAppointmentData";

interface IProps {
  children: React.ReactNode;
}

const AppointmentProvider = ({ children }: IProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { duration, onSchedule } = useAppointmentData();

  const handleSetStartDate = useCallback((date: Date | null) => {
    setStartDate(date);
  }, []);

  const handleSetStartHour = useCallback(
    (date: Date) => {
      if (!startDate) return;

      setStartDate((prev) => {
        if (!prev) return prev;
        const newDate = new Date(prev);
        newDate.setHours(date.getHours());
        return newDate;
      });

      const endDate = new Date(startDate);
      endDate.setHours(endDate.getHours() + duration);
      setEndDate(endDate);

      setIsReady(true);
    },
    [duration, startDate]
  );

  const handleSchedule = useCallback(async () => {
    if (!startDate || !endDate) return;

    setIsSubmitting(true);
    await onSchedule(startDate, endDate);
    setIsSubmitting(false);
  }, [endDate, onSchedule, startDate]);

  return (
    <appointmentContext.Provider
      value={{
        startDate,
        endDate,
        isReady,
        setStartDate: handleSetStartDate,
        setStartHour: handleSetStartHour,
        isSubmitting,
        handleSchedule,
      }}
    >
      {children}
    </appointmentContext.Provider>
  );
};

export default AppointmentProvider;
