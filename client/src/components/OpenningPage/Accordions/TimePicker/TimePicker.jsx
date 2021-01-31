import React from 'react';
import './TimePicker.css';
import moment from 'moment';

function TimePick(props) {
  const now = new moment();

  const handleTimeChange = (e) => {
    props.selectedTime(e.target.value, props.lable);
  };
  
  

  return (
    <div className="times-list">
      {'08:00'}
    </div>
  );

};
  
export default TimePick;