import React from "react";
import './header.css';
import Navbar from 'react-bootstrap/Navbar'
import LogoUI from '../UI/logo'
import Logout from '../UI/logout'
import Vertical from '../UI/verticaline'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Avatar: {
    marginRight: "10px",
    marginLeft: "0px",
    sizes: 'small',
    background: '#78C043',
  },
  Notification: {
    marginLeft: "-10px",
  }
});

//const divStyle = {
  //borderStyle: 'dotted',
//};

function Header(props) {
  const classes = useStyles();
  return (

    <Navbar className = "m-0 p-0 navbar" sticky="top">
      
      <div className="logo">
        <LogoUI></LogoUI>
      </div>

      <div className="middleNAvigation mx-auto">
        <a href="/dashboard" className= "linksHeader">Dashboard</a>
        <a href="/userHelp" className= "linksHeader">User Help</a>
        <a href="/myProfile" className= "linksHeader">My Profile</a>
      </div>

      <div className="rightNavigation">
        <div className="title">
          <h6 className="titles" >Jessy Lane </h6>
            <p className="titles fontColor">Worker</p>
        </div>

        <IconButton className={classes.Notification} >
          <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.Avatar} >
            JL
          </Avatar>
        </IconButton>

        <Vertical ></Vertical>

        <IconButton color="inherit" className={classes.Notification} >
          <Badge badgeContent={1} color="secondary" overlap="circle">
            <NotificationsNoneIcon ></NotificationsNoneIcon>
          </Badge>
        </IconButton>

        <IconButton color="inherit" href="/settings">
          <SettingsOutlinedIcon></SettingsOutlinedIcon>
        </IconButton>

        <IconButton color="inherit">
          <Logout></Logout>
        </IconButton>
      </div>

    </Navbar>

  );
}

export default Header;