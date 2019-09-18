import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { flexbox } from '@material-ui/system';

function WeatherCard(props) {
    const classes = useStyles();

    function handleClick(){
        if( typeof props.onClick == 'function' ){
            props.onClick(props);
        }
    };

    return (
    <Card onClick={handleClick}>
        <CardContent className={classes.content}>
            <h1 className={classes.title}>{props.day}</h1>
            <img className={classes.imag} src={props.img} alt=""></img>
            <p className={classes.text}><span>{props.tempMin}</span> {props.tempMax}</p>
        </CardContent>
    </Card>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        color: 'gray',
        fontSize: 30,
        margin: '0',
    },
    
    imag: {

    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        margin: '0', 
        fontSize: '30',
        color: theme.palette.grey[500],
        '& span': {
            color: theme.palette.grey[800],
        }
    },
}));

export default WeatherCard;