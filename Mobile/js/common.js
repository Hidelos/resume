$(document).ready(function(){
    //btn-gnb-menu
    $('.btn-gnb-menu').on('click',function(e){
        e.preventDefault();
        
        if($(this).hasClass('on') === false) {
            $(this).addClass('on');
            $('body').addClass('scroll-block');
            $('.header-wrap').addClass('on');
            $('.gnb-wrap').show();

        }
        else {
            $(this).removeClass('on');
            $('body').removeClass('scroll-block');
            $('.header-wrap').removeClass('on');
            $('.gnb-wrap').hide();
        }
        $('.sub-gnb-wrap > a').removeClass('on');
        $('.sub-gnb').hide();
    })

    //sub-gnb
    $('.sub-gnb-wrap > a').on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('on') === false) {
            $(this).addClass('on');
            $('body').addClass('scroll-block');
            $('.sub-gnb').show();
        }
        else {
            $(this).removeClass('on');
            $('body').removeClass('scroll-block');
            $('.sub-gnb').hide();
        }
        $('.btn-gnb-menu').removeClass('on');
        $('.header-wrap').removeClass('on');
        $('.gnb-wrap').hide();
    })

    //상단 header 고정

    var didScroll;
    var lsTop = 0;
    //20201124 수정 시작
    var delta = 45;
    //20201124 수정 끝
    $(window).on('load scroll', function(){
        didScroll = true;
        var wTop = $(this).scrollTop();
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    //상단 m-header 고정
    function hasScrolled() {
        var sTop = $(this).scrollTop();
        var $Topview = $('.top-view');
        var $header = $('.header-bottom');
        var $subWrap = $('.sub-wrap');
        var $subTit = $('.sub-wrap h2');
        var $subGnb = $('.sub-gnb-wrap > a');

        if(sTop >= 0){
            
            if(Math.abs(lsTop - sTop) <= delta)
                return;

            if (sTop > lsTop ) {
                $Topview.addClass('fixed').removeClass('up');
                $header.addClass('fixed').removeClass('up');
                $subWrap.addClass('fixed');
                $subTit.addClass('fixed').removeClass('up');
                $subGnb.addClass('fixed').removeClass('up');
            } else{
                if(sTop + $(window).height() < $(document).height()){
                    $Topview.removeClass('fixed').addClass('up');
                    $header.removeClass('fixed').addClass('up');
                    $subWrap.removeClass('fixed');
                    $subTit.removeClass('fixed').addClass('up');
                    $subGnb.removeClass('fixed').addClass('up');
                }
            }
            
            
            if (sTop <= 5) {
                $Topview.removeClass('fixed').removeClass('up');
                $header.removeClass('fixed').removeClass('up');
                $subWrap.removeClass('fixed');
                $subTit.removeClass('fixed').removeClass('up');
                $subGnb.removeClass('fixed').removeClass('up');
            }
            lsTop = sTop;
        }
    }
    // var didScroll;
    // var lsTop = 0;
    // $(window).on('load scroll', function(){
    //     didScroll = true;
    // });

    // setInterval(function () {
    //     if (didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     }
    // }, 250);

    // function hasScrolled() {
        
    //     var sTop = $(this).scrollTop();
    //     var $Topview = $('.top-view');
    //     var $header = $('.header-bottom');
    //     var $subWrap = $('.sub-wrap');
    //     var $subTit = $('.sub-wrap h2');
    //     var $subGnb = $('.sub-gnb-wrap > a');

    //     console.log(sTop);
    //     console.log(lsTop);
    //     if (sTop > lsTop) {
    //         $Topview.addClass('fixed').removeClass('up');
    //         $header.addClass('fixed').removeClass('up');
    //         $subWrap.addClass('fixed');
    //         $subTit.addClass('fixed').removeClass('up');
    //         $subGnb.addClass('fixed').removeClass('up');
    //     } else {
    //         $Topview.removeClass('fixed').addClass('up');
    //         $header.removeClass('fixed').addClass('up');
    //         $subWrap.removeClass('fixed');
    //         $subTit.removeClass('fixed').addClass('up');
    //         $subGnb.removeClass('fixed').addClass('up');
    //     }
        
    //     lsTop = sTop;    
    //     if (sTop <= 0) {
    //         $Topview.removeClass('fixed').removeClass('up');
    //         $header.removeClass('fixed').removeClass('up');
    //         $subWrap.removeClass('fixed');
    //         $subTit.removeClass('fixed').removeClass('up');
    //         $subGnb.removeClass('fixed').removeClass('up');
    //     }
        
    // }

    //family site
    $('.family_site > a').on('click',function(){
        if($('.family_site').hasClass('on')===false){
            $('.family_site').addClass('on');
        }
        else {
            $('.family_site').removeClass('on');
        }
    });
    $('.family_site ul li a').on('click',function(){
        $('.family_site').removeClass('on');
    });

    ui.init();
});

//문의하기
var ui = {
    init: function(){
        ui.inputError();
        ui.attachedFile();
    },
    inputError : function(){
        // 기본 알럿문구 숨김
        $('.inputCaution').hide();
        // 제출 시 빈값 일때 알럿 노출 + 양식 제출하지 않음
        $('.btn_submit').click(function(){            
            var is_empty = false;
            $(this).parents('form').find('.require input[type="text"], textarea').each(function(){
                if(!$(this).val()) {
                    is_empty = true;
                }
            });            
            if(is_empty) {
                $(this).parents('form').find('.inputCaution').show();
                $(this).parents('form').find('.require').addClass('error'); //필수 입력값이 빈값이거나 값이 유효하지않은경우 부모(.inputWrap)에 .error 추가
                $(this).parents('div.mainTop').addClass('heightPlus');//에러메시지 노출시 height 값 변경
                return false;
            }
        });
    },   
    attachedFile : function(){
        var fileTarget = $('.inputWrap .upLoadHide');
        fileTarget.on('change', function(){
            if(window.FileReader){
                var filename = $(this)[0].files[0].name;
            } else {
                var filename = $(this).val().split('/').pop().split('\\').pop();   
            }
            $(this).parents('.inputWrap').append('<div class="fileInfo"><span>'+filename+'</span><a href="javascript:;" class="fileDel"><img src="img/tempocloud/icon_loadFile_delete.png" alt="file delete"></a></div>');
            $('.inputExp').hide();
        });

        //모바일·PC 공통 : 문의폼 파일 첨부 동적태그 이벤트 바인딩
        $(document).on('click','.fileDel',function(){
            $(this).parents('.fileInfo').remove();
            if($('.fileInfo').length==0){
                $('.inputExp').show();
            }else{
                $('.inputExp').hide();
            }
        });
    },
}

