import React from 'react'; //, { useState }
import './skills.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

function Skills(props) {

    const UsesStyles = makeStyles(() => ({
        root: {
        },
        rail: {
            color: '#DADADA',
            height: 7,
            opacity: 0.5,
        },
        thumb:{
            height: 0,
            width: 0,
            boxShadow: 'none',
            '&:focus, &:hover': {
                boxShadow: 'none',
            },
        },
        mark: {
            backgroundColor: '#ffffff',
            height: 7,
            width: 3,
        },
        track: {
            padding: 0,
            color: props.color,
            height: 7,
          },
    }));

    var classes = UsesStyles();
    //const [skills, setSkills] = useState('1');
    const HandleSkills = (event, newValue) => {
        //setSkills(newValue);
        //console.log(newValue)
    };
    
  return (

    <div>
        <Container className="p-0">
            <Row>

                <Col lg={7}>
                    <div className=''>
                        {props.name}
                    </div>
                </Col>

                <Col>
                    <div className='levelTitle' style={{ color: props.color }}> 
                        {props.level}
                    </div>
                </Col>

            </Row>
            
            <Row>

                <Col>

                    <div className="skillsBarPos"> 
                        <Slider
                            classes={{
                                root: classes.root,
                                thumb: classes.thumb,
                                rail: classes.rail,
                                mark: classes.mark,
                                track: classes.track
                            }}
                            min={0}
                            max={3}
                            marks={[ {value: 1}, {value: 2}, {value: 3} ]}
                            step={1}
                            defaultValue={props.score} 
                            onChangeCommitted={HandleSkills}
                        ></Slider>
                    </div>

                </Col>
            
            </Row>
        </Container>
    </div>

  );
}

export default Skills;
