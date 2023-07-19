//header
var menu = $('header nav'),
    header = $('header'),
    menuHeight = 38, //nav -> 38
    headerHeight = 109, // header -> 109
    subHeight = 242, // submenu ul -> 242
    menuBtn = menu.find('.main_menu>li>a'),
    underLine = menu.find('.underline'),
    menuBtnWidth = menuBtn.outerWidth(),
    mainMenuLi = menu.find('.main_menu>li'),
    duration = 300;


    //main manu header
    setTimeout(function(){
        menuHoverFunc();
    },100);

    function menuHoverFunc(){
        menu.mouseenter(function(){
            $(this).stop().animate({ height : subHeight},duration);
            header.stop().animate({height: headerHeight + subHeight-30},50);
        }).mouseleave(function(){
            $(this).stop().animate({ height : menuHeight });
            header.stop().animate({height: headerHeight});
        });
    }

    //main manu hover
        menuBtn.add(mainMenuLi).mouseover(function(){
        var left = $(this).position().left;
        underLine.stop().animate({left:left+'px'},100);
    })
        menuBtn.add(mainMenuLi).mouseout(function(){
        underLine.stop().animate({left:'-100%'});
    })


    //Main header btn 
    var searchBtn = $('.gnb_list>.search'),
        searchWrapper = $('.search_wrapper'),
        closeBtn = searchWrapper.find('.search_close'),
        closeIcon = searchWrapper.find('.close_icon');

    searchBtn.click(function(e){
        e.preventDefault();
        searchWrapper.css('visibility','visible');
    });

    closeBtn.click(function(){
        searchWrapper.css('visibility','hidden');
    });

    closeIcon.click(function(e){
        e.preventDefault();
        searchWrapper.css('visibility','hidden');
    });     


    //Main header responsive
    var headerBar = header.find('.header_wrap .header_bar'),
        asideMenu = $('aside'),
        asideCloseBtn = asideMenu.find('.close_bar'),
        asideMainmenu = asideMenu.find('.main_menu>li'),
        asideSubmenu = asideMainmenu.find('.sub_menu>li');

        headerBar.click(function(){
            asideMenu.fadeIn(duration);
        });

        asideCloseBtn.click(function(){
            asideMenu.fadeOut(duration);
        });

        asideMainmenu.click(function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).siblings().removeClass('active');
        });

        asideSubmenu.click(function(e){
            e.stopPropagation();
        });

        $(window).resize(function(){
            var viewportWidth = $(this).width();
            if(viewportWidth >= 768){
                asideMenu.css('display','none');
                menu.css('display','block');
            }else{
                menu.css('display','none');
            }
        });


    // full page action    
    $(window).on('hashchange', function(){
        var name = location.hash;
        
        if(name == '#2' || name == '#4'){
            $('header').addClass('mainpage');
            $('header').css('display','block');
            $('.go_top').fadeIn(500);
        }else if(name == '#5'){
            $('header').css('display','none');
        }else if(name == '#0'){
            $('.go_top').css('display','none');
            $('header').css('display','block');
            $('header').removeClass('mainpage');
        }else{
            $('header').removeClass('mainpage');
            $('header').css('display','block');
            $('.go_top').fadeIn(500);
        }
    });

   
    //main2 브랜드소개
    var mainTwoSlideContainer = $('.brand_wrap>.brand_list'), //ul
        mainTwoSlides = mainTwoSlideContainer.find('li'), //li
        mainTwoSlidesCount = mainTwoSlides.length,
        currentMainTwoIndex = 0,
        pagerTwoHTML = '',
        mainTwoPrevBtn = $('.brand_btn>.btn_prev'),
        mainTwoNextBtn = $('.brand_btn>.btn_next'),
        mainTwoPager = $('.main2_pager');
        mainTwoTimer = undefined;

    mainTwoSlides.eq(0).show();

    //슬라이드
    function mainTwoNextSlide(){
        mainTwoSlides.eq(currentMainTwoIndex).hide();
        var nextIdx = (currentMainTwoIndex + 1) % mainTwoSlidesCount;
        mainTwoSlides.eq(nextIdx).show();
        currentMainTwoIndex = nextIdx;
        
        //페이저 active 넣기
        mainTwoPager.find('li').removeClass('active').eq(currentMainTwoIndex).addClass('active');
        
        //animate active
        mainTwoSlides.removeClass('active').eq(currentMainTwoIndex).addClass('active');
    }

    function slidesZIdx() {
        mainTwoSlides.each(function(idx){
            $(this).css({zIndex: mainTwoSlidesCount - idx});
        });
    }
    slidesZIdx();


    //5초마다 움직이기
    function autoTwoSlide(){
        if(mainTwoTimer == undefined){
            mainTwoTimer = setInterval(function(){
                if(currentMainTwoIndex != mainTwoSlidesCount -1){
                    mainTwoNextBtn.trigger('click');
                }else{
                    mainTwoNextSlide(0);
                }
            }, 5000);
        }
    }
    autoTwoSlide();

    //페이저생성
    mainTwoSlides.each(function(i){
        pagerTwoHTML += "<li>" + i + "</li>";
    });

    mainTwoPager.html(pagerTwoHTML);

    //페이저 버튼
    mainTwoPrevBtn.click(function(){
        if(currentMainTwoIndex != 0){
            mainTwoNextSlide(currentMainTwoIndex-1);
        }else{
            mainTwoNextSlide(mainTwoSlidesCount-1);
        }
    });

    mainTwoNextBtn.click(function(){
        if(currentMainTwoIndex != mainTwoSlidesCount-1){
            mainTwoNextSlide(currentMainTwoIndex+1);
        }else{
            mainTwoNextSlide(0);
        }
    });

    //페이저 클릭시 해당 슬라이드 이동
    var mainTwopagerBtn = mainTwoPager.find('li');
    mainTwopagerBtn.click(function(){
        var targetIdx = $(this).index();
        mainTwoNextSlide(targetIdx);
    });

    //main3 하이트진로 소식
    var infoSlideWrap = $('.news_wrapper'),
    infoSliderUl = infoSlideWrap.find('.news_list'), //ul
    infoSlides = infoSliderUl.find('li'), 
    infoSlideCount = infoSlides.length,
    infoNewSlideCount,
    infoCurrentIdx = 0,
    infoSlideWidth = 370, 
    infoSlideMargin = 30,
    moveAmt = infoSlideWidth + infoSlideMargin,
    maxSlides = 3,
    responsiveMargin = 20,
    newSlides,
    newSlideWidth,
    infoSlideTimer,
    infoPrevBtn = $('.news_btn .news_left'),
    infoNextBtn = $('.news_btn .news_right');

    //ul에 앞뒤 복사본 만들기 
    infoSliderUl.append(infoSlides.clone().addClass('clone'));
    infoSliderUl.prepend(infoSlides.clone().addClass('clone'));

    //가로배치
    function slideLayout(sw,sm){
        newSlides = infoSliderUl.find('li');
        infoNewSlideCount = newSlides.length;
        moveAmt = sw+sm;
        newSlides.each(function(idx){
            $(this).css({left:idx*moveAmt+'px',width:sw+'px'});
        });
    }
    slideLayout(infoSlideWidth,infoSlideMargin);

    //ul 가운데 배치
    function setSlideCenter(){
        var ulMoveAmt = `${moveAmt*-infoSlideCount}px`;
        infoSliderUl.css({transform:`translateX(${ulMoveAmt})` });
    }
    setSlideCenter();

    //슬라이드함수
    function infoMoveSlide(num){
        infoSliderUl.stop().animate({left:-num*moveAmt +'px'},500,function(){
            infoCurrentIdx = num;
            if( infoCurrentIdx == infoSlideCount || infoCurrentIdx == -infoSlideCount){ 
                infoSliderUl.css({left:'0px'});
                infoCurrentIdx=0;
            }
        });
    }

    //좌우버튼
    infoNextBtn.click(function(e){
        e.preventDefault();
        infoMoveSlide(infoCurrentIdx + 1);
    });

    infoPrevBtn.click(function(e){
        e.preventDefault();
        infoMoveSlide(infoCurrentIdx - 1);
    });

    //자동슬라이드
    function infoautoSlide(){
        infoSlideTimer = setInterval(function(){
            infoMoveSlide(infoCurrentIdx + 1);
        },3000);
    }
    infoautoSlide();

    infoSlideWrap.mouseenter(function(){
        clearInterval(infoSlideTimer);
    });
    infoSlideWrap.mouseleave(function(){
        infoautoSlide();
    });

    $(window).resize(function(){
        let currentSlideWrapperWidth = infoSlideWrap.outerWidth();

        if(currentSlideWrapperWidth < 1120){
        newSlideWidth = (currentSlideWrapperWidth - responsiveMargin*(maxSlides -1))/maxSlides;        
        } else{
        newSlideWidth = infoSlideWidth;
        responsiveMargin = infoSlideMargin;
        }

        if(currentSlideWrapperWidth < 720){
        newSlideWidth = currentSlideWrapperWidth;
        responsiveMargin = 0; 
        }else{
        newSlideWidth = (currentSlideWrapperWidth - responsiveMargin*(maxSlides -1))/maxSlides;  
        }
        slideLayout(newSlideWidth,responsiveMargin);
        setSlideCenter();
    });


    //main5 회사소개
    var animation = $('.chart'),
        numberBar = animation.find('.chart_wrap>.chart_text>span');
        
        $(window).on('hashchange', function(){
            var animationOST = location.hash;
            if(animationOST == '#4'){
                if(!animation.hasClass('active')){
                    progressAnimate();
                }
            }
        });
    
