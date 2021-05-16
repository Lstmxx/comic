import Axios, { AxiosRequestConfig, AxiosInstance, AxiosInterceptorManager, AxiosResponse } from 'axios'
import { Content_Type } from './contentType'
import { responseToJson } from './transformer'
import { merge } from '@utils/index'

type InterceptorObj<T> = {
  success: (params: T) => (T | Promise<T>)
  error: ((error: any) => any) | undefined
}

type ReqParams = AxiosRequestConfig & {
  responseInterceptors?: InterceptorObj<AxiosResponse<any>>[]
  requestInterceptors?: InterceptorObj<AxiosRequestConfig>[]
}

class Request {
  private readonly options: ReqParams
  private instance: AxiosInstance
  constructor(options: ReqParams) {
    this.options = options
    this.instance = Axios.create(this.options)
    this.initInterceptor()
  }

  private initInterceptor() {
    const { responseInterceptors = [], requestInterceptors = [] } = this.options
    if (responseInterceptors.length > 0) {
      responseInterceptors.forEach((interceptor) => {
        const { success, error} = interceptor
        this.instance.interceptors.response.use(success, error)
      })
    }
    if (requestInterceptors.length > 0) {
      requestInterceptors.forEach((interceptor) => {
        const { success, error } = interceptor
        this.instance.interceptors.request.use(success, error)
      })
    }
  }
  
  request<T = any>(config: AxiosRequestConfig): Promise<ResponseType<T>> {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then((result) => {
        if (result.status === 200) {
          const data = result.data || {}
          if (data.code === 200) {
            resolve(data)
          }
        } else {
          reject({ msg: '网络问题' })
        }
      }).catch((err) => {
        reject({ msg: err })
      })
    })
  }
}



function createAxios(config: ReqParams) {
  const baseConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': Content_Type.JSON
    },
    transformResponse: [responseToJson],
  }
  const req = new Request(merge(baseConfig, config))
  return req
}

export const defHttp = createAxios({ baseURL: 'http://127.0.0.1' })