import axios from 'axios'
import qs from 'qs'

const http = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export const login = (username, password) => http
  .post('Login', qs.stringify({ username, password }))
