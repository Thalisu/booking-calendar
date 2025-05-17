import { useCallback, useState } from "react";
import appointmentContext from "../context/appointment.context";

interface IProps {
  children: React.ReactNode;

  duration?: number;
}

const AppointmentProvider = ({ children, duration = 1 }: IProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isReady, setIsReady] = useState(false);

  const handleSetStartDate = useCallback((date: Date) => {
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

  return (
    <appointmentContext.Provider
      value={{
        startDate,
        endDate,
        isReady,
        setStartDate: handleSetStartDate,
        setStartHour: handleSetStartHour,
      }}
    >
      {children}
    </appointmentContext.Provider>
  );
};

export default AppointmentProvider;
