import React from "react";

import './myProfile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


import Tasks from '../components/Charts/tasks'
import PointsEarned from '../components/Charts/pointsEarned'
import TasksCompleted from '../components/Charts/tasksCompleted'
import SkillsBars from '../components/Skills/skillBars'
import SkillsButton from '../components/Skills/skillAddButton'
import { ReactComponent as ProfilePictureEdit } from '../images/editProfilePicture.svg'
import { ReactComponent as PointsEarnedIcon } from '../images/diamond.svg'
import ProfilePictureTest  from '../images/test.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      border: `2px solid #78C043`,
    },
    profile: {     
    }
  }));

function MyProfile() {

    const classes = useStyles();    
    
  return (

    <Container fluid >
        <Row>

            <Col>

                <Row >  
                    <Col className="myProfileTittle">     
                        My Profile
                    </Col>
                </Row>
                
                <Row className="sizing">

                    <Col lg={4} className="coulumnStyling">
                        <div className="chartDiv">
                            <Tasks completed={70} uncompleted={30}  ></Tasks>
                        </div>
                        
                    </Col>

                    <Col lg={8} className="coulumnStyling">
                        <div className="chartDiv">
                            <PointsEarned></PointsEarned>
                        </div>
                    </Col>

                </Row>

                <Row className="sizing">
                    <Col lg={12} className="coulumnStyling">
                        <div className="chartDiv">
                            <TasksCompleted></TasksCompleted>
                        </div>
                    </Col>

                </Row>

            </Col>

            <Col lg={"auto"} className="divProfilColoumnStyle" >
                
                <Row>
                    <Col lg={12} className="profilePicDiv" >
                        <div className="profilePicPos">
                            <Badge
                                overlap="circle"
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                                }}
                                badgeContent={<ProfilePictureEdit ></ProfilePictureEdit>}
                            >
                                <Avatar alt="Travis Howard" src={ProfilePictureTest} className={classes.large}/>
                            </Badge> 
                        </div>                      
                    </Col>
                </Row>
                    
                <Row>
                    <Col lg={12} className="profileInfoDiv">
                        <div className="profileInfoPos">
                            <h5 className="profileName" >Jessy Lane</h5>
                            <p className="profileEmail" > jessylane@campusmail.com</p>
                        </div>
                        <div className="profileInfoPosPoints">
                            <PointsEarnedIcon className={"profilePointsIcon"} ></PointsEarnedIcon>
                            <p className="profilePointsScore" >15,898</p>
                        </div>
                        
                    </Col>
                </Row>

                <Row >
                    <Col lg={12} className="profileSkillsDiv" >
                        <div>

                            <Row>
                                <Col>
                                    <h6 className="profileSkillsTittle" >
                                        Skills
                                    </h6>

                                    <div className="profileSkillsIcon">
                                        <SkillsButton> </SkillsButton>
                                    </div>
                                </Col>
                            </Row>

                            <div>
                                <SkillsBars></SkillsBars>
                            </div>
                            
                        </div>
                        
                    </Col>
                </Row>

            </Col>

        </Row>
    </Container>
  );
}

export default MyProfile;