$(document).ready(function(){
  $("#header .login_popup, .login_popup_opacity, .search_popup").hide();
  $("#header_sub .login_popup_sub, .login_popup_opacity_sub, .search_popup_sub").hide();
  $(".ams_profile").hide();
  $(".event_form_popup").hide();
  $(".open_qna_popup").hide();
  $(".review_popup").hide();
  $(".mysize_popup").hide();
  $(".goods_wish_popup").hide();
  $(".goods_cart_popup").hide();
  $(".goods_order_popup").hide();



/**헤더 유틸리티 영역입니다**/
  $("#header #utility .xi-user-o").click(function(){
    $("#header .login_popup, .login_popup_opacity").show();
  });

  $("#header .login_popup .xi-close-thin").click(function(){
    $("#header .login_popup, .login_popup_opacity").hide();
  });

  $("#header #utility .xi-search").click(function(){
    $("#header .search_popup").show();
  });

  $("#header .search_popup .xi-close-thin").click(function(){
    $("#header .search_popup").hide();
  });

/**인덱스 페이지 영역입니다**/
         $(window).scroll(function(){
          var top = $(window).scrollTop();
          var wid = $(window).width();

             var con1=$('.main_con01').offset();
                if (top>con1.top-400) {
                    $('.main_con01').addClass('on');
                }
                else{

             }
             var con2=$('.main_con02').offset();
             if (top>con2.top-400) {
                 $('.main_con02').addClass('on');
             }
             else{
          }
          var con3=$('.main_con03').offset();
          if (top>con3.top-400) {
              $('.main_con03').addClass('on');
          }
          else{
       }
       var con4=$('.main_con04').offset();
       if (top>con4.top-400) {
           $('.main_con04').addClass('on');
       }
       else{
    }

    var con5=$('.main_con05').offset();
    if (top>con5.top-400) {
        $('.main_con05').addClass('on');
    }
    else{
  }
  var con6=$('.main_con06').offset();
  if (top>con6.top-400) {
      $('.main_con06').addClass('on');
  }
  else{
  }


           });


      $('.main_con03 .pro_list ul li').hover(function(){
   $('.main_con03 .pro_list ul li').removeClass("on");
   $(this).addClass("on")
 });

     $('.main_con06 ul li').hover(function(){
    $('.main_con06 ul li').removeClass("on");
    $(this).addClass("on")
    });


    var count = 0;

    $('#section_06 .main_con05 .cerf .main_event > div').eq(count).fadeIn(600);


  setInterval(function(){

  count++;
  count = count%4;
  $("#section_06 .main_con05 .cerf .main_event > div").eq(count).fadeIn(600).siblings().fadeOut(600);

},4000);




/**네비게이션 영역입니다**/
$('.depth1').hover(function(){
  $('.depth2').css('display','block');
  setTimeout(function(){
    $('.depth2').addClass('on');
  },500);
}, function(){
  $('.depth2').css('display','none');
  $('.depth2').removeClass('on');
});

//**CI popup 영역입니다***//
      $("#section #CI_popup .CI_popup_close").click(function(e){
        e.stopPropagation();
        $("#section #CI_popup_modal").hide();
      });


$('.case_slide').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 800,
      });

//**앰버서더 페이지 상세 프로필 팝업 영역**//
      $(".ambassador li").click(function(){
        $("> div", this).show();
      });

      $(".xi-close-thin").click(function(e){
        e.stopPropagation();
        $(".ambassador li > div").hide();
      });

//**이벤트페이지 버튼 영역**//
      $(".event_7_button").click(function(){
        $(".event_form_popup").show();
      });

      $("#event_form_close").click(function(){
        $(".event_form_popup").hide();
      });

