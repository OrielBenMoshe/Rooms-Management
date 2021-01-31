import Context from './../../Context';
import React, { useContext, useState } from "react";
import moment from 'moment';
import * as Utils from './../../utils'
import "./OpenningPage.css";
import Header from './../header/Header';

import Accordions from './Accordions/Accordions';
import DayPicker from './DayPicker/DayPicker';
import TimePicker from './Accordions/TimePicker/TimePicker';
import AlertDialog from './AlertDialog/AlertDialog';
import CapacityPicker from './Accordions/CapacityPicker/CapacityPicker';


import {Typography,Button }     from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'



function OpenningPage() {
  const user = useContext(Context);
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

  const increaseHour = (formatedTime) => {
    let hour = formatedTime.slice(0, 2);
    let minutes = formatedTime.slice(3);
    parseInt(hour); 
    hour == 24 ? hour = '01' : hour++;
    return `${hour}:${minutes}`;
  }


  const CurrentDate =  new moment();
  const defaultStart = Utils.roundUp(CurrentDate.format('HH:mm'));
  const defaultEnd = increaseHour(defaultStart);

  const intervalArray = (start, end, interval) => {
    let timesArray = [];
    let time = start;
    console.log('time: ', moment(time, "HH:mm"))
    while (time !== end) {
      
      time = end;
    }
  }

  intervalArray(defaultStart, defaultEnd, 30);

  const [reservation,setReservation] = useState({
    theDay: CurrentDate.format('dddd'),
    theMonth: CurrentDate.format('MM'),
    startAt: defaultStart,
    endAt: defaultEnd,
    capacity: 2,
    user_id : user.user_id
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

