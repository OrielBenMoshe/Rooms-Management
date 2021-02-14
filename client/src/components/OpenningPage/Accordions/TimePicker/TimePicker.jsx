import React from 'react';
import moment from 'moment';
import {Select} from '@material-ui/core';

function TimePicker(props) {
  const now = new moment();
  const timesArray = props.timesArray;

  const handleTimeChange = (e) => {
    props.selectedTime(e.target.value, props.label);
  };
  
  const timesList = timesArray.map((time) => (
    <option key={time} value={time}>
      {time}
    </option>
  ));
  
    

  return (
    <div className="time_select_warrper">
       <Select
        className="time_select"
        multiple={true}
        native
        value={now}
        onChange={handleTimeChange}
        style={{ width:"100%", padding: "0" }}
      >
      {timesList}
      </Select>
    </div>
  );

};
  
export default TimePicker;