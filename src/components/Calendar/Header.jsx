import React from "react";
import { daysOfWeek, GAP } from "../../utils/constants";

export default() => {
  return (
    <thead>
      <tr>
        {[GAP].concat(daysOfWeek.map((day) => {
          <th>{day}</th>;
        }))}
      </tr>
    </thead>
  );
};
