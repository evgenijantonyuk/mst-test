const openBtn = document.querySelector('#burger')
const navMobile = document.querySelector('.nav-mobile')
const burgerBtn = document.querySelector('.header__burger-btn')

openBtn.addEventListener('click', () => {
    navMobile.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    console.log('clicked')
})
