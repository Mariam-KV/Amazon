import axios from "axios";
let instance = axios.create({
  baseURL: "http://127.0.0.1:5001/fir-214b5/us-central1/api", //api (cloud function) url
});

export default instance;
