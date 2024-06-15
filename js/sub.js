$(document).ready(function(){
  $(".firstdd").show();
  $(".ams_profile").hide();
  $(".event_form_popup").hide();
  $(".open_qna_popup").hide();
  $("#review_popup, #review_popup_02, #review_popup_03").hide();


  $(".kangruri").click(function(){
    $("#ambassador_profile_01, .login_popup_opacity_sub").show();
  });

  $("#abs_x_01").click(function(){
    $("#ambassador_profile_01, .login_popup_opacity_sub").hide();
  });
  $(".kimminjun").click(function(){
    $("#ambassador_profile_02, .login_popup_opacity_sub").show();
  });

  $("#abs_x_02").click(function(){
    $("#ambassador_profile_02, .login_popup_opacity_sub").hide();
  });
  $(".kimgaram").click(function(){
    $("#ambassador_profile_03, .login_popup_opacity_sub").show();
  });

  $("#abs_x_03").click(function(){
    $("#ambassador_profile_03, .login_popup_opacity_sub").hide();
  });
  $(".parkjinwoo").click(function(){
    $("#ambassador_profile_04, .login_popup_opacity_sub").show();
  });

  $("#abs_x_04").click(function(){
    $("#ambassador_profile_04, .login_popup_opacity_sub").hide();
  });
  $(".seoyonghee").click(function(){
    $("#ambassador_profile_05, .login_popup_opacity_sub").show();
  });

  $("#abs_x_05").click(function(){
    $("#ambassador_profile_05, .login_popup_opacity_sub").hide();
  });
  $(".anjimin").click(function(){
    $("#ambassador_profile_06, .login_popup_opacity_sub").show();
  });

  $("#abs_x_06").click(function(){
    $("#ambassador_profile_06, .login_popup_opacity_sub").hide();
  });
  $(".leejunsu").click(function(){
    $("#ambassador_profile_07, .login_popup_opacity_sub").show();
  });

  $("#abs_x_07").click(function(){
    $("#ambassador_profile_07, .login_popup_opacity_sub").hide();
  });
  $(".jineunju").click(function(){
    $("#ambassador_profile_08, .login_popup_opacity_sub").show();
  });

  $("#abs_x_08").click(function(){
    $("#ambassador_profile_08, .login_popup_opacity_sub").hide();
  });
  $(".chakyungsun").click(function(){
    $("#ambassador_profile_09, .login_popup_opacity_sub").show();
  });

  $("#abs_x_09").click(function(){
    $("#ambassador_profile_09, .login_popup_opacity_sub").hide();
  });
  $(".choeseoyeon").click(function(){
    $("#ambassador_profile_10, .login_popup_opacity_sub").show();
  });

  $("#abs_x_10").click(function(){
    $("#ambassador_profile_10, .login_popup_opacity_sub").hide();
  });
  $(".hajungmin").click(function(){
    $("#ambassador_profile_11, .login_popup_opacity_sub").show();
  });

  $("#abs_x_11").click(function(){
    $("#ambassador_profile_11, .login_popup_opacity_sub").hide();
  });

  $(".handajung").click(function(){
    $("#ambassador_profile_12 .login_popup_opacity_sub").show();
  });

  $("#abs_x_12").click(function(){
    $("#ambassador_profile_12, .login_popup_opacity_sub").hide();
  });

  $(".event_7_button").click(function(){
    $(".event_form_popup, .login_popup_opacity_sub").show();
  });

  $("#event_form_close").click(function(){
    $(".event_form_popup, .login_popup_opacity_sub").hide();
  });

  $(".open_qna_li_01").click(function(){
    $("#open_qna_popup_01").show();
  }); //이부분이 어디에요?

  $('#qna_close_01').click(function(){
    $("#open_qna_popup").hide();
  }); // none

  $(".open_qna_li_02").click(function(){ ///////////////
    $(".open_qna_popup").show(); ///////////
  });

  $("#qna_close_02").click(function(){
    $("#open_qna_popup_02.testing_class_01").hide();
  });// none

  $('.best_review_01').click(function(){
    $("#review_popup").show();
  });

  $('#review_popup .xi-close-thin').click(function(){
    $("#review_popup").hide();
  });// none

  $('.best_review_02').click(function(){
    $("#review_popup_02").show();
  });

  $('#review_popup_02 .xi-close-thin').click(function(){
    $("#review_popup_02").hide();
  }); //none

  $('.best_review_03').click(function(){
    $("#review_popup_03").show();
  });

  $('#review_popup_03 .xi-close-thin').click(function(){
    $("#review_popup_03").hide();
  });




  $("#event_ing_section1 dt").click(function(){
    $(this).next().slideToggle(500).siblings("dd").slideUp();
    $(this).toggleClass("on").siblings("dt").removeClass("on");
  });



  $("#event_end_section1 dt").click(function(){
    $(this).next().slideToggle(500).siblings("dd").slideUp();
    $(this).toggleClass("on").siblings("dt").removeClass("on");
  });


  $("#wish_thead_first_th_input").click(function(){

  if($("#wish_thead_first_th_input").prop("checked")){
    $(".wish_thead_th_input").prop("checked",true);

  }else{
    $(".wish_thead_th_input").prop("checked",false);
  }

});

  $(".qna_lock").click(function(){
    alert("비밀글입니다.")
  });


  $('.sub_ul').slideUp(0);
	$('.depth').hover(function(){
		$(this).children().children().children('.sub_ul').stop().slideDown('100');
	}, function(){
		$(this).children().children().children('.sub_ul').stop().slideUp('100');
	});

  $(window).scroll(function(){
   var top = $(window).scrollTop();

      var con1=$('.sub_visual').offset();
         if (top>con1.top-400) {
             $('.sub_visual').addClass('on');
         }
         else{

      }
    });


});
