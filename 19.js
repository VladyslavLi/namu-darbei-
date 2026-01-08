let p1 = document.createElement('p')
let p2 = document.createElement('p')
p2.className = 'p2'
let p3 = document.createElement('p')
p3.className = 'p3'
let p4 = document.createElement('p')
p4.id = 'p4'
let p5 = document.createElement('p')
p5.id = 'p5'
p1.textContent = 'P1'
p2.textContent = 'P2'
p3.textContent = 'P3'
p4.textContent = 'P4'
p5.textContent = 'P5'
const divP = document.getElementById('divID')
divP.append(p1,p2,p3,p4,p5)




const pp1 = document.querySelector('p')
const pp2 = document.querySelector('.p2')
const pp3 = document.querySelector('.p3')
const pp4 = document.querySelector('#p4')
const pp5 = document.querySelector('#p5')
pp1.style.color = 'red'
pp2.style.color = 'yellow'
pp3.style.color = 'green'
pp4.style.color = 'blue'
pp5.style.color = 'orange'

let div = document.querySelectorAll('div')
div.forEach((div) =>{
    div.style.width = '200px'
    div.style.height = '200px'
})

// 5
const button = document.getElementById('button')
colormasiv = ['green' , 'red' , 'yellow' , 'blue' ,'orange ' , 'purple ']
button.addEventListener('click' , () =>{
        div.forEach((div) =>{
            div.style.backgroundColor = colormasiv[Math.floor(Math.random() * 6)]
        });
});
// 6

const p = document.querySelectorAll('p')
button.addEventListener('click', () =>{
    p.forEach((p) =>{
        p.textContent = colormasiv[Math.floor(Math.random() * 6)]
    });
})