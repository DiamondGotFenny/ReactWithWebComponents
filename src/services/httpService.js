import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;
const instanceAxios = axios.create({ baseURL });

const httpService = {
  get: instanceAxios.get,
  post: instanceAxios.post,
  put: instanceAxios.put,
  delete: instanceAxios.delete,
};

export default httpService;
