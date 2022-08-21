

export const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    mousewheel: true,
    grabCursor: true,
    spaceBetween: 100,

    autoplay: {
      delay: 10000,
      disableOnInteraction: true,
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
});