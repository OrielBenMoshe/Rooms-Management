import React, { useContext } from "react";
import Header from "../header/Header";
import Context from './../../Context';
import "./UserProfile.scss";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Reservation from "./Reservation";
import { Card, Button, Container } from "@material-ui/core";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { EditOutlined, CameraAltRounded, ArrowBack } from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import { styles } from "@material-ui/pickers/views/Calendar/Calendar";

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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function UserProfile({ history }) {
  const [value, setValue] = React.useState(0);
  const user = useContext(Context);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="userProfile">
      <Header />
      {/* פרטי משתמש */}
      <Card className="user_details_container" variant="none" elevation={0}>
        <Button onClick={ () => { history.goBack();} } >
          <ArrowBack/>
        </Button>
        <div className="user_image">
          <img className="avatar" src="/images/icon_avatar.svg" alt="" />
          <img className="camera" src="/images/icon_camera.svg" alt="" />
        </div>

        <Typography>
          <img className="edit" src="/images/icon_pencil.svg" alt="" />
          {user.email}
        </Typography>
        <Typography>
          <img className="edit" src="/images/icon_pencil.svg" alt="" /> 
          {user.phone}
        </Typography>
      </Card>

      <AppBar variant="none" position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            className="tab"
            label="חדרים מוזמנים"
            {...a11yProps(0)}
          />
          <Tab
            className="tab"
            label="הסטורית הזמנות"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis="x-reverse"
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className="tab_content" value={value} index={0}>
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
        </TabPanel>
        <TabPanel className="tab_content" value={value} index={1}>
          <Reservation />
          <Reservation />
          <Reservation />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default withRouter(UserProfile);
