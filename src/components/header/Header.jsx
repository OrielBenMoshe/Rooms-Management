import React, { useContext } from 'react';
import UserContext from './../../UserContext';
import {Link} from 'react-router-dom';
import './Header.css';
//Material UI imports.
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 2,
  },
  container: {
    display: 'flex',
    justifyContent: "space-between",
    color : '#46494F'
    
  },
  appBar : {
    backgroundColor : 'white',
  
    justifyContent:'space-between',
    padding: '0 10px'
  },
  userDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'right',
  }
  

}));


 function Header({history,match}) {

  const user = useContext(UserContext);

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar className = {classes.appBar} variant = 'secendery' position="static" >
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <div className={classes.userDetails}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(e)=>{handleMenu(e); history.push("/UserProfile")}}
                color="inherit"
              >
                <AccountCircle fontSize='small' />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/UserProfile">
                  <MenuItem onClick={handleClose}>פרופיל משתמש</MenuItem>                 
                </Link>
                <MenuItem onClick={handleClose}>התנתקות</MenuItem>
              </Menu>
            {auth && (
              <div>
              <Typography color="textPrimary" variant="body2" className={classes.title}>
                {user.name} {user.surName}
              </Typography>
              <Typography variant="body2" className={classes.title}>
                יתרה {user.credit} אסימונים
              </Typography>
              </div>
            )}
          </div>
          
          
          <img src="logo.png" className={classes.logo}  alt="Image"/>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header)
