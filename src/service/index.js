
import axios from 'axios'

const baseURL = process.env.BASE_URL

console.log(process.env, "env");
const $http = axios.create({
  baseURL: baseURL
})

$http.interceptors.request.use(
  config => {
    console.log(config, 'config');
    return config
  },
  err => {
    Promise.reject(err)
  }
)
$http.interceptors.response.use(
  response => {
    if(response.data.code === 'OK') {
      return response.data.data
    } else {
      return response.data
    }
  },
  err => {
    Promise.reject(err)
  }
)


export default $http