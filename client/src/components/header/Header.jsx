import React, { useContext, useState } from 'react';
import './Header.scss';
import Context from './../../Context';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

//Material UI imports.
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


function Header({ history, match }) {
  const user = useContext(Context);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const logOut = <Link to="/">התנתק.י</Link>;
  const logIn = <Link to="/Verification">התחבר.י</Link>;

  const handleChange = (event) => {
    setAuth(event.target.checked);
    // window.location.href = '/';
  };

  const logInOrLogOut = () => {
    setAuth(!auth);
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  /*  
    ClientSchema:
      user_name: String,
      phone: String,
      email: String,
      password: String,
      regularCustomer: Boolean,
      credits: Number,
      client_reservation: 
        [{ 
          type: schema.Types.ObjectId, 
          ref: "Reservation" 
        }],
  */
  return (
    <div className="header">
      <FormGroup>
        {/* <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        /> */}
      </FormGroup>

      <AppBar variant='secendery' position="static">
        <Toolbar className="tool_bar">
          <div className="user_details">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <AccountCircle fontSize='small' />
            </IconButton>

            {/*The menu of the icon button */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              disableScrollLock={ true }
            >
              <MenuList>
              {!/UserProfile/.test(window.location.href) && (
                <MenuItem onClick={handleClose}><Link to="/UserProfile">פרופיל משתמש</Link></MenuItem>
              )}
                <MenuItem onClick={logInOrLogOut}>{auth ? logOut : logIn}</MenuItem>
              </MenuList>

            </Menu>
            {auth 
            ? (
              <div>
                <Typography color="textPrimary" variant="body2" className="title">
                  {user.name} {user.surName}
                </Typography>
                <Typography color="textPrimary" variant="body2" className="title">
                  יתרה {user.credit} אסימונים
                </Typography>
              </div>
              )
            : <Typography color="textPrimary" variant="body2" className="title">
                שלום משתמש חדש!
              </Typography>
            }

          </div>
          <img src="/images/logo.png" alt="Image" />

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header)
