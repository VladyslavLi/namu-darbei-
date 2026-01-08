// trim()
const code = document.getElementById('code')
const  names = document.getElementById('name')
const   quan = document.getElementById('quan')
const insert = document.getElementById('insert')
const edit = document.getElementById('edit')


insert.addEventListener('click' , () => {
    let c = code.value
    let n =  names.value
    let q = quan.value
    const int  = {
        Product_Code1: c  , 
        Product_Name1: n ,
        Product_Quantity1: q , 
    }
    const s = JSON.stringify(int)
    localStorage.setItem('Product' , s)
})


edit.addEventListener('click' , () => {
    let c = code.value
    let a =  localStorage.getItem('Product_Code1') 
    console.log(a)
    if (c === a ){
        console.log(c)
    }
})