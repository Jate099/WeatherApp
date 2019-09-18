import React from 'react';
import { Card, CardContent, makeStyles, Modal } from '@material-ui/core';

function DayInfo(props) {
    const classes = UseStyles();

    function handleClose() {
        if (typeof props.onClick === 'function') {
            props.onClick(props.open);
        }
    };

    return (
        <Modal className={classes.modal}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            open={props.open}>

            <Card className={classes.content}>
                <CardContent>
                    <button onClick={handleClose}>X</button>
                    <h1 id="modal-title">{props.dayModal}</h1>
                    <img src={props.img}></img>
                    <p id="modal-description">{props.descrip}</p>
                    <p><strong>City:</strong> {props.city}</p>
                    <p><strong>Country:</strong> {props.country}</p>
                    <p><strong>Wind Vel:</strong> {props.windVel}</p>
                    <p><strong>Wind Dir:</strong> {props.windDir}</p>
                    <p><strong>Atmos press:</strong> {props.atmosPress}</p>
                    <p><strong>Hum:</strong> {props.hum}</p>
                    <p>Temp Min: {props.tempMin}</p>
                    <p>Temp Max: {props.tempMax}</p>
                </CardContent>
            </Card>


        </Modal >
    );
}

const UseStyles = makeStyles(theme => ({

    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
    },
}));

export default DayInfo;