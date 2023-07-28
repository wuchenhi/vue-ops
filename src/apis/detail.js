import request from '@/utils/http'

// use
export const getDetail = (id) => {
  return request({
    url: '/goods/detail',
    params: {
      id
    }
  })
}

export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}