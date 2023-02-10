import React from "react";

export default () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <thead>
      <tr>
        {["BLANK"].concat(daysOfWeek).map((day, idx) => (
          <th key={idx}>{idx > 0 ? day : null}</th>
        ))}
      </tr>
    </thead>
  );
};
