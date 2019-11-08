
import { postRequest } from '../request.js';

const LoginApi = {

  // 登录
  toLogin(params) {
    return postRequest('/login', params);
  },

  //注册
  register(params) {
    return postRequest('/register', params);
  }
};

export default LoginApi;