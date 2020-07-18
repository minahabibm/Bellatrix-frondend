import React from "react";

import './settings.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "../components/UI/button";
import Switch from "../components/UI/switch";

function Settings() {
  return (

    <Container fluid >
      <Row> 

        <Col> 
          <div className="settingsTittle">
            Settings
          </div>
        </Col>

        <Col> 
          <div className="settingsRightNavigation">
            <Button name="Save Changes" rank="primary"></Button>
            <Button name="Reset" rank="secondry"></Button>
          </div>
        </Col>
        
      </Row>
      <hr className= "titleLine"/>

      <Row>
        <Container fluid >

          <Row>
            <Col>
              <div className="settingsContents"> 
                <div className="suTtitles">Dashboard Metrics</div>
                <div className="subTitlesContents">Turn this on if you want to see the overall metrics of the tasks on the dashboard.</div>
              </div>
            </Col>
            <Col> 
              <div className="settingsContentsNavigation"> 
                <Switch id= "1"></Switch>
              </div>
            </Col>
          </Row>
          <hr className= "settingsContentsLine"/>
          
          <Row>
            <Col>
              <div className="settingsContents"> 
                <div className="suTtitles">Notfification Panel</div>
                <div className="subTitlesContents">Turn this on for keeping the notification panel always visible on the dashboard.</div>
              </div>
            </Col>
            <Col> 
              <div className="settingsContentsNavigation"> 
                <Switch id= "2"></Switch>
              </div>
            </Col>
          </Row>
          <hr className= "settingsContentsLine"/>

          <Row>
            <Col xs={12} md={8}>
              <div className="settingsContents"> 
                <div className="suTtitles">Upcoming Deadlines Panel</div>
                <div className="subTitlesContents">Turn this on for Keeping the upcoming Deadlines panel always visible on the dashboard.</div>          
              </div>
            </Col>
            <Col> 
              <div className="settingsContentsNavigation"> 
                <Switch id= "3"></Switch>
              </div>
            </Col>
          </Row>
          <hr className= "settingsContentsLine"/>

          <Row>
            <Col>
              <div className="settingsContents"> 
                <div className="suTtitles">WebApp Notifications</div>
                <div className="subTitlesContents">Turn this on if you want to keep receiving the notifications within this application.</div>
              </div>
            </Col>
            <Col> 
              <div className="settingsContentsNavigation"> 
                <Switch id= "4"></Switch>
              </div>
            </Col>
          </Row>
          <hr className= "settingsContentsLine"/>

          <Row>
            <Col xs={12} md={8}>
              <div className="settingsContents"> 
                <div className="suTtitles">Email Notifications</div>
                <div className="subTitlesContents">Turn this on if you want to keep receiving the notification of all the task related activities.</div>
              </div>
            </Col>
            <Col > 
              <div className="settingsContentsNavigation"> 
                <Switch id= "5"></Switch>
              </div>
            </Col>
          </Row>
          <hr className= "settingsContentsLine"/>

        </Container>
      </Row>

      </Container>
  );
}

export default Settings;