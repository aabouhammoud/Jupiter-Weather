//require("dotenv").config();
const Axios = require("axios").default;
let REQUEST = {
    GET : async (url, config) => {
        let res = await Axios.get(url, config);
        return res;
    },
    POST : async (url, payload, config) => {
        let res = await Axios.post(url, payload, config);
        return res;
    }
}
export default REQUEST;