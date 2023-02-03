import axios from "axios";
let instance = axios.create({
  baseURL: "https://us-central1-fir-214b5.cloudfunctions.net/api", //api (cloud function) url
});

export default instance;
