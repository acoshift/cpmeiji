import axios from 'axios'
import qs from 'qs'
import { Observable } from 'rxjs'
import _ from 'lodash/fp'

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

const mapShop = (x) => ({
  id: x.ShopId,
  name: x.ShopName,
  phone: x.ShopPhone,
  code: x.ShopCode,
  address: x.ShopAddress,
  isActive: x.IsActive,
  description: x.Description,
  createdAt: x.CreateDate,
  createdBy: x.CreateBy,
  updatedBy: x.UpdateBy,
  updatedAt: x.UpdateDate,
  parentPrice: x.UseParentPrice,
  parentTemplate: x.UseParentTemplate,
  order: {
    dateId: x.OrderDateId,
    dateName: x.OrderDateName,
    time: x.OrderTime
  },
  send: {
    dateId: x.SendDateId,
    dateName: x.SendDateName
  }
})

export const listProducts = () => get('Product/GetProducts')

export const listShops = () => get('Product/GetShops')
  .map((res) => res.Shop)
  .map(_.map(mapShop))

export const getShop = (shopId) => get('Product/GetShopDetail', { params: { ShopId: shopId } })

export const listProductsFromBlock = (blockId) => get('Product/GetBlock', { params: { BlockId: blockId } })
