import type { HTMLAttributes, JSX } from "react";
import Scheduler from "./components/Scheduler";
import AppointmentProvider from "./providers/Appointment.provider";
import AppointmentDataProvider from "./providers/AppointmentData.provider";
import type { IAppointmentDataContext } from "./types";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  appointmentData: IAppointmentDataContext;
}

/**
 * @param {object} props.label - Label to use in the scheduler, both calendar and hour picker
 * @param {string} props.locale - Locale to format dates
 * @param {number} props.duration - Duration of the appointment in hours
 * @param {number} props.minHour - Minimum hour available for appointment
 * @param {number} props.maxHour - Maximum hour available for appointment
 * @param {function} props.onSchedule - Function to be called when an appointment is confirmed
 * @returns {JSX.Element}
 */

function App(props: IProps): JSX.Element {
  const { appointmentData, ...rest } = props;

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-lg" {...rest}>
      <AppointmentDataProvider {...appointmentData}>
        <AppointmentProvider>
          <Scheduler />
        </AppointmentProvider>
      </AppointmentDataProvider>
    </div>
  );
}

export default App;
