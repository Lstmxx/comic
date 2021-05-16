import { AxiosTransformer } from 'axios'
import { Content_Type } from './contentType'

export const responseToJson: AxiosTransformer = function(data, headers) {
  if (headers['Content-Type'] === Content_Type.JSON) {
    try {
      data = JSON.parse(data)
    } catch (error) {
      data = data
    }
  }
  return data
}