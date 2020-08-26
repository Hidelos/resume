/**
 * Created by Administrator on 2016-11-17.
 * Design nas.
 */




$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.


    $(".scrollBox").niceScroll({
        cursorcolor: "#1428a0",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // ===========================================================
    //click , mouseenter , mouseleave move event section
    //===========================================================


    $('#visual .product').on('click',function(){
        $('#visual .wall').delay(800).fadeOut(function () {
            $('#visual .bg > img').addClass('on');
            $('#visual .tv').fadeOut(500);
            $('#visual .btn_typo').fadeOut(800);
        });
    });



    $("#scene02 .bg_01.on").on("mousewheel", function (event, delta) {
        if (delta > 0) {  //마우스 휠을 올렸을때
        } else if (delta < 0) {//마우스 휠을 내렸을때
            $('#scene02 .bg_01').stop().animate({top: -580},300);
            $('#scene02 .bg_02').stop() .animate({top: 500},300);
        }
    });


    $('#slides2').slidesjs({
        width:2000,
        height:1080,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 6000, // 대기시간, 1000=1초,
            effect: "fade", // 효과, slide/fade
            auto: true, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: false, // 버튼 활성화/비활성화
            effect: "fade"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: true,
            effect: "fade"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 2000
            }
        }
    });


    $('#slides3').slidesjs({
        width:1920,
        height:1080,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 6000, // 대기시간, 1000=1초,
            effect: "fade", // 효과, slide/fade
            auto: true, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "fade"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: false,
            effect: "fade"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 2000
            }
        }
    });


    $('#slides5').slidesjs({
        width:1920,
        height:1080,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 6000, // 대기시간, 1000=1초,
            effect: "fade", // 효과, slide/fade
            auto: false, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: false, // 버튼 활성화/비활성화
            effect: "fade"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: true,
            effect: "fade"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 1000
            },
            slide: {
                speed: 2500
            }
        }
    });

    /*$('#video').get(0).play();


    $('#footer .bg_01_btn').on('mouseenter',function () {
        $('#footer .bg_01_btn .bg_01_btn_arrow').addClass('on');
    });

    $('#footer .bg_01_btn').on('mouseleave',function () {
        $('#footer .bg_01_btn .bg_01_btn_arrow').removeClass('on');
    });

    $('#footer .sns_btn > li').on('mouseenter',function () {
        $('#footer .sns_btn > li').addClass('on');
        $(this).removeClass('on');
    })

    $('#footer .sns_btn > li').on('mouseleave',function () {
        $('#footer .sns_btn > li').removeClass('on');
    });*/










//==============================================================
});


$(function () {



    // 스크롤 이벤트
    var scrollH = $(document).height();
    $('.scrollBox').scroll(function () {

        var scrollTop = $('.scrollBox').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값
        var scrollTop = $('.scrollBox').scrollTop();
        var docuH = $('.wrap').height();
        if (scrollTop >= 0) {

        } else {
            $('.cover img').attr({'src': 'img/product_01.png'});
        }

        // 메뉴 활성화
        $('.wrap > div').each(function (i) {
            var fastNum = 100; // 메뉴를 빨리 활성화 시키는 값
            var firstY = $('.wrap > div:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('.naviJs').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('.naviJs').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        });

        if ( scrollTop >= 1090 ) {
            $('#scene02 .title_01').addClass('on');
        } else {
            $('#scene02 .title_01').removeClass('on');
        }
        if ( scrollTop >= 2660 ) {
            $('#scene03 .title_02').addClass('on');
        } else {
            $('#scene03 .title_02').removeClass('on');
        }

        if ( scrollTop >= 4240 ) {
            $('#scene04 .bg_06_product').stop().animate({bottom: 0},1000);
        }


    });
});







