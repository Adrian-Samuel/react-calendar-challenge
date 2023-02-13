import React from "react";

export default ({ hour, day }) => {
  return (
    <td>
      <div className="event_row_container">

      
      {day[hour].map((event, idx) => (
        <div className="event">
           <p key={event.name + idx}  className="event_row">
            <span className="event_text"> {event.name} </span>
           </p>
          </div>
       
      ))}
      </div>
    </td>
  );
};
