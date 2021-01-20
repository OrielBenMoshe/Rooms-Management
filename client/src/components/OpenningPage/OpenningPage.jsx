import Context from './../../Context';
import React, { useState } from "react";
import {Container} from '@material-ui/core'
import "./OpenningPage.css";

import Header from './../header/Header';

import Accordions from './Accordions/Accordions';
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
    backgroundColor: 'white',
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
    },
    submitWrapper: {
      borderTop: '2px solid #DEDEDE',
      height: '65px',
    }
    }));
  const classes = useStyles();

  const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
     
    return i;
  };


  const theCurrentDate =  new Date();
  const startTime = `${ addZero(theCurrentDate.getHours())}:${ addZero(theCurrentDate.getMinutes())}`;
  const endTime = `${ addZero(theCurrentDate.getHours() !== 23 ? theCurrentDate.getHours() +1 : 0)}:${ addZero(theCurrentDate.getMinutes())}`;


  const [reservation,setReservation] = useState({
    theDay: addZero(theCurrentDate.getDate()),
    theMonth: addZero(theCurrentDate.getMonth() !== 12 ? theCurrentDate.getMonth() +1 : 1),
    startAt: startTime ,
    endAt: endTime,
    capacity: 2,
    user_id : '5fde115b712de221240ff0e6'
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
 
  const handleCapacityChange = (value) => {

    const reservationTemp = reservation;
    
    reservationTemp.capacity = value;
    setReservation(reservationTemp);

    console.log("The capacity has changed!" ,reservation);

  }

  
  
  return (
    // <Container maxWidth="sm">
      <div className={`OpenningPage ${classes.root}`}>
          <Header/>
          <div className={classes.notification}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>שלום,</Typography>
            <Typography variant="body2" color="textSecondary" component="p">ברוכים הבאים למערכת זימון חדרים של בנימין טק למתי לשריין לך את החדר?</Typography>
          </div>
          <form>
            <DayPicker selectedDate={handleDateChange}/>
            <Accordions 
              reservation={reservation}
              selectedTime={handleTimeChange}
              selectedCapacity={handleCapacityChange}
              />
            {/* 
            <TimePicker selectedTime={handleTimeChange} lable="משעה" theTime={reservation.startAt}/>
            <TimePicker selectedTime={handleTimeChange} lable="עד שעה" theTime={reservation.endAt}/>
            <CapacityPicker selectedCapacity={handleCapacityChange} capacitiesArray="2"/> */}
            <div className="submitWrapper">
              <AlertDialog 
                buttonText="מתאים לי בדיוק"
                buttonType="submit"
                reservation={reservation}
              />
            </div>
            {/* <TransitionsModal buttonText="מתאים לי בדיוק"/> */}
          </form>
      </div>
    // </Container>  
  );
}

export default OpenningPage;

