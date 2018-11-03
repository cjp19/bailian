define(function(require){
	var $ = require('jquery');
	for(let i = 0 ; i < $('#main .detailspage .btnBox img').length ; i++){
		$('#main .detailspage .btnBox img:eq(' + i + ')').mouseover(function(){
			$('#main .detailspage .show img').attr('src','gulp/dist/images/mianmo_'+ (i + 1) +'.jpg');
		});
	}
	$('#main .detailspage .show').mouseover(function(){
		$('#main .detailspage .bigImg img').attr('src',$('#main .detailspage .show img').attr('src'));
		$('#main .detailspage .filter').css('display','block');
		$('#main .detailspage .show').children('.bigImg').css('display','block');
	});
	$('#main .detailspage .show').mouseout(function(){
		$('#main .detailspage .filter').css('display','none');
		$('#main .detailspage .show').children('.bigImg').css('display','none');
	});
	
// 	$('#main .detailspage .show').mousemove(function(evt){
// 		var e = evt || window.event;
// 		var l = e.pageX - $('#main .detailspage .show').offset().left - $('#main .detailspage .filter').width() / 2;
// 		var t = e.pageX - $('#main .detailspage .show').offset().top - $('#main .detailspage .filter').height() / 2;
// 		l = l < 0 ? 0 : (l > 248 ? 248 : l);
// 		t = t < 0 ? 0 : (t > 248 ? 248 : t);
// 		$('#main .detailspage .filter').css('left',l + 'px');
// 		$('#main .detailspage .filter').css('top',t + 'px');
// 		$('#main .detailspage .bigImg img').css('width','800px');
// 		$('#main .detailspage .bigImg img').css('height','800px');
// 		$('#main .detailspage .bigImg img').css('left',-2 * l + 'px');
// 		$('#main .detailspage .bigImg img').css('top',-2 * t + 'px');
// 	});
	
	var oShow = document.querySelector('#main .detailspage .show');
	var oFilter = document.querySelector('#main .detailspage .filter');
	var oImg3 = document.querySelector('#main .detailspage .bigImg img');
		
	oShow.onmousemove = function(e){
		var e = e || window.event;
		var l = e.pageX - oShow.offsetLeft - oFilter.offsetWidth / 2;
		var t = e.pageY - oShow.offsetTop - oFilter.offsetHeight / 2;
		l = l < 0 ? 0 : (l > 248 ? 248 : l);
		t = t < 0 ? 0 : (t > 248 ? 248 : t);
		oFilter.style.left = l + 'px';
		oFilter.style.top = t + 'px';

		oImg3.style.width = 800 + 'px';
		oImg3.style.height = 800 + 'px';
		oImg3.style.left = -2 * l + 'px';
		oImg3.style.top = -2 * t + 'px';
	}
	
	var count = 1;
	$('#main .detailspage .canshu .num .jianshu .add').click(function(){
		count++;
		$('#main .detailspage .canshu .num .jianshu span').html(count);
	});
	$('#main .detailspage .canshu .num .jianshu .minus').click(function(){
		if(count > 1){
			count--;
			$('#main .detailspage .canshu .num .jianshu span').html(count);
		}
	});
})