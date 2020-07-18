import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries
} from 'react-vis';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './tasksCompleted.css';
import 'react-vis/dist/style.css';


import { ReactComponent as TasksCompletedIcon } from '../../images/circleWithCompleted.svg'
import { ReactComponent as ArrowCharts } from '../../images/chartArrow.svg'


function TasksCompleted(props) {

  const greenData = [{x: 'July', y: 13, yOffset: -8}, {x: 'Aug', y: 5, yOffset: -8}, {x: 'Sep', y: 10, yOffset: -8}, {x: 'Oct', y: 15, yOffset: -8}, {x: 'Nov', y: 2, yOffset: -8}, {x: 'Dec', y: 8, yOffset: -8},{x: 'Jan', y: 4, yOffset: -8}, {x: 'Feb', y: 12, yOffset: -8}, {x: 'Mar', y: 18, yOffset: -8}, {x: 'Apr', y: 13, yOffset: -8}, {x: 'May', y: 8, yOffset: -8}, {x: 'June', y: 5, yOffset: -8} ];

  return (

    <div>

      <Container fluid >
        <Row className={"divPointsStyling"}>

          <Col>
            <TasksCompletedIcon className={"iconPointsStyling"} ></TasksCompletedIcon>
            <h5 className={"titleStyling"}>Tasks Completed</h5>
          </Col>

          <Col>
            <ArrowCharts className={"iconArrowPointsStyling"}></ArrowCharts>
            <p className={"subtitleStyling"}> Last 1 Year </p>
          </Col>

        </Row>

        <Row>

          <XYPlot
            className="divPointsChartStyling"
            xType="ordinal" 
            width={1010} 
            height={215}
            xDistance={100}
            //xDomain={[-3, 3]}
            yDomain={[0, 20]}
            >
            <HorizontalGridLines 
              tickTotal={5}
            />
            <XAxis
              hideLine
              style={{
                text: {fontWeight: 500, fontSize: 14}
              }}
            />
            <YAxis
              tickTotal={5}
              hideLine
              style={{
                text: {fontWeight: 500, fontSize: 14}
              }}
            />
            <VerticalBarSeries
              barWidth={0.15}
              color="#00B2AC" 
              data={greenData} 
            />
  
            <LabelSeries 
              data={greenData} 
              getLabel={d => d.y}
              labelAnchorX={"middle"}
              labelAnchorY={"text-top"}
              style={{fontWeight: 500}}
            />
          </XYPlot>

        </Row>
      </Container>

    </div>
  
  );
}

export default TasksCompleted;
