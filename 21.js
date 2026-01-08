const heard = document.getElementById('heard') 
heard.style.position = 'relative'
heard.style.top = '25px'
heard.style.left = '730px'
heard.style.zIndex = '1px'


heard.addEventListener('click', () => {
    if (heard.style.color === 'black') {
        heard.style.color = 'red';
        c = 'red'
    } else {
        heard.style.color = 'black';
        c = 'black'
    }
    localStorage.setItem('color' ,c  )
});

let col = localStorage.getItem('color')

heard.style.color = col 
const hate = document.getElementById('hate')
hate.addEventListener('click' , () => {
    localStorage.removeItem('color')
})

