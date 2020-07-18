import React, {useState} from "react";

import './calender.css'

import * as dateFns from "date-fns";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Calender(props) {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    const header = () => {
        const dateFormat = "MMMM yyyy";
        return (
            <>
            <Col className={'arrowsHeader m-0 p-0'}> 
                <IconButton onClick={prevMonth}><ArrowBackIosIcon></ArrowBackIosIcon></IconButton>
            </Col>

            <Col lg={8} className={'dateHeader'} >
                {dateFns.format(currentDate, dateFormat)}
            </Col>

            <Col className={'arrowsHeader m-0 p-0'}> 
                <IconButton onClick={nextMonth}><ArrowForwardIosIcon></ArrowForwardIosIcon></IconButton>
            </Col>
            </>
        );
    };
    const days = () => {
        const dateFormat = "EEEEE";
        const days = [];
        let startDate = dateFns.startOfWeek(currentDate, { weekStartsOn: 1 });
        for (let i = 0; i < 7; i++) {
              days.push(      
                <Col  className={'daysName'} key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </Col>
            );
        }
        return days;
    };
    const cells = () => {
        const monthStart = dateFns.startOfMonth(currentDate);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart, { weekStartsOn: 1 });
        const endDate = dateFns.endOfWeek(monthEnd);
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
           for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <Col
                      className={` days ${!dateFns.isSameMonth(day, monthStart)? "disabled" : dateFns.isSameDay(day, selectedDate) ? "selected" : "" } `} 
                      key={day} 
                      onClick={() => onDateClick(dateFns.parse(cloneDay.toString().substr(4,12),'MMM dd yyyy', new Date()))}
                    >
                        {formattedDate}
                    </Col>
                );
                day = dateFns.addDays(day, 1);
                }
            rows.push(
              <Row className={'m-0 mb-3'} key={day}> {days} </Row>
            );
           days = [];
        }
        return rows;
    }

    const nextMonth = () => {
        setCurrentDate(dateFns.addMonths(currentDate, 1));
    };
    const prevMonth = () => {
        setCurrentDate(dateFns.subMonths(currentDate, 1));
    };
    const onDateClick = day => {
        setSelectedDate(day);       
    };    
        
  return (

    <Container fluid className='rowsStyling' >

        <Row className='rowStyling'>
            {header()}
        </Row>

        <Row className='mt-3' >
            {days()}
        </Row>

        <Row className='mt-3'>
            {cells()}
        </Row>

    </Container>
    
  );
}

export default Calender;