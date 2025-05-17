import { useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface IProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  isToday: boolean;
  locale: string;
}

const CalendarHeader = (props: IProps) => {
  const { currentDate, onPrevMonth, onNextMonth, isToday, locale } = props;

  const month = useMemo(
    () => currentDate.toLocaleString(locale, { month: "long" }),
    [currentDate, locale]
  );

  const year = useMemo(
    () => currentDate.getFullYear().toString(),
    [currentDate]
  );

  const monthName = useMemo(
    () => month.charAt(0).toUpperCase() + month.slice(1),
    [month]
  );

  return (
    <div className="flex justify-between items-center">
      <p className="text-base font-semibold">{`${monthName} ${year}`}</p>
      <div className="flex gap-2">
        <button
          className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed!"
          aria-disabled={isToday}
          disabled={isToday}
          aria-label="Previous month"
          title="Go to previous month"
          onClick={onPrevMonth}
        >
          <FaChevronLeft className="w-3 h-3" aria-hidden="true" />
        </button>
        <button
          className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
          aria-label="Go to next month"
          title="Go to next month"
          onClick={onNextMonth}
        >
          <FaChevronRight className="w-3 h-3" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
