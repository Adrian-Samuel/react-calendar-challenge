const SHIFT_LENGTH = 8;
const startHour = new Date(new Date().setHours(9, 0, 0, 0)).getHours();

export const hoursInDay = [
  startHour,
  ...Array.from({ length: SHIFT_LENGTH }, (calendarTime, index) => {
    const hourDiff = index + 1;
    return new Date(
      new Date().setHours(startHour + hourDiff, 0, 0, 0)
    ).getHours();
  }),
];

export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
