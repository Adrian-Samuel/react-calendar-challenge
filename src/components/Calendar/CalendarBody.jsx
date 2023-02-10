import React, { useState } from "react";
import TableHeaders from "./Header";
import TableRow from "./Row";

export default ({ daysOfWeek, calendar }) => {
  return (
    <table>
      <TableHeaders daysOfWeek={daysOfWeek} />
      <TableRow times={calendar} />
    </table>
  );
};
