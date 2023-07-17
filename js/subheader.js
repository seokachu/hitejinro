//Main header
var menu = $('.main_menu>li'),
    subMenu = menu.find('.sub_menu'),
    header = $('header'),
    headerHeight = header.outerHeight(),
    mainresponsive = header.find('nav>.main_menu').outerHeight(),
    subMenuHeight = 0,
    headerResponsive = header.offset().top;

    subMenu.each(function(){
        if(subMenuHeight < $(this).outerHeight()){
            subMenuHeight = $(this).outerHeight();
        }
    });

    menu.mouseenter(function(){
        header.stop().animate({height:headerHeight + subMenuHeight + 'px'},500);
    })
    .mouseleave(function(){
        header.stop().animate({height:headerHeight +'px'},500);
    });

    //Main header responsive
    var newHeaderMenu = $('nav'),
    newHeadermainMenu = newHeaderMenu.find('.main_menu>li'),
    headerBar = $('.gnb>.header_bar'),
    closeBar = newHeaderMenu.find('.close_bar');

    newHeadermainMenu.click(function(){
        $(this).toggleClass('active');
    });

    headerBar.click(function(e){
        e.preventDefault();
    newHeaderMenu.show();
    });
    
    closeBar.click(function(){
        newHeaderMenu.hide();
    });



    var subHeader = $('header'),
        lastScroll = 0;

    subHeader.find('nav .main_menu>li>a').css('color','#fff');
    $(window).scroll(function(){
        var winOST = $(this).scrollTop();

        if(winOST > 0){
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
   