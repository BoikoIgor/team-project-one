// Slider for one BG images gallery
$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
});
// Slider for two images gallery
$('.fade2').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
});
