const util = require('../lib/utils')
const error = require('../lib/error')
const attrsSheet = ['name', 'first_surname', 'second_surname', 'birthday', 'id_number', 'zone', 'address', 'family_photos', 'house_photos', 'inCharge',
  'family_information', 'center', 'therapies', 'social_situation', 'medical_information', 'family_information', 'home_info', 'economic_information',
  'general_information', 'manifested_information', 'detected_information', 'warning_information', 'complete']

let collection = []
let idSheet = collection.length

module.exports = {
  create: (initialBody) => {
    const body = util.pick(initialBody, attrsSheet)
    if (body.hasOwnProperty('name') && body.hasOwnProperty('first_surname')
      && body.hasOwnProperty('address') && body.hasOwnProperty('zone')) {
      const sheet = Object.assign({}, body)
      // Creating the new sheet
      idSheet ++
      sheet.id = idSheet
      sheet.timestamp = util.getDate()
      collection.push(sheet)
      return Promise.resolve(collection)
    }
    return Promise.reject(error.noInfoCreateSheet())
  },
  getAll: () => {
    if (collection.length <= 0) {
      return Promise.reject(error.noSheets())
    }
    return Promise.resolve(collection)
  },
  get: (id) => {
    const sheet = collection.find(function condition(ele) {
      return ele.id === id
    })
    if (sheet) {
      return Promise.resolve(sheet)
    }
    return Promise.reject(error.noSheetId())
  },
  updateById: (id, body) => {
    const auxCollection = util.replace(collection, parseInt(id, 10), body)
    auxCollection.then((newcollection) => collection = newcollection)
    .catch((err) => console.log(err))
    return auxCollection
  },
  removeById: (id) => {
    let idFound = false
    collection = collection.filter(function condition(ele) {
      if (ele.id === id) {
        idFound = true
      }
      return ele.id !== id
    })
    if (idFound) {
      return Promise.resolve(collection)
    }
    return Promise.reject(error.noSheetId())
  },
  findByAttr: (attr, value) => {
    return util.findByAttr(collection, attr, value)
  },
  emptySheets: () => {
    collection = []
  },
  addSheet: (body) =>{
    collection.push(body)
  },
  getSheets: () => {
    return collection
  }
}

