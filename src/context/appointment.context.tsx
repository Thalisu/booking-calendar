import { createContext } from "react";

interface IAppointmentContext {
  startDate: Date | null;
  endDate: Date | null;
  isReady: boolean;
  setStartDate: (date: Date) => void;
  setStartHour: (date: Date) => void;
}

const appointmentContext = createContext<IAppointmentContext>({
  startDate: null,
  endDate: null,
  isReady: false,
  setStartDate: () => {},
  setStartHour: () => {},
});

export default appointmentContext;
