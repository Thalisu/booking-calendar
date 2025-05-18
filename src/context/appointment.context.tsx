import { createContext } from "react";

interface IAppointmentContext {
  startDate: Date | null;
  endDate: Date | null;
  isReady: boolean;
  setStartDate: (date: Date | null) => void;
  setStartHour: (date: Date) => void;
  isSubmitting: boolean;
  handleSchedule: () => Promise<void>;
}

const appointmentContext = createContext<IAppointmentContext>({
  startDate: null,
  endDate: null,
  isReady: false,
  setStartDate: () => {},
  setStartHour: () => {},
  isSubmitting: false,
  handleSchedule: () => Promise.resolve(),
});

export default appointmentContext;
