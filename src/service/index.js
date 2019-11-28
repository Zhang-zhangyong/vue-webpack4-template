
import axios from 'axios';
import qs from 'qs';
import { Toast } from 'vant';
/**
 *  获取token
 * @returns token
 */
function getToken() {
  let token = sessionStorage.getItem('token') || '';
  return token;
}

// eslint-disable-next-line no-undef
const baseURL = process.env.BASE_URL;
const $http = axios.create({
  baseURL: baseURL,
  // timeout: 10000
});

// 拦截请求
$http.interceptors.request.use(
  config => {
    // console.log(config, 'config');
    let token = getToken();
    if(token) {
      config.data['token'] = getToken();
      // config.headers['content-type'] = 'application/json;charset=utf-8';
      // config.headers['content-type'] = 'application/x-www-form-urlencoded';
    }
    if(config.method === 'post') {
      config.headers['content-type'] = 'application/x-www-form-urlencoded';
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  err => {
    Promise.reject(err);
  }
);

// 请求结果拦截
$http.interceptors.response.use(
  response => {
    // console.log(response, 'response');
    let res = response.data;
    if(res.code === 'OK') {
      return res;
    } else {
      Toast.fail('接口异常，请稍后重试');
      return res;
      // Promise.reject(res.message);
    }
  },
  err => {
    Promise.reject(err);
  }
);


export default $http;