jQuery(function ($) {

  function openBlock(nameClickBl, nameOpenBl) {
      $(nameClickBl).click(function() {
          if($(this).hasClass('open')) {
              $(this).removeClass('open');
              $(nameOpenBl).removeClass('open');
          } else {
              $(this).addClass('open');
              $(nameOpenBl).addClass('open');
          }
          return false;
      });
      $('body').click(function(e) {
        if ($(nameOpenBl).has(e.target).length === 0){
          $(nameOpenBl).removeClass('open');
          $(nameClickBl).removeClass('open');
        }  
      });
  }


  openBlock('.menu-block__btn', '.menu-block__links');
  openBlock('.add-position__btn', '.add-position__block');

  $('.views__link').click(function() {
    $('.views__link').removeClass('active');
    $(this).addClass('active');
  });

  $('.line-item__top').click(function() {
    if($(this).parents('.line-item').hasClass('active')) {
        $(this).parents('.line-item').find('.line-item__bottom').animate({height : 0}, 500, function() {
          $(this).parents('.line-item').removeClass('active');
        });
        $(this).parents('.line-item').find('.line-item__details span').text('Detail');
    } else {
      $(this).parents('.line-item').addClass('active');
      var height1 = $(this).parents('.line-item').find('.line-item__bottom').css('height','auto').outerHeight();
      var answer = $(this).parents('.line-item').find('.line-item__bottom');
      answer.height(1);
      answer.animate({height : height1}, 500);
      $(this).parents('.line-item').find('.line-item__details span').text('Hide');
    }
  });

  $('.grid-item__details').click(function() {
    if($(this).parents('.grid-item').hasClass('active')) {
        $(this).parents('.grid-item').find('.grid-item__bottom').animate({height : 0}, 500, function() {
          $(this).parents('.grid-item').removeClass('active');
        });
        $(this).parents('.grid-item').find('.grid-item__details span').text('Detail');
    } else {
      $(this).parents('.grid-item').addClass('active');
      var height1 = $(this).parents('.grid-item').find('.grid-item__bottom').css('height','auto').outerHeight();
      var answer = $(this).parents('.grid-item').find('.grid-item__bottom');
      answer.height(1);
      answer.animate({height : height1}, 500);
      $(this).parents('.grid-item').find('.grid-item__details span').text('Hide');
    }
  });
   
  

  
});