import React from 'react';
import './TimePicker.css';
import moment from 'moment';

function TimePick(props) {
  const now = new moment();
  const timesArray = props.timesArray;

  const handleTimeChange = (e) => {
    props.selectedTime(e.target.value, props.lable);
  };
  
  const timesList = timesArray.map((time) => (
      <div>{time}</div>
  ));
  
    

  return (
    <div className="times-list">
      {timesList}
    </div>
  );

};
  
export default TimePick;