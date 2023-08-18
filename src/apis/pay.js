import request from '@/utils/http'


// 获取pay数据
export const getOrderAPI = (id) => {
  return request({
    url: `order/${id}`
  })
}

// 创建pay
export const createPayAPI = (data) => {
  return request({
    url: `pay/createPay`,
    method: 'POST',
    data
  })
}

// 创建pay
export const finishPayAPI = (data) => {
  return request({
    url: `pay/finishPay`,
    method: 'POST',
    data
  })
}
