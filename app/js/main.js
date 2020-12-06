$(function () {

  $(".filter-price__input").ionRangeSlider({
    step: 0.01,
    onStart: function (data){      
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    
  });
  

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

