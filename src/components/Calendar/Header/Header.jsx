import React from "react";
import './index.css'
export default ({ daysOfWeek }) => {
  return (
    <thead>
      <tr>
        {["BLANK_HEADER"].concat(daysOfWeek).map((day, idx) => (
          <th key={idx}>{idx > 0 ? day : null}</th>
        ))}
      </tr>
    </thead>
  );
};
