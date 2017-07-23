import axios from 'axios';
const defualtConfig = {
	baseURL: 'http://localhost:3030',
};
export const api = axios.create(defualtConfig);