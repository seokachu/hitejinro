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
