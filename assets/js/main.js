const capSlider = document.querySelector('.cap__slider')

if (capSlider) capSliderInit ()

function capSliderInit () {
    let swiper

    window.addEventListener('resize', checkSlider)
    checkSlider()

    function checkSlider () {
        if (window.innerWidth < 1280) {
            swiper?.destroy()
            initSlider()
        }  else {
            swiper?.destroy()
        }
    }

    function initSlider () {
        swiper = new Swiper(capSlider, {
            slidesPerView: 'auto',
            autoHeight: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.cap__nav-btn_right',
                prevEl: '.cap__nav-btn_left',
            },
        })
    }
}

// ***

const header = document.querySelector('.header')

if (header) headerInit()

function headerInit () {
    const burger = header.querySelector('.header__burger')
    const headerLayer = header.querySelector('.header__layer')
    const close = header.querySelector('.header__top-close')

    burger.addEventListener('click', openHeaderMobile)
    headerLayer.addEventListener('click', closeHeaderMobile)
    close.addEventListener('click', closeHeaderMobile)

    function openHeaderMobile () {
        header.classList.add('open')
    }

    function closeHeaderMobile () {
        header.classList.remove('open')
    }
}

// ***

const modal = document.querySelector('.modal')
const modalOpenBtn = document.querySelector('.cap__button')

if (modal) modalInit()

function modalInit () {
    const layer = document.querySelector('.modal__layer')
    layer.addEventListener('click', closeModal)

    const closeBtn = document.querySelector('.modal__close')
    closeBtn.addEventListener('click', closeModal)

    modalOpenBtn.addEventListener('click', openModal)

    function openModal () {
        modal.classList.add('active')
    }

    function closeModal () {
        modal.classList.remove('active')
    }
}

// ***

function setViewportProperty() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', setViewportProperty)

setViewportProperty()