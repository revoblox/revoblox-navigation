import { flatten } from 'lodash' 

const extractLabelValues = (o) => {
  return Object.keys(o).map((key) => {
    const value = o[key]
    if(typeof value === 'object') {
        return { label: key, children: extractLabelValues(value) }
    } else if (typeof value === 'string') {
        return { label: key, value }
    }
    console.log('what? this should not happen, we need an array/object of objects or strings')
  })
}

export {
  extractLabelValues
}