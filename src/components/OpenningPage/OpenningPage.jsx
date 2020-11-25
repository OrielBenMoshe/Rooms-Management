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
    margin: theme.spacing(3),
    width: 345,
    },
    media: {
    height: 140,
    },
    title: {
    color: theme.palette.primary.main
    }
    }));
  const classes = useStyles();

  const [theTime,setTheTime]=useState({
    startAt: "07:30",
    endAt: "16:30"});
   const [room,setRoom]=useState(2)
    
 function updateTime(value,time){
   let theNewTime=theTime;
   if (time==="משעה"){theNewTime.startAt=value}
   else {theNewTime.endAt=value};
   setTheTime(theNewTime);
 }
 
 function selectRoom(value){
   setRoom(value)
 }
  
  // const user = useContext(UserContext);
  return (
    <Container maxWidth="sm">
      <div className={`OpenningPage ${classes.root}`}>
          <Header/>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>שלום,</Typography>
          <Typography variant="body2" color="textSecondary" component="p">ברוכים הבאים למערכת זימון חדרים של בנימין טק למתי לשריין לך את החדר?</Typography>
          <form>
            <Daybook/>
            <DropBox lable="משעה" updateTime={updateTime} theTime={theTime.startAt}/>
            <DropBox lable="עד שעה" updateTime={updateTime} theTime={theTime.endAt}/>
            <Room selectRoom={selectRoom} room={room}/>
            <AlertDialog 
              buttonText="מתאים לי בדיוק"
              buttonType="submit"/>
            {/* <TransitionsModal buttonText="מתאים לי בדיוק"/> */}
          </form>
      </div>
    </Container>  
  );
}

export default OpenningPage;