//**이벤트페이지 응모완료 버튼 영역**//
      $("#event_submit").click(function(){
        if($("#blog_address").val().length == 0){
          alert("블로그 주소를 입력하세요.");
          $("#blog_address").focus(); return false;
        }else if($("#phone_number").val().length == 0){
          alert("연락처를 입력하세요.");
          $("#phone_number").focus(); return false;
        }else if($("#event_address").val().length == 0){
          alert("주소를 입력하세요.");
          $("#event_address").focus(); return false;
        }else if($("#event_goods").val().length == 0){
          alert("제품명을 입력하세요.");
          $("#event_goods").focus(); return false;
        }else if($("#event_text").val().length == 0){
          alert("신청한마디를 입력하세요.");
          $("#event_text").focus(); return false;
        }else{
          alert("체험단 신청이 완료되었습니다.");
          $(".event_form_popup").hide();
        }
      });

      /**회원가입 버튼 영역입니다 **/
  $(".join_form #submit").click(function(){

  if($("#join_email").val().length == 0){
    alert("이메일을 입력하세요.");
    $("#join_email").focus(); return false;
  }else if($("#join_password").val().length == 0){
    alert("비밀번호를 입력하세요.");
    $("#join_password").focus(); return false;
  }else if($("#join_name").val().length == 0){
    alert("이름을 입력하세요.");
    $("#join_name").focus(); return false;
  }else if($("#join_phonenumber").val().length == 0){
    alert("전화번호를 입력하세요.");
    $("#join_phonenumber").focus(); return false;
  }else if($("#join_text").val().length == 0){
    alert("가입인사를 입력하세요.");
    $("#join_text").focus(); return false;

  }else if(!$("#join_agree_1").is(":checked")){
    alert("이용약관에 동의하셔야 합니다.");
    $('#join_agree_1').focus();
    return; false;

  }else if(!$("#join_agree_2").is(":checked")){
    alert("개인정보 수집·이용 방침에 동의하셔야 합니다.");
    $('#join_agree_2').focus();
    return; false;
  }else{
    alert("회원가입이 완료되었습니다.");
    location.href="/index.html";
  }
  });
/*회원가입 약관 영역입니다*/
      $("#join_terms_txt_1").load("/txt/join_terms-of-use.html");
      $("#join_terms_txt_2").load("/txt/join_personal_info.html");
      $("#join_terms_txt_3").load("/txt/join_marketing_agree.html");



/*베스트리뷰 팝업 영역입니다*/
      $('.best_review li').click(function(){
        $("> .review_popup", this).show();
      });

      $('.review_popup .xi-close-thin').click(function(){
        $(".review_popup").hide();
      });

  /*하단리뷰 팝업 영역입니다*/
        $('.review_wrap li').click(function(){
          $("> .review_popup", this).show();
        });

        $('.review_popup .xi-close-thin').click(function(){
          $(".review_popup").hide();
        });

    /*인덱스 마지막 섹션->리뷰 팝업창 연결*/
/*    $('#section_07 .detail').click(function(){
      location.href='/community/review.html';
      window.open('#re_p');
    });*/


/*관심상품 check박스 영역입니다*/
      $("#wish_thead_first_th_input").click(function(){

      if($("#wish_thead_first_th_input").prop("checked")){
        $(".wish_thead_th_input").prop("checked",true);

      }else{
        $(".wish_thead_th_input").prop("checked",false);
      }

    });

