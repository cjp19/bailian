define(function(require){
	//购物车效果
	var $ = require('jquery');
	$('#shopcart .detail .hui').click(function(){
		$('#shopcart').animate({"right":"-277px"},500);
	})
	$('#shopcart .gongneng div').click(function(event){
		//阻止事件冒泡
		event.stopPropagation(); 
		$('#shopcart').animate({"right":0},500);
	})
	$('#shopcart').click(function(event){
		event.stopPropagation(); 
	})
	$('#shopcart .gongneng p:eq(0)').click(function(event){
		event.stopPropagation(); 
	})
	$('#shopcart .gongneng p:eq(1)').click(function(event){
		event.stopPropagation(); 
	})
	$('#shopcart .gongneng p:eq(2)').click(function(event){
		event.stopPropagation(); 
		var $st = $(document).scrollTop();
		var timer = setInterval(function(){
			$st-=50;
			$(document).scrollTop($st);
			if($st <= 0){
				clearInterval(timer);
			}
		},5)
	})
	$(document).click(function(event){
		$('#shopcart').animate({"right":"-277px"},500);
	})
	function clear(){
		$('#shopcart .detail .xinxidetail').css('display','none');
	}
	for(let i = 0 ; i < 4 ; i++){
		$('#shopcart .gongneng div:eq(' + i + ')').click(function(){
			clear();
			$('#shopcart .detail .xinxidetail:eq(' + i + ')').css('display','block');
		});
		$('#shopcart .gongneng div:eq(' + i + ')').mouseover(function(){
			$('#shopcart .gongneng div:eq(' + i + ') .left').animate({"left":"-80px"},200);
		});
		$('#shopcart .gongneng div:eq(' + i + ')').mouseout(function(){
			$('#shopcart .gongneng div:eq(' + i + ') .left').animate({"left":0},200);
		});
		$('#shopcart .gongneng p:eq(' + i + ')').mouseover(function(){
			$('#shopcart .gongneng p:eq(' + i + ') .bleft').animate({"left":"-80px"},200);
		});
		$('#shopcart .gongneng p:eq(' + i + ')').mouseout(function(){
			$('#shopcart .gongneng p:eq(' + i + ') .bleft').animate({"left":0},200);
		});
	}
	$('#shopcart .gongneng p.erweima').mouseover(function(){
		$('#shopcart .gongneng p.erweima .bleft').animate({"left":"-140px"},200);
	});
	$('#shopcart .gongneng p.erweima').mouseout(function(){
		$('#shopcart .gongneng p.erweima .bleft').animate({"left":0},200);
	});
	
	var oAsd = document.querySelector('#shopcart .gongneng');
	console.log(oAsd.offsetHeight);
})