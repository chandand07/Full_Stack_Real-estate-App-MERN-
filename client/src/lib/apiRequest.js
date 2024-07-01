import axios from "axios";

const apirequest = axios.create({
    baseURL: "https://project-backend-jade.vercel.app",
    withCredentials: true,
});

export default apirequest;
