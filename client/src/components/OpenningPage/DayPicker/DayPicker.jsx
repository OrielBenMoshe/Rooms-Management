import React, { useState } from "react";
import { TextField, Container } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,
} from "@material-ui/pickers";

import { makeStyles } from '@material-ui/core/styles';

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { he } from "date-fns/locale";
import './DayPicker.css';



const useStyles = makeStyles(() => ({

}));

const DayPicker = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    props.selectedDate(newDate);
  };
  return (
    <>
    
      <Container>
        <MuiPickersUtilsProvider locale={he} utils={DateFnsUtils}>
  
          <DatePicker
            variant='static'
            value={selectedDate}
            onChange={handleDateChange}
            orientation='landscape'
          />
        </MuiPickersUtilsProvider>
      </Container>
    </>
  );
};

export default DayPicker;
