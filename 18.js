const element2 = document.querySelector(".myclass")
console.log(element2)
const element1 = document.querySelector("div")
console.log(element1)

const element3 = document.querySelector("#myid")
console.log(element3)


element2.addEventListener('click' , ()=>{
    element2.style.color = 'red'
    element2.style.fontSize = "32px"
})
element1.addEventListener('click' , ()=>{
    element3.style.color = 'Green'
    element3.style.fontSize = "64px"
})

const button = document.getElementById('btn')
button.addEventListener('click', ()=>{
    if (element1.style.backgroundColor === 'red'){
        element1.style.backgroundColor = '#FFD700'
    } else{
        element1.style.backgroundColor = 'red'
    }
})




const buton = document.getElementById('b')
const input = document.getElementById('textInput')
buton.addEventListener('click' , ()=>{
    const text = input.value
    console.log(text)

    const newparagrafey = document.createElement('p')
    newparagrafey.textContent = text
    element3.appendChild(newparagrafey)

    input.value = ''
})

//////////////////////////////////////////////////


const form = document.getElementById('f')
const buton2 = document.getElementById('bu')
const input2 = document.getElementById('i')

form.addEventListener('submit' , (event) =>{
    event.preventDefault()  
    const text2 = input2.value
    console.log(text2)
    const newparagrafey = document.createElement('p')
    newparagrafey.textContent = text2
    element3.appendChild(newparagrafey)

    input.value = ''
})
