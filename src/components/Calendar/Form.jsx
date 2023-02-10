import React, { useState } from "react";

export default ({ times, days, addEvent }) => {
  const handleEventSubmission = () => {
   
    const event = {day: currentDay, time: currentTime, eventName:eventName}
  //  addEvent() event needs to spread into the right slot
   
  };


  const [eventName, setEventName] = useState("")
  const [currentDay, setDay] = useState(days[0])
  const [currentTime, setTime] = useState(times[0].hour)

  return (
    <form>
      <div>
      <h3>Add Event </h3>
      </div>
    
      <section>
      <label htmlFor="name">
        Name
        <input value={eventName} onChange={e => setEventName(e.target.value)} type="text" />
      </label>
      </section>
      <section>
      <label>
        Day
        <select value={currentDay} onChange={e => setDay(e.target.value)} name="day">
          {days.map((day, idx) => (
            <option key={idx} value={day}>
              {day}
            </option>
          ))}
        </select>
      </label>
      </section>
      <section>
      <label htmlFor="time">
        Time
        <select value={currentTime} onChange={e => setTime(e.target.value)} name="time">
          {times.map((time, idx) => (
            <option key={idx} value={time.hour}>
              {time.hour}
            </option>
          ))}
        </select>
      </label>
      </section>
      <section>
        <p>
          <button onClick={handleEventSubmission}>Add</button>
        </p>
      </section>
    </form>
  );
};
