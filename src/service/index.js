
import axios from 'axios';
import qs from 'qs';

console.log(process.env, "env");

/**
 *  获取token
 * @returns token
 */
function getToken() {
  let token = sessionStorage.getItem('token') || '';
  return token;
}

const baseURL = process.env.BASE_URL;
const $http = axios.create({
  baseURL: baseURL,
  timeout: 5000
});

// 拦截请求
$http.interceptors.request.use(
  config => {
    console.log(config, 'config');
    let token = getToken();
    // if(token) {
    //   config.headers['token'] = getToken();
    //   // config.headers['content-type'] = 'application/json;charset=utf-8'; 
    //   config.headers['content-typee'] = 'application/x-www-form-urlencoded';
    // }
    return config;
  },
  err => {
    Promise.reject(err);
  }
);

// 请求结果拦截
$http.interceptors.response.use(
  response => {
    console.log(response);
    let res = response.data;
    if(res.code === '') {

    }
    return res;
    // if(response.data.code === 'OK') {
    //   return response.data.data;
    // } else {
    //   return response.data;
    // }
  },
  err => {
    Promise.reject(err);
  }
);


export default $http;