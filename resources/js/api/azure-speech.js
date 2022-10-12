import axios from 'axios'
// import request from '@core/utils/request'

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.withCredentials = true;

const apiUrl = `${location.origin}:27017/api`


export function getToken() {
	return axios.get(`${apiUrl}/get-speech-token`);
}

