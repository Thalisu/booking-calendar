import { useEffect, useState } from "react";
import { useIsMobile } from "./useIsMobile";

export const useDaysOfTheWeek = (locale: string) => {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const isMobile = useIsMobile(384);

  useEffect(() => {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(2023, 0, 1 + i);
      const day = date.toLocaleString(locale, { weekday: "short" });
      weekDays.push(
        day.charAt(0).toUpperCase() +
          day.slice(1, isMobile ? 2 : 3).replace(".", "")
      );
    }

    setWeekDays(weekDays);
  }, [isMobile, locale]);

  return weekDays;
};
