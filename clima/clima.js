
const axios = require('axios');
const apikey='2cc4947ea516f51b9dfecac623134bf1';

/* const url=`api.openweathermap.org/data/2.5/weather?lat=48.860001&lon=2.350000&appid=${apikey}`; */

const getweather = async (lat,lon)=>{

    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;


     const resp=  await axios.get(url);


   return resp.data.main.temp;

}

module.exports={
    getweather
}
