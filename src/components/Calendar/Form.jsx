import React from "react";

export default (times, days, addEvent) => {

    const handleEventSubmission = (e) => {
            e.preventDefault()
            // addEvent() TODO: add event logic later
    }

  return (
    <form>
      <h3>Add Event </h3>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Day
        <select name="day">
          {days.map((day, idx) => (
            <option key={idx} value={day}>
              {day}
            </option>
          ))}
        </select>
      </label>
      <label for="time">
        Time
        <select name="time">
          {times.map((time, idx) => (
            <option key={idx} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <section>
        <p>
            <button
                onClick={handleEventSubmission}
            ></button>
        </p>
      </section>

    </form>
  );
};
