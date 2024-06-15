$(document).ready(function(){

//** section_01 상품 슬라이드 영역입니다 **//
  $('.goods_img').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  //** section_04 갤러리 슬라이드 영역입니다 **//
  $('.picture_wrap').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  //** section_05 토글 영역입니다 **//
  var num = 0;

$("#section_05 dt").click(function(){
  $(this).next().slideToggle(500).siblings("dd").slideUp();
  $(this).toggleClass("on").siblings("dt").removeClass("on");
});

// section_07 li on 영역입니다

$("#section_06 dt").click(function(){
  $(this).next().slideToggle(500).siblings("dd").slideUp();
  $(this).toggleClass("on").siblings("dt").removeClass("on");
});


$('#section_07 ul li').hover(function(){
$('#section_07 ul li').removeClass("on");
$(this).addClass("on")
});




});
