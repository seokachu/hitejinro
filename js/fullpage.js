//full page
var sectionCount = $('main .section').length;

function initialization(){
    $('main').fullpage({
        //options here
        anchors: ['0','1','2','3','4','5'],
        navigation :true,
        navigationPosition :'right',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        showActiveTooltip:true,
        autoScrolling:true,
        navigationTooltips:["","제품 소개","진로 소식","진로 SNS","진로 소개"],
    });
}
initialization();

$(window).resize(function(){
    var width = $(this).width();
    if(width <= 300){
        $.fn.fullpage.destroy('all');
    }else{            
        //$.fn.fullpage.reBuild();
        initialization();
    }
});

$('.go_top').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(0, 1); // 이동하고싶은 페이지
    $.fn.fullpage.setScrollingSpeed(500); 
});

/*
new fullpage('main', {
	afterRender: function(){
		var pluginContainer = this;
		alert("The resulting DOM structure is ready");
	}
});*/

