define(function(require){
	var $ = require('jquery');
	
	$('#register .biaodan .name input').focus(function(){
		if(!$('#register .biaodan .name input').val()){
			$('#register .biaodan .name span').html('请输入用户名');
			$('#register .biaodan .name span').css("background","url(gulp/dist/images/tan.png) no-repeat 4px 5px");
		}
	})
	$('#register .biaodan .name input').blur(function(){
		var nameValue = $('#register .biaodan .name input').val();
		var reg = /^[a-zA-Z\d_]{6,20}$/;
		if(!$('#register .biaodan .name input').val()){
			$('#register .biaodan .name span').html('请输入用户名');
			$('#register .biaodan .name span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
		}
		else{
			if(reg.test(nameValue)){
				$('#register .biaodan .name span').html('');
				$('#register .biaodan .name span').css("background","url(gulp/dist/images/gou.png) no-repeat 4px 5px");
			}
			else{
				$('#register .biaodan .name span').html('用户名长度只能在6-20位字符之间');
				$('#register .biaodan .name span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
			}
		}
	});
	
	$('#register .biaodan .pwd input').focus(function(){
		if(!$('#register .biaodan .pwd input').val()){
			$('#register .biaodan .pwd span').html('请输入密码');
			$('#register .biaodan .pwd span').css("background","url(gulp/dist/images/tan.png) no-repeat 4px 5px");
		}
	})
	$('#register .biaodan .pwd input').blur(function(){
		var pwdValue = $('#register .biaodan .pwd input').val();
		var reg = /^[a-zA-Z\d]{8,20}$/;
		if(!$('#register .biaodan .pwd input').val()){
			$('#register .biaodan .pwd span').html('请输入密码');
			$('#register .biaodan .pwd span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
		}
		else{
			if(reg.test(pwdValue)){
				$('#register .biaodan .pwd span').html('');
				$('#register .biaodan .pwd span').css("background","url(gulp/dist/images/gou.png) no-repeat 4px 5px");
			}
			else{
				$('#register .biaodan .pwd span').html('登陆密码必须是8-20位字符');
				$('#register .biaodan .pwd span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
			}
		}
	});
	
	$('#register .biaodan .repwd input').focus(function(){
		if(!$('#register .biaodan .repwd input').val()){
			$('#register .biaodan .repwd span').html('请输入确认密码');
			$('#register .biaodan .repwd span').css("background","url(gulp/dist/images/tan.png) no-repeat 4px 5px");
		}
	})
	$('#register .biaodan .repwd input').blur(function(){
		var pwdValue = $('#register .biaodan .pwd input').val();
		var repwdValue = $('#register .biaodan .repwd input').val();
		if(!$('#register .biaodan .repwd input').val()){
			$('#register .biaodan .repwd span').html('请输入确认密码');
			$('#register .biaodan .repwd span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
		}
		else{
			if(repwdValue == pwdValue){
				$('#register .biaodan .repwd span').html('');
				$('#register .biaodan .repwd span').css("background","url(gulp/dist/images/gou.png) no-repeat 4px 5px");
			}
			else{
				$('#register .biaodan .repwd span').html('确认密码与登录密码不一致');
				$('#register .biaodan .repwd span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
			}
		}
	});
	
	$('#register .biaodan .phone input').focus(function(){
		if(!$('#register .biaodan .phone input').val()){
			$('#register .biaodan .phone span').html('请输入手机号码');
			$('#register .biaodan .phone span').css("background","url(gulp/dist/images/tan.png) no-repeat 4px 5px");
		}
	})
	$('#register .biaodan .phone input').blur(function(){
		var phoneValue = $('#register .biaodan .phone input').val();
		var reg = /^1(3|5|7|8)[0-9]{9}$/;
		if(!$('#register .biaodan .phone input').val()){
			$('#register .biaodan .phone span').html('请输入手机号码');
			$('#register .biaodan .phone span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
		}
		else{
			if(reg.test(phoneValue)){
				$('#register .biaodan .phone span').html('');
				$('#register .biaodan .phone span').css("background","url(gulp/dist/images/gou.png) no-repeat 4px 5px");
			}
			else{
				$('#register .biaodan .phone span').html('请输入正确的手机号码');
				$('#register .biaodan .phone span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
			}
		}
	});
	
	$('#register .biaodan .duanxin input').focus(function(){
		if(!$('#register .biaodan .duanxin input').val()){
			$('#register .biaodan .duanxin span').html('请输入短信验证码');
			$('#register .biaodan .duanxin span').css("background","url(gulp/dist/images/tan.png) no-repeat 4px 5px");
		}
	})
	$('#register .biaodan .duanxin input').blur(function(){
		var duanxinValue = $('#register .biaodan .duanxin input').val();
		var reg = /^[0-9]{4}$/;
		if(!$('#register .biaodan .duanxin input').val()){
			$('#register .biaodan .duanxin span').html('请输入短信验证码');
			$('#register .biaodan .duanxin span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
		}
		else{
			if(reg.test(duanxinValue)){
				$('#register .biaodan .duanxin span').html('');
				$('#register .biaodan .duanxin span').css("background","url(gulp/dist/images/gou.png) no-repeat 4px 5px");
			}
			else{
				$('#register .biaodan .duanxin span').html('短信验证码格式错误');
				$('#register .biaodan .duanxin span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
			}
		}
	});
	$('#register .biaodan .email input').blur(function(){
		var emailValue = $('#register .biaodan .email input').val();
		var reg = /^\w+@\w+.com$/;
		if(!$('#register .biaodan .email input').val()){
			$('#register .biaodan .email span').html();
		}
		else{
			if(reg.test(emailValue)){
				$('#register .biaodan .email span').html('');
				$('#register .biaodan .email span').css("background","url(gulp/dist/images/gou.png) no-repeat 4px 5px");
			}
			else{
				$('#register .biaodan .email span').html('请输入正确的电子邮箱');
				$('#register .biaodan .email span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
			}
		}
	});
	
	function randomNum(min,max){
		return parseInt(Math.random() * ( max - min ) + min);
	}
	$('#register .biaodan .yanzheng .s1').html(randomNum(1000,9999));
	$('#register .biaodan .yanzheng b').click(function(){
		$('#register .biaodan .yanzheng .s1').html(randomNum(1000,9999));
	});
	$('#register .biaodan .yanzheng input').blur(function(){
		var maValue = $('#register .biaodan .yanzheng .s1').html();
		var yanzhengValue = $('#register .biaodan .yanzheng input').val();
		if(!$('#register .biaodan .yanzheng input').val()){
			$('#register .biaodan .yanzheng span').html();
		}
		else{
			if(maValue == yanzhengValue){
				$('#register .biaodan .yanzheng span').html('');
				$('#register .biaodan .yanzheng span').css("background","url(gulp/dist/images/gou.png) no-repeat 4px 5px");
			}
			else{
				$('#register .biaodan .yanzheng span').html('验证码错误，请正确输入');
				$('#register .biaodan .yanzheng span').css("background","url(gulp/dist/images/cha.png) no-repeat 4px 5px");
			}
		}
	});
})