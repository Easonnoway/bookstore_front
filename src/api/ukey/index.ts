import axios from '../request' // 引入封装好的 axios 实例

const customBaseURL = 'http://127.0.0.1:2300' // 自定义的 baseURL

const ukey = {
  // 检查U盾状态
  checkUsbKeyStatus: (data: any) =>
    axios({
      url: `/api/VerifyUserPIN`,
      method: 'get',
      baseURL: customBaseURL, // 设置自定义 baseURL
      data
    }),

  // 读取用户名
  getUserName: (data: any) =>
    axios({
      url: `/api/GetUserName`,
      method: 'get',
      baseURL: customBaseURL, // 设置自定义 baseURL
      data
    }),

  // 写入用户名
  writeUserName: (data: any) =>
    axios({
      url: `/api/WriteUserName`,
      method: 'get',
      baseURL: customBaseURL, // 设置自定义 baseURL
      data
    }),

  // 读取序列号
  getSerialNumber: (data: any) =>
    axios({
      url: `/api/GetSerialNumber`,
      method: 'get',
      baseURL: customBaseURL, // 设置自定义 baseURL
      data
    }),

  // 导出ECC公钥
  ExportECCPublicKey: (data: any) =>
    axios({
      url: `/api/GetECCSignData`,
      method: 'get',
      baseURL: customBaseURL, // 设置自定义 baseURL
      data
    }),

  // ECC私钥签名
  getECCSignData: (data: any) =>
    axios({
      url: `/api/GetECCSignData`,
      method: 'get',
      baseURL: customBaseURL, // 设置自定义 baseURL
      data
    })
}

export default ukey