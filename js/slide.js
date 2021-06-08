const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerColumn: 2,
    direction: 'horizontal',
    setWrapperSize: true,
    autoplay: {
        delay: 7000,
    },
    // preload images
    preloadImages: false,
    lazy: {
        // если true то загрузка начнется во время переключения слайдов
        loadPrevNext: true,
        // подгрузка в преды и в след слайдах
        loadOnTransitionStart: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            spaceBetween: 20,

        },

        1025: {},

    },
});



// const swiper = new Swiper('.swiper-container', {
//     direction: 'vertical',
//     loop: true,

//     pagination: {
//         el: '.swiper-pagination',
//     },

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });