const eil = document.getElementById('eilutis')
const stu = document.getElementById('stulpelis')
const button = document.getElementById('button')
const divvv = document.getElementById('divvv')
const tr = document.createElement('tr')
const td = document.createElement('td')

const table = document.createElement('table')
table.style.border= '5px , solid  , green'

button.addEventListener('click' , () =>{
    const textE = eil.value
    const textS = stu.value
    console.log(textE)
    console.log(textS)
})

button.addEventListener('click' , () =>{
    tr.textContent =  eil.value
    td.textContent = stu.value
    // console.log(tr , td)
    tr.appendChild(td)
    table.appendChild(tr)

    // table.textContent = 'Hello'
    divvv.appendChild(table)

})