import React from 'react';
import './TimePicker.css';
import {TextField} from '@material-ui/core';

function TimePick(props) {

  const handleTimeChange = (e) => {
    props.selectedTime(e.target.value, props.lable);
  };
   
  return (
    <div className="DropBox">
      <TextField
        onChange={handleTimeChange}
        id="time"
        type="time"
        defaultValue={props.theTime}
        className="textField"
        style={{ width: "100%", padding: "0 20px" }}
      />
    </div>
  );

};
  
export default TimePick;