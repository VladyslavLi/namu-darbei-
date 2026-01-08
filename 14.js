

let dogNAme = 'Pluto'

localStorage.setItem('dog' , dogNAme)
let dataFromlocalStoreg = localStorage.getItem('dog')
console.log(dataFromlocalStoreg)

const object = {
    cat1: 'Garfield',
    cat2: 'Tom',
    cat3: 'Blackie',
}

const s = JSON.stringify(object)
localStorage.setItem("catObject" , s)

const obejectFromLOcalStoreg = localStorage.getItem('catObject')
const parsedData = JSON.parse(obejectFromLOcalStoreg)
console.log(parsedData)

// localStorage.removeItem('dog')
// localStorage.clear()

delete parsedData.cat3
console.log(parsedData)

localStorage.setItem('catObject' , JSON.stringify(parsedData) )

const getDataFromSAgain = JSON.parse(localStorage.getItem('catObject')) 
getDataFromSAgain.cat2 = "Thomas"

console.log(getDataFromSAgain)
localStorage.setItem('catObject' , JSON.stringify(getDataFromSAgain))

///////////////////////////////////////////////
localStorage.removeItem('users')
const checkingLS = ()=>{
    let infols = localStorage.getItem('users')

    return infols === null ? [] : JSON.parse(infols)
};

const dataLs = checkingLS()
console.log(dataLs)

dataLs.push({id: 2 ,fistname: 'Jons' , lastname: 'Doe'})
console.log(dataLs)


localStorage.setItem('users' , JSON.stringify(dataLs))

const dataFLs = checkingLS()
console.log(dataFLs)

dataFLs.splice(1,2)
console.log(dataFLs)

let getIndex = dataFLs.findIndex(el => el.id ===2 )

localStorage.setItem('users' , JSON.stringify(dataFLs))
