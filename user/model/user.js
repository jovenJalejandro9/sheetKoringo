'use strict';


const user1 = {
  id : 1,
  name: "Jalejandro", 
  firstSurname : "Moreno"
},
user2 = {
  id : 2,
  name: "Sonia", 
  firstSurname : "Lolo"
}
const collection = [user1,user2]

module.exports = {
  create: (body) => {
    collection.push(body)
    return Promise.resolve(body)
  },
  getAll: () => {
    if(!collection){
      return Promise.reject("There is nothing to save the data")
    }else {
      return Promise.resolve(collection)
    }
  },  
  get: (id) => {

    for(var i = 0; i < collection.length ; i++){
      if (collection[i].id == id){
        return Promise.resolve(collection[i])
      }
    }
    return Promise.reject({mesage:"There is not user with this Id"})
  },
  updateById: (id, body) => {
    for(var i = 0; i < collection.length ; i++){
      if (collection[i].id == id){
        collection.splice(i, 1);
        collection.push(body)
        return Promise.resolve(body)
      }
    }
    return Promise.reject({mesage:"There is not user with this Id"})
  },
  removeById: (id) => {
    for(var i = 0; i < collection.length ; i++){
      if (collection[i].id == id){
        collection.splice(i, 1);
        return Promise.resolve({mesage:"User removed correctly"})
      }
    }return Promise.reject({mesage:"There is not user with this Id"})
  }
}

//Hacer el patch aqui de manera no segoviana 


