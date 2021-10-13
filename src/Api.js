import axios from 'axios';

const Api = {
    getIp: async function () {
        let res = await axios.get('https://api.myip.com');
        let { data } = await res;
        return data;
    }
}
export default Api;
