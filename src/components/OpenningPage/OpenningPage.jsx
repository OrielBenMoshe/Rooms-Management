import UserContext from './../../UserContext';
import React, { useState} from "react";
import {Container} from '@material-ui/core'
import Header from './../header/Header';
import Daybook from './dayBook/Daybook';
import DropBox from './dropBox/DropBox';
import AlertDialog from './AlertDialog/AlertDialog';
import TransitionsModal from './../TransitionsModal/TransitionsModal';
import Room from './dropBox/Room';


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

  const [theDate,setTheDate] = useState({
    theDay: new Date().getDate(),
    theMonth: new Date().getMonth(),
    startAt: "07:30",
    endAt: "16:30"
  });
  
  const [room,setRoom] = useState(2)

  const handleDateChange = (day, month) =>{
    setTheDate({theDay: day});
    setTheDate({theMonth: month});
  };
    
 function updateTime(value,time){
   let theNewTime = theDate;
   if (time === "משעה"){theNewTime.startAt = value}
   else {theNewTime.endAt = value};
   setTheDate(theNewTime);
 } 
 
 function selectRoom(value){
   setRoom(value)
 }
  
  // const user = useContext(UserContext);
  return (
    <Container maxWidth="sm">
      <div className={`OpenningPage ${classes.root}`}>
          <Header/>
          <div className={classes.notification}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>שלום,</Typography>
            <Typography variant="body2" color="textSecondary" component="p">ברוכים הבאים למערכת זימון חדרים של בנימין טק למתי לשריין לך את החדר?</Typography>
          </div>
          <form>
            <Daybook pickedDate={handleDateChange}/>
            <DropBox lable="משעה" updateTime={updateTime} theTime={theDate.startAt}/>
            <DropBox lable="עד שעה" updateTime={updateTime} theTime={theDate.endAt}/>
            <Room selectRoom={selectRoom} room={room}/>
            <AlertDialog 
              buttonText="מתאים לי בדיוק"
              buttonType="submit"
              reservation={theDate}
            />
            {/* <TransitionsModal buttonText="מתאים לי בדיוק"/> */}
          </form>
      </div>
    </Container>  
  );
}

export default OpenningPage;

