const http = uni.$u.http;
const namespace = 'wp-json/jike/api/v1';
// post请求，获取菜单
export const postMenu = (url,params,config = {}) => http.post(namespace+url, params, config)
// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getMenu = (url,data) => http.get(namespace+url, data)


