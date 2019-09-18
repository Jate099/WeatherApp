import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { Grid } from '@material-ui/core';
import transformInfo from '../../Utils/transformInfo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Week() {

    const [days, setDays] = React.useState([]);

    React.useEffect(function () {
        var promise = fetch('http://api.openweathermap.org/data/2.5/forecast?q=Cali,co&APPID=b337bef0bb0c09a05507597c709990ef');

        promise.then((info) => {
            return info.json();
        })

            .then((info) => {

                var list = transformInfo(info);
                setDays(list);

                console.log(days);
            });

    }, []); //UseEffect---> permite evitar que el fetch se siga ejecutando varias veces

    return <Grid container spacing={1}>

        <Grid item>
            <h2>Week weather view</h2>
        </Grid>

        {days && days.map((item) => {
            return <Grid item md={2} key={item.day}>
                <WeatherCard /*onClick={handleClick}*/
                    {...item}
                />
            </Grid>
        })}

        <Route path="/week/:day" render={(props) => {
            console.log('printing day' + props.match.params.day);
            return null
            
            /*<DayInfo
                {...selectedDay} //---> spread operator - permite recorrer todos los elementos de selectedDay
                open={selectedDay !== null}
                onClick={handleClose}
            />*/
        }} />

    </Grid>;
}

export default Week;