define(function(require){
	//向右侧购物车栏插入内容
	var $ = require('jquery');
	var cookie = require('cookie');
	indexShowcart();
	function indexShowcart(){
		var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
		console.log(cartStr);
		if(!cartStr) {
			$(".blank").css({
				display: "block"
			});
		} 
		else {
			$('#shopcart .goods').remove();
			console.log(cartStr);
			var cartObj = convertCartStrToObj(cartStr);
			var zongshu = 0;
			var zongjia = 0;
			for(var id in cartObj) {
				var good = cartObj[id];
				zongshu += good.num;
				zongjia += good.num * good.price;
				var str = `<div class="goods" data-good-id="` + id + `">
							<a href="#"><img src="` + good.src + `"></a>
							<div class="name">
								<a href="#"><p class="shang">` + good.name + `</p></a>
								<p class="xia">` + good.price + `*` + good.num + `</p>
							</div>
							<div class="price"><span>￥</span>` + good.num * good.price + `</div>
						</div>`;
				$(str).appendTo("#shopcart .detail .xinxidetail .list");
				$('#shopcart .gongneng .gouwuche span').html(zongshu);
				$('#shopcart .detail .xinxidetail .chakan p .s1').html(zongshu);
				$('#shopcart .detail .xinxidetail .chakan p .s2').html(zongjia);
			}
		}
	}
	$('#list .goodslist li .add').click(function(e){
		indexShowcart();
	});
	
	
	function convertCartStrToObj(cartStr) {
		if(!cartStr) {
			return {};
		}
		var goods = cartStr.split(":");
		var obj = {};
		for(var i = 0; i < goods.length; i++) {
			var data = goods[i].split(",");
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