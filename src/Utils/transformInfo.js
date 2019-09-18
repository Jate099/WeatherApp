import moment from"moment";

function transformInfo(info) {
    var filteredList = info.list.filter((element, index) => {
      return index % 8 === 0;
    });
  
    var transformedList = filteredList.map((elem, index, array) => {
  
      var city = info.city.name;
      var country = info.city.contry;
  
      return {
        day: moment.unix(elem.dt).format('ddd'),
        dayModal: moment.unix(elem.dt).format('ddd [/] Do [/] M [/] Y'),
        img: `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`,
        tempMin: Math.round(elem.main.temp_min - 273.15) + '°',
        tempMax: Math.round(elem.main.temp_max - 273.15) + '°',
        city: city,
        country: country,
        windVel: elem.wind.speed,
        windDir: elem.wind.deg,
        atmosPress: elem.main.pressure,
        hum: elem.main.humidity,
        descrip: elem.weather[0].description,
      };
    });
  
    return transformedList;
  }

  export default transformInfo;