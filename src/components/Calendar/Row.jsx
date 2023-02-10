import React, { useState } from "react";

export default () => {
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

  const [calendar, setCalendar] = useState(times) 
  
  return (
    
    <tbody>
      {[0].concat(calendar).map((time, index) =>
        index === 0 ? (
          <tr key={time.hour}>
            <td key={index + time.hour}></td>
          </tr>
        ) : (
          <tr key={time.hour}>
            <td key={index + time.hour}>{time.hour}</td>
            {time.events.map((event) => (
              <tr> {event} </tr>
            ))}
          </tr>
        )
      )}
    </tbody>
  );
};
