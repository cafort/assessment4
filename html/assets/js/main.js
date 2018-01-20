$(document).ready(function(){
  $('.rotator').slick({
      arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><</i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'>></i></button>",
            adaptiveHeight: true,
            appendArrows: $('.slick-nav')
  });
});