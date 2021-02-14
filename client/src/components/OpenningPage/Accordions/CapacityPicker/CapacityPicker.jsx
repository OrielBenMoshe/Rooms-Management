import React from 'react';
import './CapacityPicker.css';
import {Select} from '@material-ui/core';

function CapacityPicker(props) {
  const capacitiesArray = props.capacities;

  const handleCapacityChange = (e) => {
    props.selectedCapacity(e.target.value)
  }
  
  const capacitiesList = capacitiesArray.map((capacity) => (
    <option key={capacity} value={capacity}>
      {capacity} משתתפים
    </option>
  ))

  return (
    <div className="capacity_select_warrper">
      <Select
        className="capacity_select"
        multiple
        native
        value={props.capacities[0]}
        onChange={handleCapacityChange}
        style={{ width:"100%", padding: "0" }}
      >
        {capacitiesList}
      </Select>
    </div>
  );

}
    
export default CapacityPicker;
