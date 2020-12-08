  import React from 'react';
  import Header from '../header/Header';


  import PropTypes from 'prop-types';
  import SwipeableViews from 'react-swipeable-views';
  import { makeStyles, useTheme } from '@material-ui/core/styles';
  import AppBar from '@material-ui/core/AppBar';
  import Tabs from '@material-ui/core/Tabs';
  import Tab from '@material-ui/core/Tab';
  import Typography from '@material-ui/core/Typography';
  import Box from '@material-ui/core/Box';
  import Item from '../item'
  import {Card,Button,Container} from '@material-ui/core'
 
  import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
  import {EditOutlined,CameraAltRounded,ArrowBack} from '@material-ui/icons'
import { withRouter } from 'react-router-dom';
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';
  

  //togggle between two pages
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      margin: 'auto',
      width: 345,
      overflow : 'hidden'
    },
    greeting : {
      backgroundColor : '#f4f4f4',
      padding : '4rem',
      textAlign : 'center'

    },
    tab : {
      backgroundColor : '#fff',
    
    }
  }));
  
  function UserProfile({history}) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (
      <Container alginContent = 'center' >
      <div className={classes.root}>
        <Header/>
        <div>
        
        <div>
          
          <Card className = {classes.greeting} variant = 'none' elevation={0} >
          <Button onClick = {()=>{history.goBack()}} style = {{position : 'relative', right: '145px',top : '-60px'}}><ArrowBack style = {{color :'#00aaaf'}} /></Button>
          <div>
          <AccountCircleOutlinedIcon style = {{fontSize : '70px'}} fontSize = 'large'/>
          <CameraAltRounded style = {{color : '#00AAAF',position : 'relative',left : '22px'}} fontSize = 'small'/>

          </div>
          
          <Typography color="textPrimary" gutterBottom variant="body2" component="p" className={classes.title, classes.HebrewtextAlgin}>
      daniel@gmail.com <EditOutlined fontSize = 'small' style={{ color: '#00AAAF',marginTop : '10px',position : 'relative',top : '4px'  }} variant = 'outline'/>
     </Typography>
     <Typography color="textPrimary" gutterBottom variant="body2" component="p" className={classes.title, classes.HebrewtextAlgin}>
      050-7323002 <EditOutlined fontSize = 'small' style={{ color: '#00AAAF',marginTop : '10px',position : 'relative',top : '4px' }} variant = 'outline'/>
     </Typography>
          
            </Card>
         
          </div>
          <AppBar variant = 'none' position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab className = {classes.tab} label="חדרים מוזמנים"{ ...a11yProps(0)} />
              <Tab className = {classes.tab} label="הסטורית הזמנות"{...a11yProps(1)} />
            </Tabs>
          </AppBar>
        
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Item/>
              <Item/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            <Item/>
            
            </TabPanel>
          </SwipeableViews>

         
        </div>
    </div>
    </Container>
    );
  }
  export default withRouter(UserProfile)