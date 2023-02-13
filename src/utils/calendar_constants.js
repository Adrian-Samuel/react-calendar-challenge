export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
export const SHIFT_LENGTH = 8;
export const startHour = new Date(new Date().setHours(9, 0, 0, 0)).getHours();

export const formatDateTime = (hour) => `${hour}:00`;

export const calendarState = (
  startHour,
  shiftLength,
  timeInterval,
  weekDays,
  timeFormatter
) => {
  const times = [
    startHour,
    ...Array.from({ length: shiftLength }, (calendarTime, index) => {
      const hourDiff = index + timeInterval;
      return new Date(
        new Date().setHours(startHour + hourDiff, 0, 0, 0)
      ).getHours();
    }),
  ].map((hour) => ({
    hour: timeFormatter(hour),
    eventTimes: [],
  }));

  const dayMap = weekDays.reduce((dayMap, day) => {
    dayMap[day] = {};
    return dayMap;
  }, {});

  return Object.entries(dayMap).reduce((days, [key]) => {
    times.forEach((time) =>
      days.hasOwnProperty(key) > 0
        ? (days[key] = { ...days[key], [time.hour]: time.eventTimes })
        : (days[key] = { [time.hour]: time.eventTimes })
    );
    return days;
  }, dayMap);
};
