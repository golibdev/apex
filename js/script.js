const burger = document.getElementById('burger')
const nav = document.querySelector('.main-header__navbar')
const brand = document.querySelector('.main-header__brand img')
const navLinks = document.querySelectorAll('.main-header__navbar-link')
const mainBrandText = document.querySelector('.main-header__brand-text')
const mainHeader = document.querySelector('.main-header')
const modal = document.querySelector('.modal')
const btns = document.querySelectorAll('.btn')
const closeBtn = document.querySelector('.close-btn')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block'
    })
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

burger.style.background = '#00445b'
mainBrandText.style.color = 'black' 
brand.style.filter = 'invert(0)'

const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')

line1.style.background = 'white'
line2.style.background = 'white'
line3.style.background = 'white'


burger.addEventListener('click', () => {
    nav.classList.toggle('show')

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show')
            brand.style.filter = 'invert(0)'
            mainBrandText.style.color = 'black'
            line1.style.background = 'black'
            line2.style.background = 'black'
            line3.style.background = 'black'
            burger.classList.remove('toggle')
        })
    })

    if(line1.style.background === 'white' && line2.style.background === 'white' && line3.style.background === 'white' && mainBrandText.style.color === 'black' && brand.style.filter === 'invert(0)') {
        mainBrandText.style.color = 'white' 
        brand.style.filter = 'invert(1)'
        line1.style.background = 'black'
        line2.style.background = 'black'
        line3.style.background = 'black'
        burger.style.background = 'white'
    } else {
        line1.style.background = 'white'
        line2.style.background = 'white'
        line3.style.background = 'white'
        mainBrandText.style.color = 'black' 
        brand.style.filter = 'invert(0)'
        burger.style.background = '#00445b'
    }

    burger.classList.toggle('toggle')
})

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 50) {
        nav.classList.remove('show')
        line1.style.background = 'white'
        line2.style.background = 'white'
        line3.style.background = 'white'
        burger.style.background = '#00445b'
        brand.style.filter = 'invert(0)'
        mainBrandText.style.color = 'black'
        burger.classList.remove('toggle')
        modal.style.display = 'none'
    }

    if(window.pageYOffset >= 200) {
        mainHeader.classList.add('active')
    } else {
        mainHeader.classList.remove('active')
    }
})
