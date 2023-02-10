import React from "react";
import { daysOfWeek } from "../../utils/constants";

export default () => {
  return (
    <thead>
      <tr>
        {[].concat(
          daysOfWeek.map((day, idx) => {
            <th>{idx === 0? day: null}</th>;
          })
        )}
      </tr>
    </thead>
  );
};
