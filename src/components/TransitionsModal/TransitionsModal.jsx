import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Fade, Grid, Button, Backdrop, Modal, Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '0.5px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
      <Button type={props.buttonType} variant="contained" color="primary" onClick={handleOpen}>
        {props.buttonText}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">תענוג, החדר כולו שלך!</h2>
            <p id="transition-modal-description">תזכורת עם כל הפרטים כבר בדרך לתיבת המייל שלך</p>
            <Grid container alignItems="center" className={classes.root}>
              <Button>הזמנת משתתפים</Button>
              <Divider orientation="vertical" flexItem />
              <Button>הוספה ליומן שלי</Button>
            </Grid>
            
          </div>
        
        </Fade>
      </Modal>
    </div>
  );
}
