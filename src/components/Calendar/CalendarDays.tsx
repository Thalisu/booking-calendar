import { useContext } from "react";
import type { ICalendarDay } from "../../types";
import appointmentContext from "../../context/appointment.context";

interface IProps {
  currentDate: Date;
  calendarDays: ICalendarDay[];
}

const CalendarDays = ({ calendarDays, currentDate }: IProps) => {
  const { setStartDate } = useContext(appointmentContext);
  return (
    <>
      {calendarDays.map((calendarDay, index) =>
        calendarDay.day ? (
          <button
            key={index}
            disabled={calendarDay.disabled}
            className="w-full max-w-8 aspect-square  flex items-center justify-center text-sm hover:bg-gray-100 rounded-full"
            onClick={() => {
              const startDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                calendarDay.day!
              );
              setStartDate(startDate);
            }}
          >
            {calendarDay.day}
          </button>
        ) : (
          <div className="w-full max-w-8 aspect-square"></div>
        )
      )}
    </>
  );
};

export default CalendarDays;
