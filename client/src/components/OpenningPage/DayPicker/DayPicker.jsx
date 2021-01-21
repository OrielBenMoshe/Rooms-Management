import React, { useState } from "react";
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from "@material-ui/pickers";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { he } from "date-fns/locale";
import "./DayPicker.css";
import { useEffect } from "react";

const DayPicker = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [forToday, setforToday] = useState("להיום");
  const fmtOPT = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const toReadableDate = (date) => {
    return date.toLocaleDateString(undefined, fmtOPT);
  };

  // Check if the selected date is today, tommorow or next week.
  const isToday = (selectedDate) => {

    selectedDate = toReadableDate(selectedDate);
    const today = toReadableDate(new Date());
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow = toReadableDate(tomorrow);
    let nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    nextWeek = toReadableDate(nextWeek);
  
    switch (selectedDate) {
      case today:
        setforToday("להיום");
        break;

      case tomorrow:
        setforToday("למחר");
        break;

      case nextWeek:
        setforToday("לשבוע הבא");
        break;

      default:
        setforToday("לתאריך");
        break;
    }
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    isToday(newDate);
    props.selectedDate(newDate);
  };

  return (
    <MuiPickersUtilsProvider locale={he} utils={DateFnsUtils}>
      <div className="date_label">
        <div className="is_today">{forToday}</div>
        <div className="the_date">
          {selectedDate.toLocaleDateString(undefined, fmtOPT)}
        </div>
      </div>
      <DatePicker
        variant="static"
        value={selectedDate}
        onChange={handleDateChange}
        orientation="landscape"
        disablePast={true}
        disableToolbar={true}
        shouldDisableDate={(day) => day.getDay() === 6}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DayPicker;
