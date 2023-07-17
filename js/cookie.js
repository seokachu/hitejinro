//popup
var myPopup = document.querySelector('.popup_box'),
checkbox = document.querySelector('#oneday_close'),
popupClose = document.querySelector('.popup_close');

//쿠키 생성
function setCookie(name, value, day){
var date = new Date();
date.setDate(date.getDate() + day);

var mycookie = '';
mycookie += name + '=' + value+';';
mycookie +='Expires=' + date.toUTCString();

document.cookie = mycookie; 
}

//쿠키 삭제
function delCookie(name){
var date = new Date();

date.setDate(date.getDate() - 1);

var setCookie = '';

setCookie += name+'=Main;';
setCookie +='Expires=' + date.toUTCString();

document.cookie = setCookie; //쿠키 설정, 생성           
}

//쿠키 확인
function checkCookie(name){
var cookies = document.cookie.split(';');
var visited = false; // 방문 거짓

for(var i in cookies){
    if(cookies[i].indexOf(name) > -1){
        visited = true;
        console.log(visited);
    }                
}

if(visited){
    //재방문
    myPopup.style.display = 'none';
}else{
    //신규방문
    myPopup.style.display = 'block';
}

}
checkCookie('Portfolio.com');

popupClose.addEventListener('click', function(){
if(checkbox.checked){
    setCookie('Portfolio.com','Main',1);
    myPopup.style.display = 'none';
} else{
    myPopup.style.display = 'none';
    delCookie('Portfolio.com');
}
});