import axios from "axios";
const BASE_URL = "https://api.artic.edu/api/v1";
// const BASE_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let Token = null;
    // let Token = await localStorage.getItem("token");
    config.headers.Authorization = "Bearer " + Token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const APICall = async (
  method = "post",
  endPoint = null || "string",
  body = undefined
) => {
  const config = {
    method: method.toLowerCase(),
  };
  if (endPoint) {
    config.url = endPoint;
  }
  if (body) {
    config.data = body;
  }

  return new Promise((resolve, reject) => {
    axiosInstance(config)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.log("error", error);
        if (error && error.response) {
          resolve(error.response);
        } else {
          reject(error);
        }
      });
  });
};

export default APICall;
