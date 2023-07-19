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


        /* header ani */
        var subHeader = $('header'),
            lastScroll = 0;

        subHeader.find('nav .main_menu>li>a').css('color','#fff');
        
        $(window).scroll(function(){
            var winOST = $(this).scrollTop();
            
            if(winOST > 50){
                subHeader.addClass('on');
                subHeader.find('nav .main_menu>li>a').css('color','#333');
            }else{
                subHeader.removeClass('on');
                subHeader.find('nav .main_menu>li>a').css('color','#fff');

            }
            if(winOST > lastScroll) {
                subHeader.addClass('hide');
            } else {
                subHeader.removeClass('hide');
            }
                lastScroll = winOST;
        }); 


        //go_btn
        var btt = $('.go_top');
            btt.hide();
            
            $(window).scroll(function(){
                if($(this).scrollTop() > 300){
                    btt.fadeIn(500);
                }else{
                    btt.fadeOut(500);
                }
            }); 
            
            btt.click(function(e){
                e.preventDefault();
                $('html, body').animate({scrollTop:0},500);
            });
        