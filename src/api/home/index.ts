import axios from '../request' // axios 实例引入（第五节封装的）

// axios.defaults.baseURL = 'http://127.0.0.1:2300'

const home = {
  // 主页推荐图书
  getRecommendBook: (data: any) =>
    axios({
      url: `/api/books/recommend`,
      method: 'get',
      data
    })
}

export default home
