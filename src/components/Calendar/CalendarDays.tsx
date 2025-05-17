import { useContext } from "react";
import type { ICalendarDay } from "../../types";
import appointmentContext from "../../context/appointment.context";
import CalendarDayPicker from "./CalendarDayPicker";

interface IProps {
  currentDate: Date;
  calendarDays: ICalendarDay[];
}

const CalendarDays = ({ calendarDays, currentDate }: IProps) => {
  const { setStartDate, startDate } = useContext(appointmentContext);

  return (
    <>
      {calendarDays.map((calendarDay, index) =>
        calendarDay.day ? (
          <CalendarDayPicker
            key={index}
            disabled={calendarDay.disabled}
            isSelected={startDate?.getDate() === calendarDay.day}
            day={calendarDay.day}
            onClick={() => {
              const startDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                calendarDay.day!
              );
              setStartDate(startDate);
            }}
          />
        ) : (
          <div className="w-full max-w-8 aspect-square"></div>
        )
      )}
    </>
  );
};

export default CalendarDays;
