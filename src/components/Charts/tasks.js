import React from "react";

import './tasks.css';
import 'react-vis/dist/style.css';

import { RadialChart, LabelSeries } from 'react-vis';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactComponent as TasksIcon } from '../../images/tasks.svg'

function Tasks(props) {

    const LABEL_STYLE = {
        fontSize: '25px',
        fontWeight: 'bolder',
        textAnchor: 'middle'
      };
    const percent = (Math.round((100 * props.completed) / (props.completed + props.uncompleted))).toString() + "%"; 

    return (
        <div>
            <Container fluid >
                <Row className={"divStyling"}>

                    <Col>
                        <TasksIcon className={"iconStyling"} ></TasksIcon>
                        <h5 className={"titleStyling"}>Tasks</h5>
                    </Col>

                </Row>

                <Row>
                    <RadialChart
                        className={''}
                        margin={{left: 40, right: 40, top: 10, bottom: 10}}
                        center={{x: 0, y: 0.3}} 
                        innerRadius={50}
                        radius={70}
                        colorType="literal"
                        getAngle={d => d.theta}
                        getColor={d=> d.color}
                        data={[
                        {theta: props.completed, color:'#00B2AC'},
                        {theta: props.uncompleted,  color:'#DA0C6F'},
                        ]}
                        width={325}
                        height={240}
                        padAngle={0.04}
                    >
                        <LabelSeries
                            data={[{x: 0, y: .5, label: percent , style: LABEL_STYLE}]}
                        />

                        <LabelSeries
                            className={'labelFontNumber'}
                            style={{fill:"#00B2AC"}}
                            data={[{x: -1.3, y: -1.2, label: props.completed.toString()}]}
                        />
                        <LabelSeries
                            className={'labelFontBody'}
                            data={[{x: -1.9, y: -1.5, label: "Completed Tasks "}]}
                        />

                        <LabelSeries
                            className={'labelFontNumber'}
                            style={{fill:"#DA0C6F"}}
                            data={[{x: 1.3, y: -1.2, label: props.uncompleted.toString()}]}
                        />
                        <LabelSeries
                            className={'labelFontBody'}
                            data={[{x: 1.7, y: -1.5, label: "Failed Tasks" }]}
                        />
                    </RadialChart>
                </Row>
                
            </Container>


        
        </div>
  );
}

export default Tasks;