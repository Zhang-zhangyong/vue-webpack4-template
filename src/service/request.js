import $http from './index';

// post请求

export function postRequest(url, data = {}) {
  return $http.post(url, data);
}

// get请求
export function getRequest(url, data = {}) {
  return $http.get(url, data);
}

//... 
