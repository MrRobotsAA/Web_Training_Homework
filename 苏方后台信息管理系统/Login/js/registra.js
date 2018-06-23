// user
var user_value = false;
var password_value = false;
var varconfirm_value = false;
var emaile_value = false;
var Mobile_value = false;
//当该文本框失去焦点时
//test 匹配字符串是否符合某个模式
//html方法覆盖匹配内容
$('.reg_user').blur(function(){
  if ((/^[a-z0-9_-]{4,8}$/).test($(".reg_user").val())){
    $('.user_hint').html("✔").css("color","green");
    user_value = true;
  }else {
    $('.user_hint').html("×").css("color","red");
    user_value = false;
  }
});
// password
$('.reg_password').blur(function(){
  if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())){
    $('.password_hint').html("✔").css("color","green");
    password_value = true;
  }else {
    $('.password_hint').html("×").css("color","red");
    password_value = false;
  }
});


// password_confirm
$('.reg_confirm').blur(function(){
  if (($(".reg_password").val())==($(".reg_confirm").val())){
    $('.confirm_hint').html("✔").css("color","green");
    varconfirm_value = true;
  }else {
    $('.confirm_hint').html("×").css("color","red");
    varconfirm_value = false;
  }
});


// Email
$('.reg_email').blur(function(){
  if ((/^([a-zA-Z0-9_])+@([a-zA-Z0-9])+(.[a-zA-Z0-9_])+$/).test($(".reg_email").val())){
    $('.email_hint').html("✔").css("color","green");
    emaile_value = true;
  }else {
    $('.email_hint').html("×").css("color","red");
    emaile_value = false;
  }
});


// Mobile
$('.reg_mobile').blur(function(){
  if ((/^1[34578]\d{9}$/).test($(".reg_mobile").val())){
    $('.mobile_hint').html("✔").css("color","green");
    Mobile_value = true;
  }else {
    $('.mobile_hint').html("×").css("color","red");
    Mobile_value = false;
  }
});


// click
$('.red_button').click(function(){
if((user_value && password_value && varconfirm_value && emaile_value && Mobile_value) == true){
    alert("注册成功");
    window.open("index.html",'_self');
  }  
  else {
    alert("请完善信息");
  }
});
