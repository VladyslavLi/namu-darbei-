let h = document.querySelector("h1")
h.textContent = 'Hello Woreld'


let div = document.querySelector('div')
let p = document.createElement("p")
p.textContent = 'JS'
div.appendChild(p)


div.className = 'myclass'
div.id = 'myID'
let a = document.createElement("a")
let img = document.createElement("img")
a.textContent = 'Home'
a.href =''
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmRoaiUu8Yxk9SXaTBzhks9eWWz_uo2wQWw&s"
div.append(a,img)

let newdiv = document.getElementById('newdiv')
let p1 = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let p4 = document.createElement("p")

p1.textContent = '1'
p2.textContent = '2'
p3.textContent = '3'
p4.textContent = '4'


p1.style.backgroundColor = 'black'
p1.style.color = 'red'
p2.style.backgroundColor = 'green'
p2.style.color = 'white'
p3.style.backgroundColor = 'black'
p3.style.color = 'red'
p4.style.backgroundColor = 'green'
p4.style.color = 'white'

div.append(p1,p2,p3,p4)


///////////////////////////////////////////////////////////////////



// 1
const input = document.getElementById('textInput')
const buton = document.getElementById('b')
const div2 =document.getElementById('el3')
buton.addEventListener('click' , ()=>{
    const text = input.value
    console.log(text)

    const  pr = document.createElement('p')
    pr.textContent = text
    div2.appendChild(pr)
    input.value = ''
})

// 2
const create = document.getElementById('create')
const delite = document.getElementById('delete')

create.addEventListener('click' , ()=>{
    const d = document.createElement('p')
    d.textContent = "create"
    d.id = 'elementD'
    div2.appendChild(d)
})
delite.addEventListener('click' , ()=>{
    const  elementD = document.getElementById('elementD')
    elementD.remove()
})
create.style.color = 'green'
delite.style.color = 'red'

// 3
const div3 =document.getElementById('el4')
const clicer = document.getElementById('clicer')
const clic = document.createElement('p')
let q = 0

clicer.addEventListener('click' , ()=>{
    q ++
    clic.textContent = q
    div3.appendChild(clic)
})
div3.style.display = 'flex'
clic.style.margin = '10px'