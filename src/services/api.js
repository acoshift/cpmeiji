import axios from 'axios'
import qs from 'qs'
import { Observable } from 'rxjs'

const http = axios.create({
  baseURL: process.env.API_URL
})

let token = ''

const response = (res) => res.data.Data

export const get = (path, config) => Observable
  .fromPromise(http.get(path, { ...config, params: { Token: token } }))
  .map(response)

export const rawPost = (path, data, config) => Observable
  .fromPromise(http.post(path, data, config))
  .map(response)

export const post = (path, data, config) =>
  rawPost(
    path,
    data,
    {
      ...config,
      params: {
        Token: token
      }
    }
  )

export const login = (username, password) =>
  rawPost(
    'Login',
    qs.stringify({
      username, password
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
  .do((res) => {
    console.log(res)
    token = res.Token.Token
  })
