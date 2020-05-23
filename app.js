const lugar = require("./lugar/lugar");
const weather = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener clima',
        demand: true
    }
}).argv;

/* 

const data = lugar.getLugar(argv.direccion).then(console.log)


const clima = weather.getweather(53.910000, 27.549999).then(console.log).catch(err => console.log(err)); */



const getInfo = async (direccion) => {


    try {
        const coordenadas = await lugar.getLugar(direccion);
        const temp = await weather.getweather(coordenadas.lat, coordenadas.lon);
        tiempo = new Date();
        return `El clima de ${coordenadas.name} es ${temp} en la fecha ${tiempo} `
    } catch (error) {
        return `no se encontro ningun resultado`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)