// var oGloab = document.querySelector('#head .lhead .hgloab');
// var oDao = document.querySelector('#head .lhead .hgloab .daohang');
// oGloab.onmouseover = function(){
// 	oDao.style.display = 'block';
// }
// oGloab.onmouseout = function(){
// 	oDao.style.display = 'none';
// }
define(function(require){
	var $ = require('jquery');
		$('#head .lhead .hgloab').mouseover(function(){
			$('#head .lhead .hgloab .daohang').css('display','block');
		})
		$('#head .lhead .hgloab').mouseout(function(){
			$('#head .lhead .hgloab .daohang').css('display','none');
		})
		$('#head .rhead ul li.wdbl').mouseover(function(){
			$('#head .rhead ul li .wodebl').css('display','block');
		})
		$('#head .rhead ul li.wdbl').mouseout(function(){
			$('#head .rhead ul li .wodebl').css('display','none');
		})
		$('#head .rhead ul li.czjf').mouseover(function(){
			$('#head .rhead ul li .charge').css('display','block');
		})
		$('#head .rhead ul li.czjf').mouseout(function(){
			$('#head .rhead ul li .charge').css('display','none');
		})
		$('#head .rhead ul li.khfw').mouseover(function(){
			$('#head .rhead ul li .service').css('display','block');
		})
		$('#head .rhead ul li.khfw').mouseout(function(){
			$('#head .rhead ul li .service').css('display','none');
		})
		$('#head .rhead ul li.zsbl').mouseover(function(){
			$('#head .rhead ul li .erweima').css('display','block');
		})
		$('#head .rhead ul li.zsbl').mouseout(function(){
			$('#head .rhead ul li .erweima').css('display','none');
		})
})