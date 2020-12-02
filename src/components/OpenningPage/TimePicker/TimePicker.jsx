import React from 'react';
import {TextField} from '@material-ui/core';

function TimePicker(props) {

  const handleTimeChange = (e) => {
    props.selectedTime(e.target.value, props.lable);
  };
   
  return (
    <div className="DropBox">
      <TextField
        onChange={handleTimeChange}
        id="time"
        label={props.lable}
        type="time"
        defaultValue={props.theTime}
        className="textField"
        style={{ width: "100%", padding: "0 20px" }}
      />
    </div>
  );

};
  
export default TimePicker;