import request from '@/utils/http'

// 获取详情接口
export const getCheckInfoAPI = (id) => {
  return request({
    url: `order/confirm/pre/${id}`
  })
}

// 创建订单
export const createOrderAPI = (data) => {
  return request({
    url: 'order/confirm',
    method: 'POST',
    data
  })
}