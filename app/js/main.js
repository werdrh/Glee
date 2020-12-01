$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true

  });

  var mixer1 = mixitup('.products__items', {
    selectors: {
      control: '.products__nav-btn'
    }
  });
  var mix2 = mixitup('.design__inner', {
    selectors: {
      control: '.design__nav-btn'
    }
  });
  
});

