const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerColumn: 2,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        320: {
            spaceBetween: 20,

        },

        1025: {
            pagination: false,
        },

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