import React from "react";

import './userHelp.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "../components/UI/button";
import Divider from '@material-ui/core/Divider';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { makeStyles } from "@material-ui/styles";
import Expandable from '../components/UI/expandable'

const useStyles = makeStyles({
    root: {
      width: "100%"
    },
    Icons: {
        height: "18px",
        width: "18px",
    },
  });

function UserHelp() {
    const classes = useStyles();
  return (
    
        <Container fluid >
            <Row>

                <Col>

                    <Row>  
                        <Col> 
                            <div className="userHelpTittle">
                                User Help
                            </div>
                        </Col>
                        <Col> 
                            <div className="settingsRightNavigation">
                                <Button name="Publish Resources" rank="primary"></Button>
                            </div>
                        </Col>
                    </Row>

                    <hr className= "titleUserHelpLine"/>

                    <Row>
                        <Container fluid >

                            <Row>
                                <Col>
                                    <div className="userHelpContent">
                                        <Expandable
                                            title= "How to submit the required files for any task?"
                                            content= 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat \n Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat' 
                                        ></Expandable>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="userHelpContent">
                                        <Expandable
                                            title= "What does an Inactive task means?"
                                            content= "kdjhsafk hadfjakhfadkfhadkfhadshfka" 
                                        ></Expandable>
                                        
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="userHelpContent">
                                        <Expandable
                                            title= "How to submit my submission in case of upload error?"
                                            content= "Lorem ipsum dolor sit amet," 
                                        ></Expandable>
                                        
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="userHelpContent">
                                        <Expandable
                                            title= "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy?"
                                            content= "Lorem ipsum dolor sit amet," 
                                        ></Expandable>
                                        
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="userHelpContent">
                                        <Expandable
                                            title= "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy?"
                                            content= "Lorem ipsum dolor sit amet," 
                                        ></Expandable>
                                        
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="userHelpContent">
                                        <Expandable
                                            title= "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy?"
                                            content= "Lorem ipsum dolor sit amet," 
                                        ></Expandable>
                                        
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="userHelpContent">
                                        <Expandable
                                            title= "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy?"
                                            content= "Lorem ipsum dolor sit amet," 
                                        ></Expandable>
                                        
                                    </div>
                                </Col>
                            </Row>
                            
                        </Container>
                    </Row>

                </Col>

                <Col lg={"auto"}  className="divstyle">

                    <div className="contactus">
                        <h5 className="titlestyle">Contact Us</h5>
                    </div>

                    <Divider></Divider>

                    <div className="contactus"> 
                        <h6 className="textstyle" >Phone No.</h6>
                        <PhoneOutlinedIcon className={classes.Icons}></PhoneOutlinedIcon>
                        <p className="fontStyling posPho">1800 588 789, <br/> 1800 588 790  </p>
                    </div>

                    <div className="contactus"> 
                        <h6 className="textstyle">Email Support</h6>
                        <HelpOutlineIcon className={classes.Icons}></HelpOutlineIcon>
                        <p className="fontStyling posSup">Support@campus.com </p>
                    </div>

                    <div className="contactus"> 
                        <h6 className="textstyle">Address</h6>
                        <RoomOutlinedIcon className={classes.Icons }></RoomOutlinedIcon>
                        <p className="fontStyling posPin">22B, Baker Street, <br/> New York City, NY <br/> 55941 </p>
                    </div>

                </Col>

            </Row>

        </Container>
  );
}

export default UserHelp;