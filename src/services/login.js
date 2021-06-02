import axios from 'axios'
import { API_URI } from 'config/server' 

export const LoginService = ({ credentials }) => {
  return axios.post(`${API_URI}/login`, credentials)
    .then(user => user.data)
}
