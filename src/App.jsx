import React, { useState } from "react";
import CalendarBody from "./components/Calendar/CalendarBody";
import CalendarForm from "./components/Calendar/Form";
import "./App.css";

function App() {
  // state should be declared at the parent level,
  // could use useContext with a reducer but there's little point

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const SHIFT_LENGTH = 8;
  const startHour = new Date(new Date().setHours(9, 0, 0, 0)).getHours();

  const formatDateTime = hour => `${hour}:00`

  const times = [
    startHour,
    ...Array.from({ length: SHIFT_LENGTH }, (calendarTime, index) => {
      const hourDiff = index + 1;
      return new Date(
        new Date().setHours(startHour + hourDiff, 0, 0, 0)
      ).getHours();
    }),
  ].map((hour) => ({
    hour: formatDateTime(hour),
    eventTimes: [],
  }));

  const [calendar, setCalendar] = useState(times);

  return (
    <div className="App">
      <CalendarBody daysOfWeek={daysOfWeek} calendar={calendar} />
      <CalendarForm days={daysOfWeek} times={times} addEvent={setCalendar} />
    </div>
  );
}

export default App;
