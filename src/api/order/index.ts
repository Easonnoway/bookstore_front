import axios from '../request' // axios 实例引入（第五节封装的）

const order = {
  // 新增订单
  getRecommendBook: (data: any) =>
    axios({
      url: `/order`,
      method: 'POST',
      data
    }),

}

export default order
