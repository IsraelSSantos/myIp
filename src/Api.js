import axios from 'axios';

const Api = {
    getIp: async function (ip) {
        let res = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_sHxDGp8Lay2D3N9Wpn0YP4wlVhn9K&ipAddress=${ip}`);
        let { data } = await res;
        return data;
    },

}
export default Api;
