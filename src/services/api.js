import axios from 'axios'
import qs from 'qs'
import { Observable } from 'rxjs'
import _ from 'lodash/fp'

const http = axios.create({
  baseURL: process.env.API_URL
})

let token = window.localStorage.getItem('token') || ''
const response = (res) => res.data.Data

let router

export const setRouter = (r) => {
  router = r
}

const catchUnauthorize = (err) => {
  console.dir(err)
  if (err.response.status === 401) {
    token = ''
    window.localStorage.removeItem('token')
    router.push('/')
  }
  return Observable.throw(err)
}

export const get = (path, config) => Observable
  .fromPromise(http.get(path, { ...config, headers: { Authorization: 'Bearer ' + token } }))
  .map(response)
  .catch(catchUnauthorize)

export const rawPost = (path, data, config) => Observable
  .fromPromise(http.post(path, data, config))
  .map(response)

export const post = (path, data, config) =>
  rawPost(
    path,
    data,
    {
      ...config,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  )
  .catch(catchUnauthorize)

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

const mapItem = (x) => ({
  block: {
    id: x.BlockId,
    name: x.BlockName
  },
  price: x.Price,
  product: {
    id: x.ProductId,
    code: x.ProductCode,
    name: x.ProductName
  },
  shop: {
    id: x.ShopId
  },
  unit: x.Unit
})

const mapProduct = (x) => ({
  brand: x.Brand,
  createBy: x.CreateBy,
  createDate: x.CreateDate,
  description: x.Description,
  isActive: x.IsActive,
  isDelete: x.IsDelete,
  isPromotion: x.IsPromotion,
  isVat: x.IsVat,
  price: x.Price,
  productCode: x.ProductCode,
  productId: x.ProductId,
  productName: x.ProductName,
  saleEndDate: x.SaleEndDate,
  saleStartDate: x.SaleStartDate,
  size: x.Size,
  unit: x.Unit,
  updateBy: x.UpdateBy,
  updateDate: x.UpdateDate
})

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

const mapShopDetail = (x) => ({
  items: _.map(mapItem)(x.Items),
  periods: _.map(mapPeriod)(x.Period),
  shop: mapShop(x.Shop)
})

const mapPeriod = (x) => ({
  id: x.ShopPeriodId,
  shopId: x.ShopId,
  createdBy: x.CreateBy,
  createdAt: x.CreateDate,
  isActive: x.IsActive,
  isDelete: x.IsDelete,
  updatedBy: x.ModifyBy,
  updatedAt: x.ModifyDate,
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
  .map(mapShopDetail)

export const listProductsFromBlock = (blockId) => get('Product/GetProducts', { params: { BlockId: blockId } })
  .map(_.map(mapProduct))

export const checkout = (data) => post('Order/SaveOrder', data)

