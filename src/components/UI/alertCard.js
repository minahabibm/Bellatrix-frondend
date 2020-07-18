import React from 'react';

import './alertCard.css';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

const UsesStyles = makeStyles(() => ({
    cardStyle: {
        marginBottom: '10px',
        borderLeft: '3px solid #DA0C6F' ,
        borderRadius: '0px',
    },
    cardContent: {
        "&:last-child": {
            paddingBottom: 2
          }
    },
    cardIcon: {
        float: 'right',
        color: '#BEBEBE', 
        fontSize: '22px',
    },
}));

function AlertCard(props) {

    const classes = UsesStyles();

    return (
        <Card className='cardStyle' classes={{root: classes.cardStyle}} >
            <CardContent classes={{root: classes.cardContent}}>
                <NotificationsNoneOutlinedIcon classes={{root: classes.cardIcon}}></NotificationsNoneOutlinedIcon>
                <h6 className="cardtitle" >{props.date}</h6>
                <p className="cardContentPar"> {props.task}</p>
            </CardContent>
        </Card>
    );
  }
  
export default AlertCard;