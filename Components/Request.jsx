const Axios = require("axios").default;
require("dotenv").config()

export const GET_REQUEST = async (url) => {
    let res = await Axios.get(url);
    return res;
}

export const POST_REQUEST = async (url, payload) => {
    let res = await Axios.post(url, payload);
    return res;
}