/*관심상품 삭제버튼 영역입니다*/
    $(".wish_list_delete_1").click(function(){
      if(confirm("해당 상품을 관심상품에서 삭제하시겠습니까?")){
        $(".wish_item_1").hide();
        alert("해당 상품이 삭제되었습니다.");
      }
    });
    $(".wish_list_delete_2").click(function(){
      if(confirm("해당 상품을 관심상품에서 삭제하시겠습니까?")){
        $(".wish_item_2").hide();
        alert("해당 상품이 삭제되었습니다.");
      }
    });
    $(".wish_list_delete_3").click(function(){
      if(confirm("해당 상품을 관심상품에서 삭제하시겠습니까?")){
        $(".wish_item_3").hide();
        alert("해당 상품이 삭제되었습니다.");
      }
    });

  /*관심상품 장바구니버튼 영역입니다*/
      $(".wish_list_cart_1").click(function(){
        if(confirm("해당 상품을 장바구니에 추가하시겠습니까?")){
          $(".wish_item_1").hide();
          alert("장바구니에 추가되었습니다.");
        }
      });
      $(".wish_list_cart_2").click(function(){
        if(confirm("해당 상품을 장바구니에 추가하시겠습니까?")){
          $(".wish_item_2").hide();
          alert("장바구니에 추가되었습니다.");
        }
      });
      $(".wish_list_cart_3").click(function(){
        if(confirm("해당 상품을 장바구니에 추가하시겠습니까?")){
          $(".wish_item_3").hide();
          alert("장바구니에 추가되었습니다.");
        }
      });






    /*장바구니 check박스 영역입니다*/
          $("#mypage_cart_section1 #wish_thead_first_th_input").click(function(){

          if($("#mypage_cart_section1 #wish_thead_first_th_input").prop("checked")){
            $("#mypage_cart_section1 .wish_thead_th_input").prop("checked",true);

          }else{
            $("#mypage_cart_section1 .wish_thead_th_input").prop("checked",false);
          }

        });

    /*장바구니 삭제버튼 영역입니다*/
        $(".cart_list_delete_1").click(function(){
          if(confirm("해당 상품을 장바구니에서 삭제하시겠습니까?")){
            $(".cart_item_1").hide();
            alert("해당 상품이 삭제되었습니다.");
          }
        });
        $(".cart_list_delete_2").click(function(){
          if(confirm("해당 상품을 장바구니에서 삭제하시겠습니까?")){
            $(".cart_item_2").hide();
            alert("해당 상품이 삭제되었습니다.");
          }
        });
        $(".cart_list_delete_3").click(function(){
          if(confirm("해당 상품을 장바구니에서 삭제하시겠습니까?")){
            $(".cart_item_3").hide();
            alert("해당 상품이 삭제되었습니다.");
          }
        });

      /*장바구니 관심상품 버튼 영역입니다*/
          $(".cart_list_wish_1").click(function(){
            if(confirm("해당 상품을 관심상품에 추가하시겠습니까?")){
              alert("관심상품에 추가되었습니다.");
            }
          });
          $(".cart_list_wish_2").click(function(){
            if(confirm("해당 상품을 관심상품에 추가하시겠습니까?")){
              alert("관심상품에 추가되었습니다.");
            }
          });
          $(".cart_list_wish_3").click(function(){
            if(confirm("해당 상품을 관심상품에 추가하시겠습니까?")){
              alert("관심상품에 추가되었습니다.");
            }
          });



/*Q&A 비밀글 경고창 영역입니다*/
      $(".qna_lock").click(function(){
        alert("비밀글입니다.")
      });

/*서브페이지 상단메뉴 영역입니다*/
      $('.sub_ul').slideUp(0);
      $('.depth').hover(function(){
        $(this).children().children().children('.sub_ul').stop().slideDown('100');
      }, function(){
        $(this).children().children().children('.sub_ul').stop().slideUp('100');
      });

    $(window).load(function(){
      $('.sub_visual').addClass('on');
      });

/*프로모션 페이지 버튼 클릭시 스크롤 플러그인 영역입니다*/
$(".promot_button").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
});


///***상품 상세페이지 영역입니다***///
/*상품 상세페이지_나의 사이즈 알아보기 팝업 영역입니다*/
$(".mysize").click(function(){
  $(".mysize_popup").show();
});
$(".mysize_popup_close").click(function(event){
  event.preventDefault();
  $(this).parent(".mysize_popup").hide();
});




/*상품 상세페이지_관심상품 버튼 영역입니다*/
$(".goods_wish").click(function(){
  $(".goods_wish_popup").show();
});

$(".on_shopping").click(function(){
  $(".goods_wish_popup").hide();
});

$(".goods_cart").click(function(){
  $(".goods_cart_popup").show();
});

$(".on_shopping").click(function(){
  $(".goods_cart_popup").hide();
});


$(".goods_order").click(function(){
  $(".goods_order_popup").show();
});

$(".x_btn").click(function(){
  $(".goods_order_popup").hide();
});



});

/*상품 상세페이지_수량 버튼 영역입니다*/
var sell_price;
var amount;

function init () {
  sell_price = document.form.sell_price.value;
  amount = document.form.amount.value;
  document.form.sum.value = sell_price;
  change();
}

function add () {
  hm = document.form.amount;
  sum = document.form.sum;
  hm.value ++ ;

  sum.value = parseInt(hm.value) * sell_price;
}

function del () {
  hm = document.form.amount;
  sum = document.form.sum;
    if (hm.value > 1) {
      hm.value -- ;
      sum.value = parseInt(hm.value) * sell_price;
    }
}

function change () {
  hm = document.form.amount;
  sum = document.form.sum;

    if (hm.value < 0) {
      hm.value = 0;
    }
  sum.value = parseInt(hm.value) * sell_price;
}
