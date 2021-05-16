import { getValueType } from './index'

export const isObject = (obj: any) => getValueType(obj) === 'Object'