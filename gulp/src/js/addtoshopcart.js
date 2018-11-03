define(function(require){
	//把商品信息存入cookie中
	var $ = require('jquery');
	var cookie = require('cookie');
	$('#list .goodslist li .add').click(function(e){
		$(".blank").css({
			display: "none"
		});
		//获取商品的id（用来区分不同的商品）
		var goodId = $(this).parent().attr("data-good-id");
		//获取商品的名称
		var goodName = $(this).siblings('p').eq(1).html();
		//获取商品的价格
		var goodPrice = parseFloat($(this).siblings("p").eq(0).children('span').html());
		console.log(goodPrice);
		//获取商品的图片src
		var goodSrc = $(this).siblings(".aimg").children().attr("src");
		
		var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
		//将字符串转成对象
		var cartObj = convertCartStrToObj(cartStr);
		//判断该商品是否已经在购物车中存在
		if(goodId in cartObj){
			//如果已存在，那么该商品的数量加1
			cartObj[goodId].num += 1;
		}else{
			//如果不存在，那么将新商品的信息存入
			cartObj[goodId] = {
				name : goodName,
				price : goodPrice,
				num : 1,
				src : goodSrc
			};
		}
		cartStr = convertObjToCartStr(cartObj);
		$.cookie("cart",cartStr,{expires : 7,path:"/"});
		
		//飞入购物车的效果
		var cloneImg = $(this).siblings(".aimg").children('img').clone().css({width:50,height:50});
		cloneImg.fly({
			start : {
				top : e.clientY,
				left : e.clientX
			},
			end :{
				top : 300,
				left : $('#shopcart .gongneng .gouwuche span').offset().left,
				width:0,
				height:0
			},
			autoPlay : true,
			onEnd : function(){
				$('#shopcart .gongneng .gouwuche span').html(function(index,v){
			//"购物车（0）"
			var pattern = /(\d+)/;
			var num = parseInt(v.match(pattern)[1]);
			return (num + 1);
		});
		cloneImg.remove();
			}
		})
	})
	
	function convertCartStrToObj(cartStr){
		if(!cartStr){
			return {};
		}
		var goods = cartStr.split(":");
		var obj = {};
		for(var i = 0; i < goods.length; i ++){
			var data = goods[i].split(",");
			obj[data[0]] = {
				name : data[1],
				price : parseFloat(data[2]),
				num : parseInt(data[3]),
				src : data[4]
			}
		}
		return obj;
	}
	function convertObjToCartStr(obj){
			var cartStr = "";
			for(var id in obj){
				if(cartStr){
					cartStr += ":";
				}
				cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
			}
			return cartStr;
	}
})