/*
    if(!animation.hasClass('active')){
        progressAnimate();
    }
*/
    function progressAnimate(){
        numberBar.each(function(){
            var animateRate = $(this),
            animateNum = $(this).attr('data-num'),
            animateNumArr = animateNum.split('.');
            
            function numberAni(){
                $({startNumber:0}).animate({startNumber:animateNumArr[0]},{
                    duration:2500,
                    progress:function(idx){
                        var now = Math.ceil(this.startNumber);
                        animateRate.text(now);
                    }
                });
                animation.addClass('active');
            }
            numberAni();
        });   
    }


  

/*
//main5 회사소개
var animation = $('.chart'),
numberBar = animation.find('.chart_wrap>.chart_text>span'),
animationOST = animation.offset().top -400;



$(window).scroll(function(){
    
    if($(this).scrollTop() > animationOST){
        
        if(!animation.hasClass('active')){
            progressAnimate();
        }
    }
});

function progressAnimate(){
    numberBar.each(function(){
        var animateRate = $(this),
        animateNum = $(this).attr('data-num'),
        animateNumArr = animateNum.split('.');

        function numberAni1(){
            $({startNumber:0}).animate({startNumber:animateNum},{
                duration:2500,
                progress:function(idx){
                    var now = Math.ceil(this.startNumber);
                    animateRate.text(now);
                }
            });
            animation.addClass('active');
        }
        function numberAni2(){
            $({startNumber:0}).animate({startNumber:animateNum},{
                duration:2500,
                progress:function(idx){
                    var now = (this.startNumber).toFixed(2);
                    animateRate.text(now);
                }
            });
            animation.addClass('active');
        }
        function numberAni3(){
            $({startNumber:0}).animate({startNumber:animateNum},{
                duration:2500,
                progress:function(idx){
                    var now = (this.startNumber).toFixed(1);
                    animateRate.text(now);
                }
            });
            animation.addClass('active');
        }
    });
}
*/