import axios from '../request' // axios 实例引入（第五节封装的）

const home = {
  // 主页推荐图书
  getRecommendBook: (data: any) =>
    axios({
      url: `/api/books/recommend`,
      method: 'get',
      data
    }),
  
  // 搜索书籍
  getSearchBook: (data: any) =>
    axios({
      url: `/api/books/search`,
      method: 'get',
      data
    })
}

export default home
