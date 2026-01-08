const element1 = document.querySelector("div")
console.log(element1)

const element2 = document.querySelector(".myclass")
console.log(element2)

const element3 = document.querySelector("#myid")
console.log(element3)

const divelement = document.querySelectorAll("div")
console.log(divelement)

// divelement.forEach((el) => console.log(el))

const element4 = document.getElementById("root")
console.log(element4)


element4.className = "rootClass"

element1.setAttribute("classe" , "divClass")

const attribut = element1.getAttribute('class')
console.log(attribut)

const elements1 = document.querySelector(".one")
console.log(elements1)

const elements2 = document.querySelector("#two")
console.log(elements2)

const elements3 = document.getElementById("tree")
console.log(elements3)

const elements4 = document.querySelector(".four")
console.log(elements4)
elements1.id = "oneId"
elements2.className = "twoClass"
elements3.setAttribute("classe" , "treeClass")
elements4.setAttribute("id" , "fourId")

element1.style.backgroundColor =  'red'
element1.style.width = '250px'
element1.style.height = '250px'
element1.style.borderRadius = '50%'
element1.style.display = 'flex'
element1.style.justifyContent ='center'
element1.style.alignItems='center'
element1.style.fontSize = '48px'
element1.style.color = 'aliceblue'
