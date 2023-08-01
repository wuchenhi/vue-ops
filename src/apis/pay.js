import request from '@/utils/http'


// 获取pay数据
export const getOrderAPI = (id) => {
  return request({
    url: `order/${id}`
  })
}