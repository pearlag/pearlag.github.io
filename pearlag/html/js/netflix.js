$(document).ready(function(){


//** section_02 넷플릭스 스토리 슬라이드 영역입니다 ***//
  $('#section_02 .contents_wrap').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  //** section_03 뉴스 슬라이드 영역입니다 ***//

  $('#news_wrap').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
  });



});
