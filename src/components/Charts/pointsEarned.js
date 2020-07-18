import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
} from 'react-vis';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './pointsEarned.css';
import 'react-vis/dist/style.css';

import { ReactComponent as PointsEarnedIcon } from '../../images/diamond.svg'
import { ReactComponent as ArrowCharts } from '../../images/chartArrow.svg'


function PointsEarned(props) {

  const greenData = [{x: 'July', y: 3000}, {x: 'Aug', y: 2500}, {x: 'Sep', y: 4500}, {x: 'Oct', y: 1500}, {x: 'Nov', y: 5500}, {x: 'Dec', y: 3500},{x: 'Jan', y: 3750}, {x: 'Feb', y: 500}, {x: 'Mar', y: 1500}, {x: 'Apr', y: 2100}, {x: 'May', y: 500}, {x: 'June', y: 3000} ];

  return (

    <div>

      <Container fluid >
        <Row className={"divPointsStyling"}>

          <Col>
            <PointsEarnedIcon className={"iconPointsStyling"} ></PointsEarnedIcon>
            <h5 className={"titleStyling"}>Points Earned</h5>
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
            width={650} 
            height={215}
            xDistance={100}
            //xDomain={[-3, 3]}
            yDomain={[0, 6000]}
            >
            <HorizontalGridLines 
              tickTotal={4}
            />
            <XAxis
              hideLine
              style={{
                text: {fontWeight: 500, fontSize: 14}
              }}
            />
            <YAxis
              tickTotal={4}
              hideLine
              tickFormat={function tickFormat(greenData){ if (greenData === 0){return 0} else{ return greenData / 1000 + 'k'}}}
              style={{
                text: {fontWeight: 500, fontSize: 14}
              }}
            />
            <VerticalBarSeries
              barWidth={0.2}
              color="#0072CE" 
              data={greenData} 
            />
          </XYPlot>

        </Row>
      </Container>

    </div>
  
  );
}

export default PointsEarned;
