import React from 'react';
import {Select, MenuItem} from '@material-ui/core';

function CapacityPicker(props) {

  const handleCapacityChange = (e) => {
    props.selectedCapacity(e.target.value)
  }
    
  return (
    <div className="DropBox">
        <Select
      labelId="בחר את סוג החדר"
      id="selectRoom"
      value={props.capacitiesArray}
      onChange={handleCapacityChange}
      className="select"
      style={{ width:"100%", padding: "0 20px" }}
    >
      <MenuItem value={2}>עד שני משתתפים</MenuItem>
      <MenuItem value={6}>עד 6 משתתפים</MenuItem>
      <MenuItem value={14}>עד 14 משתתפים</MenuItem>
      <MenuItem value={25}>עד 25 משתתפים</MenuItem>
    </Select>
    </div>
  );

}
    
export default CapacityPicker;