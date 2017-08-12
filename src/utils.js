import { flatten, isEmpty } from 'lodash' 

const arrToArrObj = (arr) => {
  let obj = []
  for (var a in arr) {
    obj.push({ label: arr[a]} )
  }
  return obj
}

const extractLabelValues = (o) => {
  return Object.keys(o).map((key) => {
    const value = o[key]
    if(typeof value === 'object') {
      if (value.length === 0 || isEmpty(value)) {
        return { label: key }
      } else if (value.length > 0) {
        return { label: key, children: arrToArrObj(value) }
      } else {
        return { label: key, children: extractLabelValues(value) }
      }
    } else if (typeof value === 'string') {
      return { label: key }
    }
    console.log('what? this should not happen, we need an array/object of objects or strings')
  })
}

export {
  arrToArrObj,
  extractLabelValues
}