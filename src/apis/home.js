import httpInstance from '@/utils/http'
import axios from 'axios'

// 获取banner

export function getBannerAPI (params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
// export const findNewAPI = () => {
//   return httpInstance({
//     url: '/home/new'
//   })
// }
export const findNewAPI = () => {
  return axios.create({
    url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/home/new',
    timeout: 5000
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
      url: 'goods'
    })
  }

// export const getHotAPI = () => {
//   return httpInstance({
//     url: '/home/hot'
//   })
// }

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
// export const getGoodsAPI = () => {
//   return httpInstance({
//     url: '/home/goods'
//   })
// }

export const getGoodsAPI = () => {
  return axios.create({
    url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/home/goods',
    timeout: 5000
  })
}