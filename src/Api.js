import axios from 'axios';
import React from 'react';

const Api = {
    getIp: async function (ip) {
        let res = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_sHxDGp8Lay2D3N9Wpn0YP4wlVhn9K&ipAddress=${ip}`);
        let { data } = await res;
        return data;
    },
    getLocal: async function (city) {
        let requestLocate = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=67f0137a4e8a5d7ed45a06083efa5505`);
        let { data } = await requestLocate;
        return data;
    }

}
export default Api;
