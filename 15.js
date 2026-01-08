// import{data} from "./data.js"

const favorit ={}

// const s = JSON.stringify(favorit)
// localStorage.setItem('favorit' , s)

// const get = JSON.parse(localStorage.getItem(data))
// let tatel = get.find((el)=> el['id'] === 829280)
// console.log(tatel)

// let plus =localStorage.getItem(favorit)

for(const object of tatel){
    if (favorit.includes(object) === false){
        favorit.push(object)
        localStorage.setItem('favorits' ,  JSON.stringify(favorit))
    }
  }
  
function getFillms(movi){
    localStorage.getItem(movi)

}

getFillms('favorits')








