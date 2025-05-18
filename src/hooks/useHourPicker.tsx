import { useMemo } from "react";
import { useAppointment } from "./useAppointment";
import { useAppointmentData } from "./useAppointmentData";

interface HourOption {
  label: string;
  value: Date;
}

export const useHourPicker = () => {
  const { minHour, maxHour, interval } = useAppointmentData();
  const { startDate } = useAppointment();

  const userTimeZone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    []
  );

  const availableHours = useMemo(() => {
    if (!startDate) return [];

    const hours: HourOption[] = [];
    const date = new Date(startDate);

    date.setHours(minHour, 0, 0, 0);

    const currentTime = new Date();
    const isToday = startDate.toDateString() === currentTime.toDateString();

    while (date.getHours() < maxHour) {
      if (isToday && date <= currentTime) {
        date.setMinutes(date.getMinutes() + interval);
        continue;
      }

      const timeValue = new Date(date);

      const formattedHour = timeValue.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      hours.push({
        label: formattedHour,
        value: timeValue,
      });

      date.setMinutes(date.getMinutes() + interval);
    }

    return hours;
  }, [startDate, minHour, maxHour, interval]);

  /**
   * Convert a date to another time zone
   * @param date Date to be converted
   * @param targetTimeZone Target time zone
   * @returns Formatted date in the target time zone
   */
  const convertToTimeZone = (date: Date, targetTimeZone: string) => {
    return new Date(date.toLocaleString("en-US", { timeZone: targetTimeZone }));
  };

  /**
   * Format a date to display in the specified time zone
   * @param date Date to be formatted
   * @param timeZone Time zone to format
   * @returns Formatted date with hour and minute in the specified time zone
   */
  const formatInTimeZone = (date: Date, timeZone: string) => {
    return date.toLocaleTimeString("pt-BR", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return {
    availableHours,
    userTimeZone,
    convertToTimeZone,
    formatInTimeZone,
  };
};
