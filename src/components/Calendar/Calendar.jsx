import React, { useState } from "react";
import TableHeaders from "./Header/Header";
import TableRow from "./Row/Row";
import './index.css'
export default ({ daysOfWeek, calendarEvents, calendarHours }) => {
  return (
    <table>
      <TableHeaders daysOfWeek={daysOfWeek} />
      <TableRow
        calendarEventsByDay={calendarEvents}
        calendarHours={calendarHours}
      />
    </table>
  );
};
