import { useContext } from "react";
import appointmentDataContext from "../context/appointmentData.context";

export const useAppointmentData = () => {
  const data = useContext(appointmentDataContext);

  return data;
};
