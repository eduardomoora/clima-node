const axios = require('axios');


const getLugar = async (direccion) => {

    const encode = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encode}`,
        headers: {
            'x-rapidapi-key': '91d48a512cmsh3a35ee5b9b9678fp13ccf8jsn60c72f1ff5f7'
        }
    });

    resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error('no se encontro ningun resultado');

    }

    data = resp.data.Results[0];
    let {lat,lon,name} = data;
    
    return {
        lat,
        lon,
        name
    };


}

module.exports = {
    getLugar
}