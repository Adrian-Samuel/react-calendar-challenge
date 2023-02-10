import React from "react";
import { GAP, hoursInDay, daysOfWeek } from "../../utils/constants";

export default () => {
  return (
    <tbody>
      {[].concat(
        hoursInDay.map((hour, index) => {
          {
            index === 0 ? (
              <tr>
                <td>{hour}</td>
              </tr>
            ) : (
              <tr>
                <td></td>
              </tr>
            );
          }
        })
      )}
    </tbody>
  );
};
