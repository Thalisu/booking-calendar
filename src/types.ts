import type { HTMLAttributes } from "react";

export type TSupportedLocales = "pt-BR" | "en";

export interface ICalendarDay {
  day: number | null;
  disabled: boolean;
}

export interface IAppointmentDataContext {
  label?: { calendar: string; hourPicker: string };
  locale?: TSupportedLocales;
  duration?: number;
  minHour?: number;
  maxHour?: number;
  onSchedule: (startDate: Date, endDate: Date) => Promise<void>;
  calendarProps?: HTMLAttributes<HTMLDivElement>;
  hourPickerProps?: HTMLAttributes<HTMLDivElement>;
}

export interface IAppointmentData extends Required<IAppointmentDataContext> {
  interval: number;
}
