import axios from '../request' // axios 实例引入（第五节封装的）

// axios.defaults.baseURL = 'http://127.0.0.1:2300'

const ukey = {
  // 读取用户名
  getUserName: (data: any) =>
    axios({
      url: `/api/GetUserName`,
      method: 'get',
      data
    }),

  // 写入用户名
  writeUserName: (data: any) =>
    axios({
      url: `/api/WriteUserName`,
      method: 'get',
      data
    }),

  // 读取序列号
  getSerialNumber: (data: any) =>
    axios({
      url: `/api/GetSerialNumber`,
      method: 'get',
      data
    }),

  // 导出ECC公钥
  ExportECCPublicKey: (data: any) =>
    axios({
      url: `/api/GetECCSignData`,
      method: 'get',
      data
    }),

  // ECC私钥签名
  getECCSignData: (data: any) =>
    axios({
      url: `/api/GetECCSignData`,
      method: 'get',
      data
    })
}

export default ukey
