define(function(require){
	var $ = require('jquery');
	$('#nav .allkinds').mouseover(function(){
		$('#nav .allkinds .allk').css('display','block');
		for(let i = 0 ; i < 14 ; i++){
			$('#nav .allkinds .allk ul li:eq(' + i + ')').mouseover(function(){
				$('#nav .allkinds .alldetails1:eq(' + i + ')').css('display','block');
			})
		}
	})
	$('#nav .allkinds').mouseout(function(){
		$('#nav .allkinds .allk').css('display','none');
		for(let i = 0 ; i < 14 ; i++){
			$('#nav .allkinds .allk ul li:eq(' + i + ')').mouseout(function(){
				$('#nav .allkinds .alldetails1:eq(' + i + ')').css('display','none');
			})
		}
	})
	
	
	
// 	var oAkinds = document.querySelector('#nav .allkinds');
// 	var oAllk = document.querySelector('#nav .allkinds .allk')
// 	var oLii = document.querySelectorAll('#nav .allkinds .allk ul li');
// 	var oAlii = document.querySelectorAll('#nav .allkinds .alldetails1');
// 	console.log(oAlii[0]);
// 	oAkinds.onmouseover = function(){
// 		oAllk.style.display = "block";
// 		for(let i = 0 ; i < oAlii.length ; i++){
// 			oLii[i].onmouseover = function(){
// 				oAlii[i].style.display = "block";
// 			}
// 			oLii[i].onmouseout = function(){
// 				oAlii[i].style.display = "none";
// 			}
// 		}
// 	}
// 	oAkinds.onmouseout = function(){
// 		oAllk.style.display = "none";
// 	}
// 	console.log(oLii[1]);
// 	console.log(oAlii[1]);
	
	
})