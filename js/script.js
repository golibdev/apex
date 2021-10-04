const burger = document.getElementById('burger')
const nav = document.querySelector('.main-header__navbar')
const brand = document.querySelector('.main-header__brand img')
const navLinks = document.querySelectorAll('.main-header__navbar-link')
const mainBrandText = document.querySelector('.main-header__brand-text')


mainBrandText.style.color = 'black' 
brand.style.filter = 'invert(0)'

const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')

line1.style.background = 'black'
line2.style.background = 'black'
line3.style.background = 'black'


burger.addEventListener('click', () => {
    nav.classList.toggle('show')

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show')

            line1.style.background = 'black'
            line2.style.background = 'black'
            line3.style.background = 'black'
            brand.style.filter = 'invert(0)'
            mainBrandText.style.color = 'black'
            burger.classList.remove('toggle')
        })
    })

    if(line1.style.background === 'black' && line1.style.background === 'black' && line2.style.background === 'black' && mainBrandText.style.color === 'black' && brand.style.filter === 'invert(0)') {
        line1.style.background = 'white'
        line2.style.background = 'white'
        line3.style.background = 'white'
        mainBrandText.style.color = 'white' 
        brand.style.filter = 'invert(1)'
    } else {
        line1.style.background = 'black'
        line2.style.background = 'black'
        line3.style.background = 'black'
        mainBrandText.style.color = 'black' 
        brand.style.filter = 'invert(0)'
    }

    burger.classList.toggle('toggle')
})

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 50) {
        nav.classList.remove('show')
        line1.style.background = 'black'
        line2.style.background = 'black'
        line3.style.background = 'black'
        brand.style.filter = 'invert(0)'
        mainBrandText.style.color = 'black'
        burger.classList.remove('toggle')
    }
})