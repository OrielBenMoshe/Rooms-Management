import React, { useState } from "react";
import "./Accordions.css";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import TimePick from "./TimePicker/TimePicker";
import { MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import CapacityPicker from "./CapacityPicker/CapacityPicker";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { he } from "date-fns/locale";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
  },
  "&$expanded": {
    minHeight: 56,
  },
  content: {
    "&$expanded": {
      margin: "0px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
  },
}))(MuiAccordionDetails);

export default function Accordions(props) {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Defined the reservation.
  const [selectedStartAt, setSelectedStartAt] = useState(
    props.reservation.startAt
  );
  const [selectedEndAt, setSelectedEndAt] = useState(props.reservation.endAt);
  const [selectedCapacity, setSelectedCapacity] = useState(
    props.reservation.capacity
  );

  const handleTimeChange = (value, lable) => {
    lable === "משעה" ? setSelectedStartAt(value) : setSelectedEndAt(value);
    props.selectedTime(value, lable);
  };

  const handleCapacityChange = (value) => {
    setSelectedCapacity(value);
    props.selectedCapacity(value);
    setTimeout(() => setExpanded(""), 400);
  };

  return (
    <div>
      {/* Time Picker start */}
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            <b>משעה</b>
            <div className="selected_time">{selectedStartAt}</div>
          </Typography>
          <img src="/images/edit_icon.svg" alt="" />
        </AccordionSummary>

        <AccordionDetails>
          <MuiPickersUtilsProvider locale={he} utils={DateFnsUtils}>
            <TimePicker
              label="משעה"
              autoOk
              variant="static"
              openTo="hours"
              value={props.reservation.startAt}
              onChange={handleTimeChange}
              ampm={false}
              disableToolbar={true}
              minutesStep={15}
              minTime={new Date() < new Date(0, 0, 0, 8) ? new Date(0, 0, 0, 8) : new Date()}
              maxTime={new Date(0, 0, 0, 18)}
            />
          </MuiPickersUtilsProvider>
          {/* <TimePick
            selectedTime={handleTimeChange}
            theTime={props.reservation.startAt}
          /> */}
        </AccordionDetails>
      </Accordion>

      {/* Time Picker end */}
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <b>עד שעה</b>
            <div className="selected_time">{selectedEndAt}</div>
          </Typography>
          <img src="/images/edit_icon.svg" alt="" />
        </AccordionSummary>

        <AccordionDetails>
          <MuiPickersUtilsProvider locale={he} utils={DateFnsUtils}>
            <TimePicker
              label="עד שעה"
              autoOk
              variant="static"
              openTo="hours"
              value={props.reservation.endAt}
              // onChange={handleTimeChange}
              ampm={false}
              disableToolbar={true}
              minutesStep={15}
            />
          </MuiPickersUtilsProvider>
          {/* <TimePick
            label="עד שעה"
            selectedTime={handleTimeChange}
            theTime={props.reservation.endAt}
          /> */}
        </AccordionDetails>
      </Accordion>

      {/* Capacity Picker */}
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            <b>עבור {selectedCapacity} משתתפים</b>
          </Typography>
          <img src="/images/edit_icon.svg" alt="" />
        </AccordionSummary>

        <AccordionDetails>
          <CapacityPicker
            selectedCapacity={handleCapacityChange}
            capacities={[2, 4, 7, 14, 18, 25, 40]}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
