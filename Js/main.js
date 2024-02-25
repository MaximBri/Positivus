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
})