import React, {useState} from "react";
import TableHeaders from "./Header";
import TableRow from "./Row";

export default () => {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const SHIFT_LENGTH = 8;
    const startHour = new Date(new Date().setHours(9, 0, 0, 0)).getHours();
  
    const times = [
      startHour,
      ...Array.from({ length: SHIFT_LENGTH }, (calendarTime, index) => {
        const hourDiff = index + 1;
        return new Date(
          new Date().setHours(startHour + hourDiff, 0, 0, 0)
        ).getHours();
      }),
    ].map((hour) => ({
      hour: hour,
      eventTimes: [],
    }));

    const [calendar, setCalendar] = useState(times);

  return (
    <table>
      <TableHeaders daysOfWeek={daysOfWeek} />
      <TableRow times={calendar} />
    </table>
  );
};
