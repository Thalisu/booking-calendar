import { useContext } from "react";
import appointmentContext from "../context/appointment.context";

export const useAppointment = () => {
  const context = useContext(appointmentContext);

  return context;
};
