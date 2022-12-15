// Slider for one BG images gallery
$('.fade').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  autoplay: true,
  arrows: true,
  adaptiveHeight: true,
});

// Slider for two images gallery
$('.fade2').slick({
  adaptiveHeight: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  cssEase: 'linear',
  autoplay: true,
  adaptiveHeight: true,
  waitForAnimate: false,
  variableWidth: true,
});

// Slider for two images gallery
$('.fade2r').slick({
  adaptiveHeight: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  cssEase: 'linear',
  autoplay: false,
  adaptiveHeight: true,
  waitForAnimate: false,
  variableWidth: true,
});
