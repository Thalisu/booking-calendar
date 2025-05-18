import { createContext } from "react";
import type { IAppointmentData } from "../types";

const appointmentContext = createContext<IAppointmentData>({
  label: { calendar: "", hourPicker: "" },
  minHour: 8,
  maxHour: 18,
  interval: 60,
  calendarProps: {},
  hourPickerProps: {},
  duration: 1,
  locale: "pt-BR",
  onSchedule: () => Promise.resolve(),
});

export default appointmentContext;
