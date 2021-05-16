import { isObject } from './is'

export const getValueType = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1)

/*
  多个obj合并，后面的替换前面的
*/
export const merge = function(...args: any[]) {
  args = args.filter(data => {
    return isObject(data)
  })
  if (args.length === 0) {
    return {}
  }
  if (args.length === 1) {
    return args[0]
  }
  const target = args.shift()
  const len = args.length
  for (let index = 0; index < len; index++) {
    const obj = args[index]
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const val = obj[key]
        if (isObject(val)) {
          target[key] = merge(target[key], val)
        } else {
          target[key] = val
        }
      }
    }
  }
  return target
}


