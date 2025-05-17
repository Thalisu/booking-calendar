import { useContext, useState } from "react";
import Calendar from "../Calendar";
import HourPicker from "../HourPicker";
import appointmentContext from "../../context/appointment.context";

interface SchedulerProps {
  locale?: string;
  minHour?: number;
  maxHour?: number;
  interval?: number;
  onSchedule?: (startDate: Date, endDate: Date) => void;
}

type Step = "calendar" | "hourPicker";

const Scheduler: React.FC<SchedulerProps> = ({
  locale = "pt-BR",
  minHour = 8,
  maxHour = 18,
  interval = 30,
  onSchedule,
}) => {
  const { startDate, endDate, isReady } = useContext(appointmentContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("calendar");

  const handleSchedule = () => {
    if (!startDate || !endDate || !onSchedule) return;

    setIsSubmitting(true);

    // Simulando uma chamada de API
    setTimeout(() => {
      onSchedule(startDate, endDate);
      setIsSubmitting(false);
      // Após o agendamento, volta para o calendário
      setCurrentStep("calendar");
    }, 1000);
  };

  const handleDateSelect = () => {
    if (startDate) {
      setCurrentStep("hourPicker");
    }
  };

  const handleBackToCalendar = () => {
    setCurrentStep("calendar");
  };

  return (
    <div className="flex flex-col bg-white rounded-lg p-4 shadow-sm">
      {currentStep === "calendar" ? (
        <div className="calendar-step">
          <h3 className="text-lg font-medium mb-3">Selecione uma data</h3>
          <Calendar
            locale={locale}
            onClick={() => setTimeout(handleDateSelect, 100)}
          />
          {startDate && (
            <div className="mt-4">
              <button
                onClick={handleDateSelect}
                className="w-full py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Continuar para selecionar horário
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="hour-picker-step">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-medium">Selecione um horário</h3>
            <button
              onClick={handleBackToCalendar}
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Voltar
            </button>
          </div>

          <div className="mb-4">
            <p className="text-gray-700">
              <strong>Data selecionada:</strong>{" "}
              {startDate?.toLocaleDateString(locale)}
            </p>
          </div>

          <HourPicker
            minHour={minHour}
            maxHour={maxHour}
            interval={interval}
            disabled={isSubmitting}
          />

          {isReady && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">
                Resumo do agendamento
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>Data:</strong> {startDate?.toLocaleDateString(locale)}
                </p>
                <p className="mb-2">
                  <strong>Horário de início:</strong>{" "}
                  {startDate?.toLocaleTimeString(locale, {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </p>
                <p className="mb-4">
                  <strong>Horário de término:</strong>{" "}
                  {endDate?.toLocaleTimeString(locale, {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Fuso horário:{" "}
                  {Intl.DateTimeFormat().resolvedOptions().timeZone}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleBackToCalendar}
                    className="py-2 px-4 rounded-md text-blue-600 border border-blue-600 hover:bg-blue-50"
                    disabled={isSubmitting}
                  >
                    Alterar data
                  </button>
                  <button
                    onClick={handleSchedule}
                    disabled={isSubmitting}
                    className={`py-2 px-4 rounded-md text-white ${
                      isSubmitting
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {isSubmitting ? "Agendando..." : "Confirmar"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Scheduler;
