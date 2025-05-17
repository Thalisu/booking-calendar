import CalendarHeader from "./CalendarHeader";
import CalendarWeekSection from "./CalendarWeekSection";
import { useCalendar } from "../../hooks/useCalendar";
import CalendarDays from "./CalendarDays";
import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  locale: string;
}

const Calendar = ({ locale = "pt-BR", ...props }: IProps) => {
  const { currentDate, handlers, days, isToday } = useCalendar();

  return (
    <div
      className="w-full max-w-md flex flex-col p-4 box-border bg-white rounded-lg gap-3 min-w-80"
      role="application"
      aria-label="Calendar"
      aria-roledescription="Calendar"
      {...props}
    >
      <CalendarHeader
        locale={locale}
        currentDate={currentDate}
        onPrevMonth={handlers.handlePrevMonth}
        onNextMonth={handlers.handleNextMonth}
        isToday={isToday}
      />
      <div className="grid grid-cols-7 gap-2 place-items-center">
        <CalendarWeekSection locale={locale} />
        <CalendarDays calendarDays={days} currentDate={currentDate} />
      </div>
    </div>
  );
};

export default Calendar;
