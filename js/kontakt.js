const kontBtn = document.querySelector('.kont-item')
const kontMenu = document.querySelector('.header-kontakt')
const close = document.querySelector('.head-close')
const headerMenu = document.querySelector('.header-wrapper')


kontBtn.addEventListener('click', () => {
    kontMenu.classList.add('hk-active') // kontMenu.removeAttribute('hidden')
    headerMenu.style.width = '63%';
})
close.addEventListener('click', () => {
    kontMenu.classList.remove('hk-active') // kontMenu.setAttribute('hidden')
    headerMenu.style.width = '100%';
});






