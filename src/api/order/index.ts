import axios from '../request' // axios 实例引入（第五节封装的）

const order = {
  // 新增订单
  getRecommendBook: (data: any) =>
    axios({
      url: `/order`,
      method: 'POST',
      data
    }),

  // 顾客申请退款
  refund: (data: any, order_id: string) =>
    axios({
      url: `/orders/${order_id}/refund`,
      method: 'POST',
      data
    }),

  // 查询订单
  getOrder: (order_id: string) =>
    axios({
      url: `/orders/${order_id}`,
      method: 'GET'
    })
}

export default order
