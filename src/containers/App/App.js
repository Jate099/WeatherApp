import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import DayInfo from '../../components/DayInfo/DayInfo';
import transformInfo from '../../Utils/transformInfo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Week from '../Week/Week';

//b337bef0bb0c09a05507597c709990ef

/*const days = [
  {
    day: 'Monda',
    img: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
    tempMin: '70°',
    tempMax: '1500°',
  },
];*/

//var days;

function App() {
  const [selectedDay, setSelectedDay] = React.useState(null);

  const handleOpen = (info) => {
    setSelectedDay(info)
  };

  const handleClose = (isOpen) => {
    setSelectedDay(null);
  };

  //days && days.map((item) => { ---> la variable days inicia como indefinido, esto es igual a que sea falso. Por ello no se hace el map hasta que days sea un arreglo

  //map transfroma objetos a un tipo de valor con el que el usuario pueda interactuar o leer

  //Hacer componente que cuando se haga click en el dia salga una nueva tarjeta mas grande donde aparezcan toda la informacion de ese dia.

  /*<nav>
          <Link to="/about">About</Link>
          <Link to="/contLinkct">ConLinktct</Link>
          <Link to="/portfolio ">Portfolio</Link>
        </nav>*/

  /*<Route path="/about" render={() => {
    return <h1>About</h1>
  }} />

  <Route path="/contact" render={() => {
    return <h1>Conatct</h1>
  }} />

  <Route path="/portfolio" render={() => {
    return <h1>Portfolio</h1>
  }} />*/


  return (
    <Router>
      <div className="App">

        <Route path="/" exact component={Home} />
        <Route path="/week" component={Week} />

        {selectedDay !== null && <DayInfo
          dayModal={selectedDay.dayModal}
          open={selectedDay !== null}
          /*img={selectedDay.img}
          city={selectedDay.city}
          country={selectedDay.contry}
          tempMin={selectedDay.tempMin}
          tempMax={selectedDay.tempMax}
          windVel={selectedDay.windVel}
          windDir={selectedDay.windDir}
          hum={selectedDay.hum}
          atmosPress={selectedDay.atmosPress}
          descrip={selectedDay.descrip}*/
          {...selectedDay} //---> spread operator - permite recorrer todos los elementos de selectedDay
          onClick={handleClose}
        />}

        <CssBaseline />
      </div>
    </Router>
  );


}

export default App;
