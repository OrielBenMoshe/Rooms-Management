import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {
    Grid, 
    Button,
    IconButton,
    Divider, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    paper: {
    //   backgroundColor: theme.palette.background.paper,
      // border: '0.5px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
        width: "100%",
        pedding: "0 5px",
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(-0.5),
        top: theme.spacing(-0.5),
        // color: theme.palette.grey[800],
        
    },
    title: {
        marginTop: "30px",
        color: theme.palette.grey[700],
    }
  }));


export default function AlertDialog(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let reservation = props.reservation;
 
  return (
    <div>
      <Button className={classes.button} variant="contained" color="primary" onClick={handleClickOpen}>
        {props.buttonText}
      </Button>
      <Dialog
        className={classes.paper}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogTitle id="alert-dialog-title" className={classes.title}>{"מצאנו חדר בדיוק בשבילך!"}</DialogTitle>
        <DialogContent>
        
            <p>שופר - חדר עד 6 משתתפים</p>
            <p>{reservation.theDay}</p>
            <p>{reservation.startAt}-{reservation.endAt}</p>
            <DialogContentText id="alert-dialog-description">
                לשמור לך אותו תמורת  אסימונים?
            </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button className={classes.button} onClick={handleClose} color="primary">
            ביטול
          </Button>
          {/* <Divider orientation="vertical" flexItem /> */}
          <Button className={classes.button} onClick={handleClose} color="primary" autoFocus>
            ברור
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
