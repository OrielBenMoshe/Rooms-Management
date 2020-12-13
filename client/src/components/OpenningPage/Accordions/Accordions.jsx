import React, { useState } from "react";
import "./Accordions.css";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import TimePicker from "./../TimePicker/TimePicker";
import CapacityPicker from "./../CapacityPicker/CapacityPicker";

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
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


// Defined the reservation.
  const [selectedStartAt, setSelectedStartAt] = useState(props.reservation.startAt)
  const [selectedEndAt, setSelectedEndAt] = useState(props.reservation.endAt)
  const [selectedCapacity, setSelectedCapacity] = useState(props.reservation.capacity)

  const handleTimeChange = (value, lable) => {
    lable === "משעה" ?
      setSelectedStartAt(value) :
      setSelectedEndAt(value);
    props.selectedTime(value, lable);
  }

  const handleCapacityChange = (value) => {
    setSelectedCapacity(value)
    props.selectedCapacity(value);
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
          <TimePicker
            selectedTime={handleTimeChange}
            lable="משעה"
            theTime={props.reservation.startAt}
          />
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
          <TimePicker
            selectedTime={handleTimeChange}
            lable="עד שעה"
            theTime={props.reservation.endAt}
          />
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
            <b>משתתפים {selectedCapacity} עבור</b>
          </Typography>
          <img src="/images/edit_icon.svg" alt="" />
        </AccordionSummary>

        <AccordionDetails>
          <CapacityPicker
            selectedCapacity={handleCapacityChange}
            capacities={[4, 7, 14]}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
