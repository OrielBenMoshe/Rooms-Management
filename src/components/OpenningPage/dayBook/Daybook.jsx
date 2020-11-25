import React, { useState } from "react";
import { TextField, Container } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { he } from "date-fns/locale";


const Daybook = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
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

export default Daybook;
