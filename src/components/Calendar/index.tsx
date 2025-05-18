import CalendarHeader from "./CalendarHeader";
import CalendarWeekSection from "./CalendarWeekSection";
import { useCalendar } from "../../hooks/useCalendar";
import CalendarDays from "./CalendarDays";
import { useAppointmentData } from "../../hooks/useAppointmentData";

const Calendar = () => {
  const { currentDate, handlers, days, isToday } = useCalendar();
  const { calendarProps, locale } = useAppointmentData();

  return (
    <div
      className="w-full max-w-md flex flex-col p-4 box-border rounded-lg gap-3 "
      role="application"
      aria-label="Calendar"
      aria-roledescription="Calendar"
      {...calendarProps}
    >
      <CalendarHeader
        locale={locale}
        currentDate={currentDate}
        onPrevMonth={handlers.handlePrevMonth}
        onNextMonth={handlers.handleNextMonth}
        isToday={isToday}
      />
      <div className="grid grid-cols-7 gap-2 place-items-center h-72">
        <CalendarWeekSection locale={locale} />
        <CalendarDays calendarDays={days} currentDate={currentDate} />
      </div>
    </div>
  );
};

export default Calendar;
