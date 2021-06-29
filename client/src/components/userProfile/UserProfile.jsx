import React, { useContext } from "react";
import Header from "../header/Header";
import Context from './../../Context';
import "./UserProfile.css";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Item from "../item";
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
      <div id="UserProfile">
        <Header/>
            <Card className="greeting" variant="none" elevation={0}>
              <Button
                onClick={() => {
                  history.goBack();
                }}
                style={{ position: "relative", right: "145px", top: "-60px" }}
              >
                <ArrowBack style={{ color: "#00aaaf" }} />
              </Button>
              <div>
                <AccountCircleOutlinedIcon
                  style={{ fontSize: "70px" }}
                  fontSize="large"
                />
                <CameraAltRounded
                  style={{
                    color: "#00AAAF",
                    position: "relative",
                    left: "22px",
                  }}
                  fontSize="small"
                />
              </div>

              <Typography
                color="textPrimary"
                gutterBottom
                variant="body2"
                component="p"
                className=""
              >
                {user.email}
                <EditOutlined
                  fontSize="small"
                  style={{
                    color: "#00AAAF",
                    marginTop: "10px",
                    position: "relative",
                    top: "4px",
                  }}
                  variant="outline"
                />
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="body2"
                component="p"
                className=""
              >
                {user.phone}
                <EditOutlined
                  fontSize="small"
                  style={{
                    color: "#00AAAF",
                    marginTop: "10px",
                    position: "relative",
                    top: "4px",
                  }}
                  variant="outline"
                />
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
            <TabPanel value={value} index={0}>
              <Item />
              <Item />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Item />
            </TabPanel>
          </SwipeableViews>
        </div>
  );
}
export default withRouter(UserProfile);
