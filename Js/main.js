// processsection
$('.acc-item').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('acc-item-act-bg')
  $(this).children('.acc-plus').toggleClass('acc-active')
  $(this).children('.acc-minus').toggleClass('acc-active')
  $(this).children('.acc-item-hid').slideToggle()
})
// team section
$('.team__slider').slick({
  arrows: false,
  slidesToShow: 4,
  infinite: true,
  draggable: false,
  dots: false,
  waitForAnimate: false,
  responsive:
    [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          // draggable: true,
        },
      },
    ]
})
$('.left').on('click', function (e) {
  e.preventDefault()
  $('.team__slider').slick('slickPrev')
})
$('.right').on('click', function (e) {
  e.preventDefault()
  $('.team__slider').slick('slickNext')
})
// test section
$('.test__sliders').slick({
  arrows: false,
  slidesToShow: 2,
  infinite: true,
  draggable: false,
  dots: true,
  appendDots: $('.test-dots-box'),
  waitForAnimate: false,
  responsive:
    [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
})
$('.left2').on('click', function (e) {
  e.preventDefault()
  $('.test__sliders').slick('slickPrev')
})
$('.right2').on('click', function (e) {
  e.preventDefault()
  $('.test__sliders').slick('slickNext')
})
// burger-menu
$('.burger-wrapper').on('click', function () {
  $('.burger-menu').toggleClass('hidden')
  $('.burger-wrapper').toggleClass('burger-active')
})
// callback
$('.callback-1').on('click', function () {
  $('.callback').toggleClass('hidden')
  $('.blured').toggleClass('blur')
})
// lazy-load
// function lazyLoadOnScroll(className, procent) {
//   const contentBlocks = document.querySelectorAll(`.${className}`);
//   contentBlocks.forEach(block => {
//     if (block.getBoundingClientRect().top < window.innerHeight * procent) {
//       block.classList.add('lazy-load');
//     } else {
//       block.classList.remove('lazy-load');
//     }
//   });
// }
function lazyLoadOnScroll(className, procent) {
  const contentBlocks = document.querySelectorAll(`.${className}`);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    contentBlocks.forEach((block) => {
      block.classList.add('lazy-load');
    });
  } else {
    contentBlocks.forEach(block => {
          if (block.getBoundingClientRect().top < window.innerHeight * procent) {
            block.classList.add('lazy-load');
          } else {
            block.classList.remove('lazy-load');
          }
        });
  }
}
window.addEventListener('scroll', () => {
  lazyLoadOnScroll('aim', 0.7);
  // lazyLoadOnScroll('lazy-load-btm', 0.8);
  // lazyLoadOnScroll('lazy-load-right', 0.7);
  // lazyLoadOnScroll('lazy-load-z', 0.7);
});
