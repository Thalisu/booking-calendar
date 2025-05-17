import { useMemo } from "react";

interface UseHourPickerProps {
  selectedDate: Date | null;
  minHour?: number;
  maxHour?: number;
  interval?: number;
}

interface HourOption {
  label: string;
  value: Date;
}

export const useHourPicker = ({
  selectedDate,
  minHour = 8,
  maxHour = 18,
  interval = 30,
}: UseHourPickerProps) => {
  // Obtém o fuso horário local atual do usuário
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const availableHours = useMemo(() => {
    if (!selectedDate) return [];

    const hours: HourOption[] = [];
    const date = new Date(selectedDate);

    // Ajusta a data para começar do horário mínimo
    date.setHours(minHour, 0, 0, 0);

    // Horário atual para comparação (para não mostrar horários passados)
    const currentTime = new Date();
    const isToday = selectedDate.toDateString() === currentTime.toDateString();

    // Cria slots de horário baseados no intervalo definido
    while (date.getHours() < maxHour) {
      // Pula horários passados se for hoje
      if (isToday && date <= currentTime) {
        date.setMinutes(date.getMinutes() + interval);
        continue;
      }

      const timeValue = new Date(date);

      // Formata o horário para exibição, usando o fuso horário local do usuário
      const formattedHour = timeValue.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      hours.push({
        label: formattedHour,
        value: timeValue,
      });

      date.setMinutes(date.getMinutes() + interval);
    }

    return hours;
  }, [selectedDate, minHour, maxHour, interval]);

  /**
   * Converte uma data para outro fuso horário
   * @param date Data a ser convertida
   * @param targetTimeZone Fuso horário de destino
   * @returns Data formatada no fuso horário de destino
   */
  const convertToTimeZone = (date: Date, targetTimeZone: string) => {
    return new Date(date.toLocaleString("en-US", { timeZone: targetTimeZone }));
  };

  /**
   * Formata uma data para exibição no fuso horário especificado
   * @param date Data a ser formatada
   * @param timeZone Fuso horário para formatação
   * @returns String formatada com hora e minuto no fuso horário especificado
   */
  const formatInTimeZone = (date: Date, timeZone: string) => {
    return date.toLocaleTimeString("pt-BR", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return {
    availableHours,
    userTimeZone,
    convertToTimeZone,
    formatInTimeZone,
  };
};
