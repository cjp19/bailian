define(function(require){
	var $ = require('jquery');
	var cookie = require('cookie');
	
	var zongshu = 0;
	var zongjia = 0;
	
	//配送地址
	$('#main .title .tr .address').mouseover(function(){
		$('#main .title .tr .address .peisong').css('display','block');
	})
	$('#main .title .tr .address').mouseout(function(){
		$('#main .title .tr .address .peisong').css('display','none');
	})
	for(let i = 0 ; i < 3 ; i++){
		$('#main .title .tr .address .peisong .adnav li:eq('+ i +')').click(function(){
			addressclear();
			$('#main .title .tr .address .peisong .adshow div:eq('+ i +')').css('display','block');
			$('#main .title .tr .address .peisong .adnav li:eq('+ i +')').css('background','#fff');
		})
	}
	function addressclear(){
		$('#main .title .tr .address .peisong .adshow div').css('display','none');
		$('#main .title .tr .address .peisong .adnav li').css('background','#f3f3f3');
	}
	
	//商品列表
	var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
	console.log(cartStr);
	if(!cartStr) {
		$(".blank").css({
			display: "block"
		});
		$('#main .shangpin .shangjia').css('display','none');
		$('#main .jiesuan').css('display','none');
	} 
	else {
		console.log(cartStr);
		var cartObj = convertCartStrToObj(cartStr);
		zongshu = 0;
		zongjia = 0;
		//遍历所有的商品生成html添加到购物车列表中去
		for(var id in cartObj) {
			//商品信息对象
			var good = cartObj[id];
			zongshu += good.num;
			zongjia += good.num * good.price;
			//将上面的结构添加到cartList中去
			var str = `<div class="sp" data-good-id="` + id + `">
						<input type="checkbox" class="b3" checked="checked">
						<img src="` + good.src + `">
						<p class="detail">` + good.name + `</p>
						<p class="danjia">￥` + good.price + `</p>
						<div class="jianshu">
							<button class="minus">-</button>
							<span>` + good.num + `</span>
							<button class="add">+</button>
						</div>
						<p class="zongjia"><span>￥</span>` + good.num * good.price + `</p>
						<div class="caozuo">
							<a href="#">移入收藏夹</a>
							<a href="#" class="del">删除</a>
						</div>
					</div>`;
			$(str).appendTo("#main .shangpin");
			$('#main .jiesuan .jine .yuanjia span').html(zongjia);
			$('#main .jiesuan .xuanze i').html(zongshu);
			$('#main .title .tl span').html(zongshu);
		}
		
		$('.sp .caozuo a.del').click(function() {
			//在页面上将商品信息删除，顺便获取一个该商品的id
			var id = $(this).parents('.sp').remove().attr("data-good-id");
			//从cookie中将该商品删除
			var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
			var cartObj = convertCartStrToObj(cartStr);
			delete cartObj[id];
			//将新商品信息放回cookie
			$.cookie('cart', convertObjToCartStr(cartObj), {
				expires: 7,
				path: "/"
			});
			zongshu = 0;
			zongjia = 0;
			var cartStr2 = $.cookie("cart") ? $.cookie("cart") : "";
			var cartObj2 = convertCartStrToObj(cartStr2);
			for(var id in cartObj2){
				var good2 = cartObj2[id];
				zongshu += good2.num;
				zongjia += good2.num * good2.price;
			}
			$('#main .title .tl span').html(zongshu);
			$('#main .jiesuan .jine .yuanjia span').html(zongjia);
			$('#main .jiesuan .xuanze i').html(zongshu);
			
			if(!cartStr2) {
				$(".blank").css({
					display: "block"
				});
				$('#main .shangpin .shangjia').css('display','none');
				$('#main .jiesuan').css('display','none');
			} 
		})
		
		$(".sp .add").click(function() {
		
			var id = $(this).parents('.sp').attr("data-good-id");

			var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
			var cartObj = convertCartStrToObj(cartStr);
			cartObj[id].num += 1;
			//将页面上显示的数量加1
			$(this).siblings("span").html("" + cartObj[id].num);
			//更新页面上的小计
			$(this).parent().siblings('.zongjia').html('￥' + cartObj[id].num * cartObj[id].price + "");
			//将信息放回cookie
			$.cookie('cart', convertObjToCartStr(cartObj), {
				expires: 7,
				path: "/"
			});
			zongshu = 0;
			zongjia = 0;
			var cartStr2 = $.cookie("cart") ? $.cookie("cart") : "";
			var cartObj2 = convertCartStrToObj(cartStr2);
			for(var id in cartObj2){
				var good2 = cartObj2[id];
				zongshu += good2.num;
				zongjia += good2.num * good2.price;
			}
			$('#main .title .tl span').html(zongshu);
			$('#main .jiesuan .jine .yuanjia span').html(zongjia);
			$('#main .jiesuan .xuanze i').html(zongshu);
		});
		//给减按钮添加点击事件
		$(".sp .minus").click(function(){
			var id = $(this).parents('.sp').attr("data-good-id");
			var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
			var cartObj = convertCartStrToObj(cartStr);
			if(cartObj[id].num > 1){ //商品数量减少不能少于1
				cartObj[id].num -= 1;
				//将页面上显示的数量减1
				$(this).siblings("span").html("" + cartObj[id].num);
				//更新页面上的小计
				$(this).parent().siblings('.zongjia').html('￥' + cartObj[id].num * cartObj[id].price + "");
				//将信息放回cookie
				$.cookie('cart', convertObjToCartStr(cartObj), {
					expires: 7,
					path: "/"
				});
			}
			zongshu = 0;
			zongjia = 0;
			var cartStr2 = $.cookie("cart") ? $.cookie("cart") : "";
			var cartObj2 = convertCartStrToObj(cartStr2);
			for(var id in cartObj2){
				var good2 = cartObj2[id];
				zongshu += good2.num;
				zongjia += good2.num * good2.price;
			}
			$('#main .title .tl span').html(zongshu);
			$('#main .jiesuan .jine .yuanjia span').html(zongjia);
			$('#main .jiesuan .xuanze i').html(zongshu);
			
		});
		
		//改数量的input绑定一个blur事件
		$(".sp .jianshu span").blur(function(){
			var id = $(this).parents('.sp').attr("data-good-id");
			var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
			var cartObj = convertCartStrToObj(cartStr);
			//判断用户输入是否合法
			var pattern = /^\d+$/;
			if(!pattern.test($(this).val())){
				cartObj[id].num = 1;
				$(this).val("1");
			}else{
				//修改一下数量
			cartObj[id].num = parseInt($(this).val());
			}
			
			
				$(this).siblings("span").html("" + cartObj[id].num);
				//更新页面上的小计
				$(this).parent().siblings('.zongjia').html(cartObj[id].num * cartObj[id].price + "");
				//将信息放回cookie
				$.cookie('cart', convertObjToCartStr(cartObj), {
					expires: 7,
					path: "/"
				});
		})
	}
	
	function convertCartStrToObj(cartStr) {
		//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
		if(!cartStr) {
			return {};
		}
		var goods = cartStr.split(":");
		var obj = {};
		for(var i = 0; i < goods.length; i++) {
			var data = goods[i].split(",");
			//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
			obj[data[0]] = {
				name: data[1],
				price: parseFloat(data[2]),
				num: parseInt(data[3]),
				src: data[4]
			}
		}
		return obj;
	}
	
	function convertObjToCartStr(obj) {
		var cartStr = "";
		for(var id in obj) {
			if(cartStr) {
				cartStr += ":";
			}
			cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
		}
		return cartStr;
	}
});