const error = require('../lib/error')
module.exports = {
  replace: function replace(collection, id, element) {
    let idFound = false
    const newCollection = collection.map(function toEle(ele) {
      if (ele.id === id) {
        idFound = true
        return Object.assign({}, ele, element)
      }
      return ele

    })
    if (idFound) {
      return Promise.resolve(newCollection)
    }
    return Promise.reject(error.noIdFound())

  },
  findByAttr: (collection, attr, value) => {
    const newColl = collection.find(function toEle(ele) {
      return ele[attr] === value
    })
    if (newColl !== undefined) {
      return Promise.resolve(newColl)
    }
    return Promise.reject(error.noIdAttr())
  },
  getDate: () => {
    const date = new Date()
    // return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    return date
  },
  hashCode: (str) => {
    let hash = 0
    if (str.length === 0) return hash
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32bit integer
    }
    return hash
  },
  pick: (obj, attrList) => {
    const res = {}
    attrList.forEach((attr) => {
      if (obj.hasOwnProperty(attr)) {
        res[attr] = obj[attr]
      }
    })
    return res
  }
}
