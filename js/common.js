// JavaScript Document
/*(function (doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
	  var clientWidth = docEl.clientWidth;
	  if (!clientWidth) return;
	  docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
	};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);*/
/*banner 插件*/
$(function(){
		var _width = document.documentElement.clientWidth;
		$('html').width(_width);
		console.log(_width);
	});
$(function(){ 
    $('.bxslider').bxSlider({
			 auto: true
		}); 
		
	$('.customer_slider').bxSlider({
			 auto: false
		}); 
});
/*banner 插件结束*/

/*内容区店铺的高度设置*/
$(function(){
		$('.module1 img')[0].onload = function(){
				var height = $('.module1').height(); 
				$('.module2').height(height);
				$('.floor2 .content').height(height);
			}
	});
/*login按钮点击滑出panel*/
$(function(){
		var flag = true;
		var oLogin = $('header .login span')[0];
		var $panel = $('header .login .login_panel');
		oLogin.addEventListener('touchend',function(ev){
				if(flag){
						flag = !flag;
						$panel.css({
								"transform":"translate(0,0)",
								"transition":"1s"
							});
					}else{
							flag = !flag;
							$panel.css({
								"transform":"translate(70px,0)",
								"transition":"1s"
							});
						}
					ev.stopPropagation();
			},false);
		$('body')[0].addEventListener('touchend',function(){
				if(!flag){
						flag = !flag;
						$panel.css({
								"transform":"translate(70px,0)",
								"transition":"1s"
							});
				}
			},false);
	});
	
	
	
	
	
	
	
	
	
	