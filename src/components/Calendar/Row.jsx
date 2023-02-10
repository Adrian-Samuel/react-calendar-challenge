import React from "react";

export default ({times}) => {
 


  return (
    <tbody>
      {[0].concat(times).map((time, index) =>
        index === 0 ? (
          <tr key={time.hour}>
            <td key={index + time.hour}></td>
          </tr>
        ) : (
          <tr key={time.hour}>
            <td key={index + time.hour}>{time.hour}</td>
            
            {/* {time.eventTimes.map((event) => (
              <tr> {event} </tr>
            ))} */}
          </tr>
        )
      )}
    </tbody>
  );
};
