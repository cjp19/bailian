define(function(require){
	var $ = require('jquery');
	
	//排序栏
	for(let i = 0 ; i < 5 ; i++){
		$('#list .tiaojian .paixu p:eq('+ i +') a').click(function(){
			clear();
			$('#list .tiaojian .paixu p:eq('+ i +') a').css('background','#c01133');
			$('#list .tiaojian .paixu p:eq('+ i +') a').css('color','#fff');
			$('#list .tiaojian .paixu p:eq('+ i +') a').css('border','1px solid #c01133');
		})
	}
	function clear(){
		for(let i = 0 ; i < 5 ; i++){
			$('#list .tiaojian .paixu p:eq('+ i +') a').css('background','#f8f8f8');
			$('#list .tiaojian .paixu p:eq('+ i +') a').css('color','#666666');
			$('#list .tiaojian .paixu p:eq('+ i +') a').css('border','1px solid #cccccc');
		}
	}
	
	//价格范围栏
	$('#list .tiaojian .jiage .txt1').click(function(event){
		event.stopPropagation(); 
		$('#list .tiaojian .jiage .fanwei').css('display','block');
	})
	$(document).click(function(){
		$('#list .tiaojian .jiage .fanwei').css('display','none');
	})
	$('#list .tiaojian .jiage .fanwei .qingkong').click(function(){
		$('#list .tiaojian .jiage .txt1').val('');
	})
	
	//页数导航
	function clearYeshu(){
		for(let i = 0 ; i < 5 ; i++){
			$('#list .yeshu .numm:eq('+ i +')').css('background','#eeeeee');
			$('#list .yeshu .numm:eq('+ i +')').css('color','#000');
		}
	}
	for(let i = 0 ; i < 5 ; i++){
		$('#list .yeshu .numm:eq('+ i +')').click(function(){
			clearYeshu();
			$('#list .yeshu .numm:eq('+ i +')').css('background','#e9133c');
			$('#list .yeshu .numm:eq('+ i +')').css('color','#fff');
		})
	}
})