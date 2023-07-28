// 封装所有和用户相关的接口函数
import request from '@/utils/http'

// 登录 /use/login
export const myLoginAPI = ({ account, password }) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}