define(function(){
	//bannerÂÖ²¥Í¼
// 	var oHh = document.querySelector('#main3');
// 	oHh.onclick = function(evt){
// 		var e = evt || window.event;
// 		var asd = e.pageY;
// 		console.log(asd);
// 	}
	var oBox = document.querySelector('#banner .box');
	var oBanner = document.querySelector('#banner');
	var oImg = document.querySelectorAll('#banner .tu img');
	var oTu = document.querySelector('#banner .tu');
	var oBtn1 = document.querySelector('#banner .btn1');
	var oBtn2 = document.querySelector('#banner .btn2');
	var ol = document.querySelector('#banner .box ol');
	var timer = null;
	var count = 0;

	oImg[0].style.opacity = 1;
	oImg[0].style.filter = 'alpha(opacity=100)';
	var str = '';
	for(let i = 0 ; i < oImg.length ; i++){
		str += '<li></li>';
	}
	ol.innerHTML = str;
	
	function next(){
		count++;
		if(count > oImg.length - 1){
			count = 0;
		}
		clear();
		oLi[count].className = 'active';
		move(oImg[count],{opacity:100});
		if(count == 0){
			oBanner.style.background = "#79955b";
		}
		if(count == 1){
			oBanner.style.background = "#ffecee";
		}
		if(count == 2){
			oBanner.style.background = "#eff6ff";
		}
		if(count == 3){
			oBanner.style.background = "#ffe5aa";
		}
	}
	function pre(){
		count--;
		if(count < 0){
			count = 3;
		}
		clear();
		oLi[count].className = 'active';
		move(oImg[count],{opacity:100});
		if(count == 0){
			oBanner.style.background = "#79955b";
		}
		if(count == 1){
			oBanner.style.background = "#ffecee";
		}
		if(count == 2){
			oBanner.style.background = "#eff6ff";
		}
		if(count == 3){
			oBanner.style.background = "#ffe5aa";
		}
	}

	function clear(){
		for(let i = 0 ; i < oImg.length ; i++){
			move(oImg[i],{opacity:0});
			oLi[i].className = '';
		}
	}
	oBtn1.onclick = function(){
		pre();
	}
	oBtn2.onclick = function(){
		next();
	}

	var oLi = document.querySelectorAll('ol li');
	oLi[0].className = 'active';
	for(let i = 0 ; i < oLi.length ; i++){
		oLi[i].onmouseover = function(){
			clear();
			oLi[i].className = 'active';
			move(oImg[i],{opacity:100});
			count = i;
			if(count == 0){
				oBanner.style.background = "#79955b";
			}
			if(count == 1){
				oBanner.style.background = "#ffecee";
			}
			if(count == 2){
				oBanner.style.background = "#eff6ff";
			}
			if(count == 3){
				oBanner.style.background = "#ffe5aa";
			}
		}
	}

	timer = setInterval(function(){
		next();
	},3000);
	oBox.onmouseover = function(){
		oBtn1.style.display = 'block';
		oBtn2.style.display = 'block';
		clearInterval(timer);
	}
	oBox.onmouseout = function(){
		oBtn1.style.display = 'none';
		oBtn2.style.display = 'none';
		timer = setInterval(function(){
			next();
		},3000);
	}
			
})
