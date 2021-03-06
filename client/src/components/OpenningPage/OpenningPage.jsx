import Context from './../../Context';
import React, { useContext, useState } from "react";
import moment from 'moment';
import * as Utils from './../../utils'
import "./OpenningPage.css";
import Header from './../header/Header';

import Accordions from './Accordions/Accordions';
import DayPicker from './DayPicker/DayPicker';
import AlertDialog from './AlertDialog/AlertDialog';


import {Typography,Button }     from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'



function OpenningPage() {
  const user = useContext(Context);
  const useStyles = makeStyles(theme => ({
    root: {
    backgroundColor: 'white',
    margin: 'auto',
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
  const CurrentDate =  new moment();
  const defaultStart = Utils.roundUp(CurrentDate.format('HH:mm'));
  const defaultEnd = Utils.increaseHour(defaultStart);

  


  const [reservation,setReservation] = useState({
    theDay: CurrentDate.format('dddd'),
    theMonth: CurrentDate.format('MM'),
    // theYear: CurrentDate.format('Y'),
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
  const handleTimeChange = (value, label) => {
    const reservationTemp = reservation;

    label === "משעה" ? 
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
            <div className="submitWrapper">
              <AlertDialog 
                buttonText="מתאים לי בדיוק"
                buttonType="submit"
                reservation={reservation}
              />
            </div>
          </form>
      </div>
    // </Container>  
  );
}

export default OpenningPage;

