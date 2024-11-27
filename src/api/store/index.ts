import axios from '../request' // 引入封装好的 axios 实例

const store = {
  // 主页推荐图书
  getRecommendBook: (data: any) =>
    axios({
      url: `/api/books/recommend`,
      method: 'get',
      data
    }),

  // 查询商户基本信息
  getMerchantInfo: (accountNumber: string) =>
    axios({
      url: `/api/merchants/${accountNumber}`,
      method: 'get'
    }),

  // 修改商户基本信息
  updateMerchantInfo: (data: any) =>
    axios({
      url: `/api/merchants`,
      method: 'put',
      data
    }),

  // 新增书店
  addBookstore: (accountNumber: string, data: any) =>
    axios({
      url: `/api/merchants/${accountNumber}`,
      method: 'post',
      data
    }),

  // 查询书店基本信息
  getBookstoreInfo: (id: string) =>
    axios({
      url: `/api/merchant/bookstore/${id}`,
      method: 'get'
    }),

  // 修改书店基本信息
  updateBookstoreInfo: (data: any) =>
    axios({
      url: `/api/merchant/bookstore/info`,
      method: 'put',
      data
    }),

  // 删除书店
  deleteBookstore: (id: string) =>
    axios({
      url: `/api/bookstores/${id}`,
      method: 'delete'
    }),

  // 新增图书
  addBook: (data: any) =>
    axios({
      url: `/api/merchant/books`,
      method: 'post',
      data
    }),

  //根据书店id查询书籍
  getStoreInfo: (bookshopId: string) =>
    axios({
      url: `/api/merchant/bookshop/${bookshopId}`,
      method: 'get'
    }),

  // 根据id查询图书信息
  getBookInfo: (id: string) =>
    axios({
      url: `/api/merchant/books/${id}`,
      method: 'get'
    }),

  // 修改图书信息
  updateBookInfo: (data: any) =>
    axios({
      url: `/api/merchant/books`,
      method: 'put',
      data
    }),

  // 删除图书
  deleteBook: (id: string) =>
    axios({
      url: `/api/merchant/books/${id}`,
      method: 'delete'
    }),

  // 根据订单id查询订单
  getOrderInfo: (accountNumber: string) =>
    axios({
      url: `/api/merchant/orders`,
      method: 'get',
      params: { accountNumber }
    })
}

export default store
