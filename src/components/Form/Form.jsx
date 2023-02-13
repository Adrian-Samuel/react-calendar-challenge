import React, { useState } from "react";
import './index.css'

export default ({ daysOfWeek, bookableHours, addCalendarEvent }) => {
  const handleEventSubmission = (e) => {
    e.preventDefault();

    addCalendarEvent(selectedDay, selectedTime, {
      duration: 1,
      name: eventName,
    });
  };
  const [eventName, setEventName] = useState("");
  const [selectedDay, setSelectedDay] = useState(daysOfWeek[0]);
  const [selectedTime, setSelectedTime] = useState(bookableHours[0]);

  return (
    <div className="form_container">
    <form>
      <div>
        <h3>Add Event </h3>
      </div>

      <section>
         <label htmlFor="name">Name</label>
        
          <input
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            type="text"
          />
        
      </section>
      <section>
        <label> Day </label>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            name="day"
          >
            {daysOfWeek.map((day, idx) => (
              <option key={idx} value={day}>
                {day}
              </option>
            ))}
          </select>
       
      </section>
      <section>
        <label htmlFor="time"> Time </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            name="time"
          >
            {bookableHours.map((hour, idx) => (
              <option key={idx} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        
      </section>
      <section>
        <p>
          <button
            className="form_button"
          onClick={handleEventSubmission}>Add</button>
        </p>
      </section>
    </form>
    </div>
  );
};
