import axios from "axios";

const apiCall = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

// response modification
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// response modification
apiCall.interceptors.response.use(
  (next) => {
    return Promise.resolve(next);
  },
  (error) => {
    // You can handle error here and trigger warning message without get in the code inside
    store.dispatch({
      type: env.actionsTypes.openModal,
      message: error.message,
    });
    return Promise.reject(error);
  }
);

// api modal for call api
const apiModal = async ({ type, url, data }) => {
  try {
    const response = await apiCall({ method: type, url: url, data: data });

    return { status: 1, message: response.data };
  } catch (error) {
    // Error 😨
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }
    throw { status: 0, message: "Something went wrong!" };
  }
}

export default apiModal;
