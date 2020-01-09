import axios from "axios";

export default axios.create({
    baseURL: "127.0.0.1:8080",
    responseType: "json",
    headers: {"Access-Control-Allow-Origin": "*"}
});
