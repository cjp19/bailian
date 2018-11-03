define(function(require){
	var $ = require('jquery');
	
	var count = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	var count5 = 0;
	var count6 = 0;
	var count7 = 0;
	var count8 = 0;
	var count9 = 0;
	
	var timer1 = null;
	var timer2 = null;
	var timer3 = null;
	var timer4 = null;
	var timer5 = null;
	var timer6 = null;
	var timer7 = null;
	var timer8 = null;
	var timer9 = null;
	
	var sbox = document.querySelector('#main .smalllunbo1 .sbox');
	var sbox2 = document.querySelector('#main .smalllunbo2 .sbox');
	var sbox3 = document.querySelector('#main .smalllunbo3 .sbox');
	var sbox4 = document.querySelector('#main .smalllunbo4 .sbox');
	var sbox5 = document.querySelector('#main .smalllunbo5 .sbox');
	var sbox6 = document.querySelector('#main .smalllunbo6 .sbox');
	var sbox7 = document.querySelector('#main .smalllunbo7 .sbox');
	var sbox8 = document.querySelector('#main .smalllunbo8 .sbox');
	var sbox9 = document.querySelector('#main .smalllunbo9 .sbox');
	
	function clear(){
		$('#main .smalllunbo1 ol li').css('background','white');
	}
	function clear2(){
		$('#main .smalllunbo2 ol li').css('background','white');
	}
	function clear3(){
		$('#main .smalllunbo3 ol li').css('background','white');
	}
	function clear4(){
		$('#main .smalllunbo4 ol li').css('background','white');
	}
	function clear5(){
		$('#main .smalllunbo5 ol li').css('background','white');
	}
	function clear6(){
		$('#main .smalllunbo6 ol li').css('background','white');
	}
	function clear7(){
		$('#main .smalllunbo7 ol li').css('background','white');
	}
	function clear8(){
		$('#main .smalllunbo8 ol li').css('background','white');
	}
	function clear9(){
		$('#main .smalllunbo9 ol li').css('background','white');
	}
	
	function next(){
		count++;
		if(count > 2){
			count = 0;
		}
		move(sbox,{left:-count * 305});
		clear();
		$('#main .smalllunbo1 ol li:eq('+ count +')').css('background','gray');
	}
	function next2(){
		count2++;
		if(count2 > 2){
			count2 = 0;
		}
		clear2();
		$('#main .smalllunbo2 ol li:eq('+ count2 +')').css('background','gray');
		move(sbox2,{left:-count2 * 305});
	}
	function next3(){
		count3++;
		if(count3 > 2){
			count3 = 0;
		}
		move(sbox3,{left:-count3 * 305});
		clear3();
		$('#main .smalllunbo3 ol li:eq('+ count3 +')').css('background','gray');
	}
	function next4(){
		count4++;
		if(count4 > 2){
			count4 = 0;
		}
		move(sbox4,{left:-count4 * 305});
		clear4();
		$('#main .smalllunbo4 ol li:eq('+ count4 +')').css('background','gray');
	}
	function next5(){
		count5++;
		if(count5 > 2){
			count5 = 0;
		}
		move(sbox5,{left:-count5 * 305});
		clear5();
		$('#main .smalllunbo5 ol li:eq('+ count5 +')').css('background','gray');
	}
	function next6(){
		count6++;
		if(count6 > 2){
			count6 = 0;
		}
		move(sbox6,{left:-count6 * 305});
		clear6();
		$('#main .smalllunbo6 ol li:eq('+ count6 +')').css('background','gray');
	}
	function next7(){
		count7++;
		if(count7 > 2){
			count7 = 0;
		}
		move(sbox7,{left:-count7 * 305});
		clear7();
		$('#main .smalllunbo7 ol li:eq('+ count7 +')').css('background','gray');
	}
	function next8(){
		count8++;
		if(count8 > 2){
			count8 = 0;
		}
		move(sbox8,{left:-count8 * 305});
		clear8();
		$('#main .smalllunbo8 ol li:eq('+ count8 +')').css('background','gray');
	}
	function next9(){
		count9++;
		if(count9 > 2){
			count9 = 0;
		}
		move(sbox9,{left:-count9 * 305});
		clear9();
		$('#main .smalllunbo9 ol li:eq('+ count9 +')').css('background','gray');
	}
	
	timer1 = setInterval(function(){
		next();
	},2000);
	timer2 = setInterval(function(){
		next2();
	},1500)
	timer3 = setInterval(function(){
		next3();
	},1500)
	timer4 = setInterval(function(){
		next4();
	},2000);
	timer5 = setInterval(function(){
		next5();
	},1500)
	timer6 = setInterval(function(){
		next6();
	},1500)
	timer7 = setInterval(function(){
		next7();
	},2000);
	timer8 = setInterval(function(){
		next8();
	},1500)
	timer9 = setInterval(function(){
		next9();
	},1500)
	
	for(let i = 0 ; i < 3 ; i++){
		$('#main .main1-b .smalllunbo1 ol li:eq('+ i +')').mouseover(function(){
			clearInterval(timer1);
			$('#main .main1-b .smalllunbo1 .sbox').animate({"left":-i * 305 + "px"},300);
			clear();
			$('#main .smalllunbo1 ol li:eq('+ i +')').css('background','gray');
			count = i;
		})
		$('#main .main1-b .smalllunbo1 ol li:eq('+ i +')').mouseout(function(){
			timer1 = setInterval(function(){
				next();
			},2000);
		})
	}
	for(let i = 0 ; i < 3 ; i++){
		$('#main .smalllunbo2 ol li:eq('+ i +')').mouseover(function(){
			clearInterval(timer2);
			$('#main .smalllunbo2 .sbox').animate({"left":-i * 305 + "px"},300);
			clear2();
			$('#main .smalllunbo2 ol li:eq('+ i +')').css('background','gray');
			count2 = i;
		})
		$('#main .smalllunbo2 ol li:eq('+ i +')').mouseout(function(){
			timer2 = setInterval(function(){
				next2();
			},1500);
		})
	}
	for(let i = 0 ; i < 3 ; i++){
		$('#main .smalllunbo3 ol li:eq('+ i +')').mouseover(function(){
			clearInterval(timer3);
			$('#main .smalllunbo3 .sbox').animate({"left":-i * 305 + "px"},300);
			clear3();
			$('#main .smalllunbo3 ol li:eq('+ i +')').css('background','gray');
			count3 = i;
		})
		$('#main .smalllunbo3 ol li:eq('+ i +')').mouseout(function(){
			timer3 = setInterval(function(){
				next3();
			},1500);
		})
	}
	for(let i = 0 ; i < 3 ; i++){
		$('#main .smalllunbo4 ol li:eq('+ i +')').mouseover(function(){
			clearInterval(timer4);
			$('#main .smalllunbo4 .sbox').animate({"left":-i * 305 + "px"},300);
			clear4();
			$('#main .smalllunbo4 ol li:eq('+ i +')').css('background','gray');
			count4 = i;
		})
		$('#main .smalllunbo4 ol li:eq('+ i +')').mouseout(function(){
			timer4 = setInterval(function(){
				next4();
			},1500);
		})
	}
	for(let i = 0 ; i < 3 ; i++){
		$('#main .smalllunbo5 ol li:eq('+ i +')').mouseover(function(){
			clearInterval(timer5);
			$('#main .smalllunbo5 .sbox').animate({"left":-i * 305 + "px"},300);
			clear5();
			$('#main .smalllunbo5 ol li:eq('+ i +')').css('background','gray');
			count5 = i;
		})
		$('#main .smalllunbo5 ol li:eq('+ i +')').mouseout(function(){
			timer5 = setInterval(function(){
				next5();
			},1500);
		})
	}
	for(let i = 0 ; i < 3 ; i++){
		$('#main .smalllunbo6 ol li:eq('+ i +')').mouseover(function(){
			clearInterval(timer6);
			$('#main .smalllunbo6 .sbox').animate({"left":-i * 305 + "px"},300);
			clear6();
			$('#main .smalllunbo6 ol li:eq('+ i +')').css('background','gray');
			count6 = i;
		})
		$('#main .smalllunbo6 ol li:eq('+ i +')').mouseout(function(){
			timer6 = setInterval(function(){
				next6();
			},1500);
		})
	}
	for(let i = 0 ; i < 3 ; i++){
		$('#main .smalllunbo7 ol li:eq('+ i +')').mouseover(function(){
			clearInterval(timer7);
			$('#main .smalllunbo7 .sbox').animate({"left":-i * 305 + "px"},300);
			clear7();
			$('#main .smalllunbo7 ol li:eq('+ i +')').css('background','gray');
			count7 = i;
		})
		$('#main .smalllunbo7 ol li:eq('+ i +')').mouseout(function(){
			timer7 = setInterval(function(){
				next7();
			},1500);
		})
	}
	for(let i = 0 ; i < 3 ; i++){
		$('#main .smalllunbo8 ol li:eq('+ i +')').mouseover(function(){
			clearInterval(timer8);
			$('#main .smalllunbo8 .sbox').animate({"left":-i * 305 + "px"},300);
			clear8();
			$('#main .smalllunbo8 ol li:eq('+ i +')').css('background','gray');
			count8 = i;
		})
		$('#main .smalllunbo8 ol li:eq('+ i +')').mouseout(function(){
			timer8 = setInterval(function(){
				next8();
			},1500);
		})
	}
	for(let i = 0 ; i < 3 ; i++){
		$('#main .smalllunbo9 ol li:eq('+ i +')').mouseover(function(){
			clearInterval(timer9);
			$('#main .smalllunbo9 .sbox').animate({"left":-i * 305 + "px"},300);
			clear9();
			$('#main .smalllunbo9 ol li:eq('+ i +')').css('background','gray');
			count9 = i;
		})
		$('#main .smalllunbo9 ol li:eq('+ i +')').mouseout(function(){
			timer9 = setInterval(function(){
				next9();
			},1500);
		})
	}
})