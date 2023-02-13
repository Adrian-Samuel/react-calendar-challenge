import React, { useState } from "react";
import CalendarBody from "./components/Calendar/Calendar";
import CalendarForm from "./components/Form/Form";
import "./App.css";
import {
  daysOfWeek,
  SHIFT_LENGTH,
  startHour,
  formatDateTime,
  calendarState,
} from "./utils/constants";
function App() {
  const initialState = calendarState(
    startHour,
    SHIFT_LENGTH,
    1,
    daysOfWeek,
    formatDateTime
  );

  const [calendar, setCalendar] = useState(initialState);

  const calendarHours = Object.keys(Object.values(calendar)[0]);
  const calendarEventsByDay = Object.values(calendar);

  const addCalendarEvent = (day, hour, event) => {
    setCalendar((calendarEvents) => {
      return {
        ...calendarEvents,
        [day]: {
          ...calendarEvents[day],
          [hour]: [...calendarEvents[day][hour], event],
        },
      };
    });
  };

  return (
    <div className="App">
      <CalendarBody
        daysOfWeek={daysOfWeek}
        calendarEvents={calendarEventsByDay}
        calendarHours={calendarHours}
        calendarDays={daysOfWeek}
      />
      <CalendarForm
        daysOfWeek={daysOfWeek}
        bookableHours={calendarHours}
        addCalendarEvent={addCalendarEvent}
      />
    </div>
  );
}

export default App;
