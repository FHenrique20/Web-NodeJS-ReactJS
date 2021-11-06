import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefaback.herokuapp.com/tasks'
})
 
export default api;