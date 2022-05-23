const allBtn = document.querySelector('.all')
const hearBtn = document.querySelector('.hear')
const handBtn = document.querySelector('.hand')
const legBtn = document.querySelector('.leg')
const works = document.querySelectorAll('.arbeit-img')

allBtn.addEventListener('click', () => {
    removeClass ()
    works.forEach(work  => {

        work.classList.toggle('arbeit-img-active')
    })
})

hearBtn.addEventListener('click', () => {
    removeClass ()
    works.forEach(work  => {
       if (work.classList.contains('ar-hear')) {
           work.classList.add('arbeit-img-active')
       }
    })
})

handBtn.addEventListener('click', () => {
    removeClass ()
    works.forEach(work  => {
        if (work.classList.contains('ar-hand')) {
            work.classList.add('arbeit-img-active')
        }
    })
})
legBtn.addEventListener('click', () => {
    removeClass ()
    works.forEach(work  => {
        if (work.classList.contains('ar-leg')) {
            work.classList.toggle('arbeit-img-active')
        }
    })
})


function removeClass () {
    works.forEach(work  => {
        work.classList.remove('arbeit-img-active')
    })
}


