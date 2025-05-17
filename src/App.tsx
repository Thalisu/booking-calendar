import type { JSX } from "react";
import Scheduler from "./components/Scheduler";
import AppointmentProvider from "./providers/Appointment.provider";

interface IProps {
  locale?: string;
  duration?: number;
  minHour?: number;
  maxHour?: number;
  interval?: number;
  onSchedule?: (startDate: Date, endDate: Date) => void;
}

/**
 * @param {string} props.locale - O locale para formatar datas
 * @param {number} props.duration - Duração do agendamento em horas
 * @param {number} props.minHour - Hora mínima disponível para agendamento
 * @param {number} props.maxHour - Hora máxima disponível para agendamento
 * @param {number} props.interval - Intervalo entre horários disponíveis em minutos
 * @param {function} props.onSchedule - Função a ser chamada quando um agendamento é confirmado
 * @returns {JSX.Element}
 */

function App({
  locale = "pt-BR",
  duration = 1,
  minHour = 8,
  maxHour = 18,
  interval = 30,
  onSchedule = () => {},
}: IProps): JSX.Element {
  return (
    <div className="max-w-md w-full mx-auto p-4">
      <AppointmentProvider duration={duration}>
        <Scheduler
          locale={locale}
          minHour={minHour}
          maxHour={maxHour}
          interval={interval}
          onSchedule={onSchedule}
        />
      </AppointmentProvider>
    </div>
  );
}

export default App;
