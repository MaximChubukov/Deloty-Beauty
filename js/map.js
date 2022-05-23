const mapBtn = document.querySelector('.mapBtn')
const map = document.querySelector('.map')
const modalClose = document.querySelector('.modal-close')



mapBtn.addEventListener('click', () => {
    map.classList.add('map-active')
})
modalClose.addEventListener('click', () => {
    map.classList.remove('map-active')
})
