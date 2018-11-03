define(function(require){
	//最上面的headtop
	var $ = require('jquery');
	$(window).scroll(function(){
		if($(document).scrollTop() < 126){
			$('.headtop').css('display','none');
		}
		else{
			$('.headtop').css('display','block');
		}
	})
	
	//左侧导航栏
	$(window).scroll(function(){
		if($(document).scrollTop() < 1254){
			$('#leftglobal').css('display','none');
		}
		else{
			$('#leftglobal').css('display','block');
		}
	})
	for(let i = 0 ; i < 8 ; i++){
		$('#leftglobal p:eq(' + i + ')').click(function(){
			goFloor(1160 + 535 * i);
		})
	}
	$('#leftglobal p:eq(8)').click(function(){
		goFloor(0);
	})
	function goFloor(height){
		var $st = $(document).scrollTop();
		var timer = setInterval(function(){
			if($st >= height){
				$st-=50;
				$(document).scrollTop($st);
				if($st <= height){
					clearInterval(timer);
				}
			}
			else{
				$st+=50;
				$(document).scrollTop($st);
				if($st >= height){
					clearInterval(timer);
				}
			}
		},5)
	}
	
	//search栏
	$('#header .search .head_input .txt').click(function(event){
		event.stopPropagation();
		$('#header .search .head_input .searchword').css('display','block');
	});
	$(document).click(function(){
		$('#header .search .head_input .searchword').css('display','none');
	});
	$('#header .search .head_input .searchword .ls .p2').click(function(){
		$('#header .search .head_input .txt').val('');
	});
	for(let i = 0 ; i < $('#header .search .head_input .searchword .lsp').length ; i++){
		$('#header .search .head_input .searchword .lsp:eq('+ i +')').click(function(){
			$('#header .search .head_input .txt').val($('#header .search .head_input .searchword .lsp:eq('+ i +')').html());
		});
	}
	
	//#main #main1 ul的左右切换
	$('#main #main1 .ull .bbnr').click(function(){
		$('#main #main1 .ull .main1-t-r').animate({"left":"-965px"},300,function(){
			$('#main #main1 .ull .bbnr').css('display','none');
			$('#main #main1 .ull .bbnl').css('display','block');
		});
	});
	$('#main #main1 .ull .bbnl').click(function(){
		$('#main #main1 .ull .main1-t-r').animate({"left":0},300,function(){
			$('#main #main1 .ull .bbnl').css('display','none');
			$('#main #main1 .ull .bbnr').css('display','block');
		});
	});
})