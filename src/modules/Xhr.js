import axios from 'axios'
import Auth from './Auth'

const token = Auth.getToken()

export default axios.create({
  baseURL: 'http://localhost:3005',
  responseType: 'json',
  headers: {
    'Authorization': [token]
  }
})
