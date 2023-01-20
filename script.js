
const slide = document.querySelector('.slider')
const title = document.querySelector('#title')
const paragrafo = document.querySelector('#paragrafo')
const titleMode = document.querySelector('#textMode')
const a = document.querySelector('#mya')

let logic = true

slide.addEventListener('click', x => {
    if (logic === true) {
        document.body.style.backgroundColor = '#000000'
        title.style.color = '#FFFFFF'
        paragrafo.style.color = '#FFFFFF'
        titleMode.style.color = '#FFFFFF'
        titleMode.innerHTML = 'Black Mode On'
        slide.style.backgroundColor = '#07006c'
        a.style.color = '#FFFFFF'
        logic = false
    } else {
        document.body.style.backgroundColor = '#FFFFFF'
        title.style.color = '#000000'
        paragrafo.style.color = '#000000'
        slide.style.backgroundColor = '#000000'
        titleMode.style.color = '#000000'
        a.style.color = '#000000'
        titleMode.innerHTML = 'Light Mode On'
        logic = true
    }
})
