import Vue from 'vue'
import axios from 'axios'
import Router from '@/router'

console.log("环境变量");
console.log(process.env.VUE_APP_URL);

axios.defaults.timeout = 10000; //超时时间
axios.defaults.baseURL = process.env.VUE_APP_URL; //API 接口


//HTTP Request 拦截器
axios.interceptors.request.use(function(config) {

	config.data = JSON.stringify(config.data);
	config.headers = {
		'content-Type': 'application/json;charset=UTF-8'
	}

	let token = sessionStorage.getItem('token');
	if (!token) token = "";

	//config.headers.Authorization = token;
	config.headers.TOKEN = token;

	if (config.method === 'post') {}
	return config;

}, function(error) {
	console.error('错误的传参');
	return Promise.reject(error);
});


// HTTP Response 拦截器
axios.interceptors.response.use(function(res) {

	let errCode = parseInt(res.data.errorCode);

	switch (errCode) {
		case '1400':
			return Promise.reject(res);
			break;
		case '1401':
			return Promise.reject(res);
			break;
		case '1402':
			return Promise.reject(res);
			break;
		case '1403':
			return Promise.reject(res);
			break;
		default:
			return res;
	}

}, function(error) {
	console.error('网络异常');
	return Promise.reject(error);
});


export default axios;
