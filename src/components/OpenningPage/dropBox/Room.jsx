import React from 'react';
import {Select, MenuItem} from '@material-ui/core';

function Room(props) {

     function sendValue(e){
      props.selectRoom(e.target.value)}
     
      return (
        <div className="DropBox">
           <Select
          labelId="בחר את סוג החדר"
          id="selectRoom"
          value={props.room}
          onChange={sendValue}
          className="select"
          style={{width:"200px"}}
        >
          <MenuItem value={2}>שני משתתפים</MenuItem>
          <MenuItem value={6}>עד 6 משתתפים</MenuItem>
          <MenuItem value={14}>עד 14 משתתפים</MenuItem>
          <MenuItem value={25}>עד 25 משתתפים</MenuItem>
        </Select>
        </div>
      );
    }
    
    export default Room;