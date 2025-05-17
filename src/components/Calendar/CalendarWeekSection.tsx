import { useDaysOfTheWeek } from "../../hooks/useDaysOfTheWeek";

const CalendarWeekSection = ({ locale }: { locale: string }) => {
  const daysOfWeek = useDaysOfTheWeek(locale);

  return (
    <>
      {daysOfWeek.map((day, i) => (
        <div key={i} className="flex-1 text-center">
          {day}
        </div>
      ))}
    </>
  );
};

export default CalendarWeekSection;
