var i = 0;
var firstimg = $('.img li').first().clone(); //复制第一张图片
$('.img').append(firstimg).width($('.img li').length * ($('.img img').width())); 
//将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
// 下一个按钮
$('.next').click(function() {
	i++;
	if (i == $('.img li').length) {
		i = 1; 
		$('.img').css({
			left: 0
		}); //保证无缝轮播，设置left值
	};
	$('.img').animate({
		left: -i * 1150
	}, 480);
	
})
// 上一个按钮
$('.prev').click(function() {
	i--;
	if (i == -1) {
		i = $('.img li').length - 2;
		$('.img').css({
			left: -($('.img li').length - 1) * 1150
		});
	}
	$('.img').animate({
		left: -i * 1150
	}, 480);
})
//设置按钮的显示和隐藏
$('.banner').hover(function() {
	$('.btn').show();//浮动在上面
}, function() {
	$('.btn').hide();
})

