import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ICalendarDay } from "../types";

export const useCalendar = () => {
  const today = useRef(new Date());
  const [currentDate, setCurrentDate] = useState(today.current);

  const [days, setDays] = useState<ICalendarDay[]>([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startingDayOfWeek = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const daysArray: ICalendarDay[] = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      daysArray.push({ day: null, disabled: true });
    }

    for (let i = 1; i <= totalDays; i++) {
      daysArray.push({ day: i, disabled: false });
    }

    setDays(daysArray);
  }, [currentDate]);

  const handlePrevMonth = useCallback(() => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1);
      if (newDate.getMonth() < today.current.getMonth()) {
        return prev;
      }
      return newDate;
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  }, []);

  const isToday = useMemo(() => {
    return (
      currentDate.getFullYear() === today.current.getFullYear() &&
      currentDate.getMonth() === today.current.getMonth()
    );
  }, [currentDate]);

  return {
    days,
    handlers: {
      handlePrevMonth,
      handleNextMonth,
    },
    currentDate,
    isToday,
  };
};
