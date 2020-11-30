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


const useStyles = makeStyles(() => ({

}));

const Daybook = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      

      <Container>
        <MuiPickersUtilsProvider locale={he} utils={DateFnsUtils}>
          <b>להיום</b>
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

export default Daybook;
