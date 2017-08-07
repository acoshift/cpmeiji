import axios from 'axios'
import qs from 'qs'
import { Observable } from 'rxjs'

const http = axios.create({
  baseURL: process.env.API_URL
})

let token = window.localStorage.getItem('token') || ''
const response = (res) => res.data.Data

export const get = (path, config) => Observable
  .fromPromise(http.get(path, { ...config, headers: { Authorization: 'Bearer ' + token } }))
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
    'login',
    qs.stringify({
      username, password
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
  .switchMap((res) => {
    if (!res.Success) {
      return Observable.throw(res.Message)
    }
    return Observable.of(res)
  })
  .do((res) => {
    token = res.Token.Token
    window.localStorage.setItem('token', token)
  })

export const isLogin = () => Observable.of(!!token)

export const logout = () => {
  token = ''
  window.localStorage.removeItem('token')
  return Observable.of({})
}

export const listProducts = () => get('Product/GetProducts')

export const listShops = () => get('Product/GetShops')

export const getShop = (shopId) => get('Product/GetShopDetail', { params: { ShopId: shopId } })

export const listProductsFromBlock = (blockId) => get('Product/GetBlock', { params: { BlockId: blockId } })
