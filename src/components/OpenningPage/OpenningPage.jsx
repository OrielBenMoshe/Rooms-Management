import Context from './../../Context';
import React, { useState} from "react";
import {Container} from '@material-ui/core'

import Header from './../header/Header';

import DayPicker from './DayPicker/DayPicker';
import TimePicker from './TimePicker/TimePicker';
import AlertDialog from './AlertDialog/AlertDialog';
import CapacityPicker from './CapacityPicker/CapacityPicker';


import {
  Typography,
  Button }     from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'



function OpenningPage() {

  const useStyles = makeStyles(theme => ({
    root: {
    margin: 'auto',
    width: 345,
    textAlign: 'right',
    },
    notification: {
      padding: '10px 20px'
    },
    media: {
    height: 140,
    },
    title: {
    color: theme.palette.primary.main,
    }
    }));
  const classes = useStyles();

  const [reservation,setReservation] = useState({
    theDay: new Date().getDate(),
    theMonth: new Date().getMonth() +1,
    startAt: "07:30",
    endAt: "16:30",
    capacity: 2,
  });
  

// Set the new Date that changed, to State.
  const handleDateChange = (newDate) => {
    
    const reservationTemp = reservation;
    reservationTemp.theDay = newDate.getDate();
    reservationTemp.theMonth = newDate.getMonth() +1;
    setReservation(reservationTemp);

    console.log("The date has changed!" ,reservation);

  };
  
// Set the new Time that changed, to State.
  const handleTimeChange = (value, lable) => {

    const reservationTemp = reservation;

    lable === "משעה" ? 
      reservationTemp.startAt = value : 
      reservationTemp.endAt = value;
    setReservation(reservationTemp);

    console.log("The time has changed!" ,reservation);

  } 
 
  function handleCapacityChange(value) {

    const reservationTemp = reservation;
    
    reservationTemp.capacity = value;
    setReservation(reservationTemp);

    console.log("The capacity has changed!" ,reservation);

  }

  
  
  return (
    <Container maxWidth="sm">
      <div className={`OpenningPage ${classes.root}`}>
          <Header/>
          <div className={classes.notification}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>שלום,</Typography>
            <Typography variant="body2" color="textSecondary" component="p">ברוכים הבאים למערכת זימון חדרים של בנימין טק למתי לשריין לך את החדר?</Typography>
          </div>
          <form>
            <DayPicker selectedDate={handleDateChange}/>
            <TimePicker selectedTime={handleTimeChange} lable="משעה" theTime={reservation.startAt}/>
            <TimePicker selectedTime={handleTimeChange} lable="עד שעה" theTime={reservation.endAt}/>
            <CapacityPicker selectedCapacity={handleCapacityChange} capacitiesArray="2"/>
            <AlertDialog 
              buttonText="מתאים לי בדיוק"
              buttonType="submit"
              reservation={reservation}
            />
            {/* <TransitionsModal buttonText="מתאים לי בדיוק"/> */}
          </form>
      </div>
    </Container>  
  );
}

export default OpenningPage;

