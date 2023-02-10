import React from "react";

export default () => {
  const SHIFT_LENGTH = 8;
  const startHour = new Date(new Date().setHours(9, 0, 0, 0)).getHours();

  const hoursInDay = [
    startHour,
    ...Array.from({ length: SHIFT_LENGTH }, (calendarTime, index) => {
      const hourDiff = index + 1;
      return new Date(
        new Date().setHours(startHour + hourDiff, 0, 0, 0)
      ).getHours();
    }),
  ];

  return (
    <tbody>
      {[0].concat(hoursInDay).map((hour, index) =>
        index === 0 ? (
          <tr>
            <td></td>
          </tr>
        ) : (
          <tr>
            <td>{hour}</td>
          </tr>
        )
      )}
    </tbody>
  );
};
