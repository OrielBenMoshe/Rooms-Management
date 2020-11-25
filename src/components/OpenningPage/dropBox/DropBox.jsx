import React from 'react';
import {TextField} from '@material-ui/core';

function DropBox(props) {
   function sendValue(e){
    let lable=props.lable;
    props.updateTime(e.target.value, lable)}
   
    return (
      <div className="DropBox">
         <TextField
        onChange={sendValue}
        id="time"
        label= {props.lable}
        type="time"
        defaultValue={props.theTime}
        className="textField"
        style={{width:"200px"}}
      />
      </div>
    );
  }
  
  export default DropBox;