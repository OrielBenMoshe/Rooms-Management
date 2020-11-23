
import {Container} from '@material-ui/core'
import Header from './header/Header';
import Daybook from './dayBook/Daybook';
import DropBox from './dropBox/DropBox';
import TransitionsModal from '../TransitionsModal/TransitionsModal';

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

  return (
    <Container maxWidth="sm">
      <div className={`OpenningPage ${classes.root}`}>
          <Header/>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>שלום דניאל,</Typography>
          <Typography variant="body2" color="textSecondary" component="p">ברוכים הבאים למערכת זימון חדרים של בנימין טק למתי לשריין לך את החדר?</Typography>
          <form>
            <Daybook/>
            <DropBox/>
            <DropBox/>
            <DropBox/>
            <TransitionsModal 
              buttonText="מתאים לי בדיוק"
              buttonType="submit"/>
          </form>
          {/* <SpringModal/> */}
      </div>
    </Container>  
  );
}

export default OpenningPage;

