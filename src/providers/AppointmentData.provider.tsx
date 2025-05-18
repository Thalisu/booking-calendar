import appointmentDataContext from "../context/appointmentData.context";
import type { IAppointmentDataContext } from "../types";

interface IProps extends Partial<IAppointmentDataContext> {
  children: React.ReactNode;
}

const AppointmentDataProvider = ({ children, ...rest }: IProps) => (
  <appointmentDataContext.Provider
    value={{
      calendarProps: rest.calendarProps ?? {},
      duration: rest.duration ?? 1,
      hourPickerProps: rest.hourPickerProps ?? {},
      label: rest.label ?? { calendar: "", hourPicker: "" },
      locale: rest.locale ?? "pt-BR",
      maxHour: rest.maxHour ?? 18,
      minHour: rest.minHour ?? 8,
      onSchedule: rest.onSchedule ?? (() => Promise.resolve()),
      interval: (rest.duration ?? 1) * 60,
    }}
  >
    {children}
  </appointmentDataContext.Provider>
);

export default AppointmentDataProvider;
