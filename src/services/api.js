import axios from 'axios'

token = localStorage.getItem('token');
const api = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        Authorization: 'Bearer ' + token
    }
});

export default api;

api.post('/api/login').then(function (response) {
    const token = response.data.token
    localStorage.setItem('token', token);
})




