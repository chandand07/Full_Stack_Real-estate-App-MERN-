import axios from "axios";

const apirequest = axios.create({
    baseURL: "https://backend-woad-theta.vercel.app",
    withCredentials: true,
});

export default apirequest;
