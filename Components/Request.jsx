//require("dotenv").config();
const Axios = require("axios").default;
let REQUEST = {
    GET_REQUEST : async (url, config) => {
        let res = await Axios.get(url, config);
        return res;
    },
    POST_REQUEST : async (url, payload, config) => {
        let res = await Axios.post(url, payload, config);
        return res;
    }
}
export default REQUEST;