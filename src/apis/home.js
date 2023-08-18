import httpInstance from '@/utils/http'
import axios from 'axios'


/**
 * @description: 获取货物列表
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url: 'goods'
  })
}


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

export const findNewAPI = () => {
  return axios.create({
    url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/home/new',
    timeout: 5000
  })
}

export const getGoodsAPI = () => {
  return axios.create({
    url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/home/goods',
    timeout: 5000
  })
}