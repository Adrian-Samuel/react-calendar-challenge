import React, { Fragment } from "react";
import Events from "./RowEvent";
import './index.css';
export default ({ calendarHours, calendarEventsByDay }) => 
    <tbody>
      {["BLANK_ROW"].concat(calendarHours).map((hour, index) =>
        index > 0 ?  (
          <Fragment key={hour + index}>
            <tr key={index}>
              <td key={index + hour}>
                <span className="row__hour"> {hour}</span>
                </td>
              {calendarEventsByDay.map((day, idx) => (
                <Events key={day[hour] + idx} day={day} hour={hour} />
              ))}
            </tr>
          </Fragment>
        ): null 
      )}
    </tbody>
