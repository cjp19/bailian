define(function(require){
	var $ = require('jquery');
	$('.headtop .fenlei .candan').mouseover(function(){
		$('.headtop .fenlei .candan .allk').css('display','block');
		for(let i = 0 ; i < 14 ; i++){
			$('.headtop .fenlei .candan .allk ul li:eq(' + i + ')').mouseover(function(){
				$('.headtop .fenlei .candan .alldetails1:eq(' + i + ')').css('display','block');
			})
		}
	})
	$('.headtop .fenlei .candan').mouseout(function(){
		$('.headtop .fenlei .candan .allk').css('display','none');
		for(let i = 0 ; i < 14 ; i++){
			$('.headtop .fenlei .candan .allk ul li:eq(' + i + ')').mouseout(function(){
				$('.headtop .fenlei .candan .alldetails1:eq(' + i + ')').css('display','none');
			})
		}
	})
	
	var oLii = document.querySelectorAll('#nav .allkinds .allk ul li');
	var oAlii = document.querySelectorAll('#nav .allkinds .alldetails1');
	console.log(oAlii[0]);
	for(let i = 0 ; i < oAlii.length ; i++){
		oLii[i].onmouseover = function(){
			oAlii[i].style.display = "block";
		}
		oLii[i].onmouseout = function(){
			oAlii[i].style.display = "none";
		}
	}
	console.log(oLii[1]);
	console.log(oAlii[1]);
})