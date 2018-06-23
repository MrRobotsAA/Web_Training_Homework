
   // fn jQuery类添加“成员函数”
    $.fn.fakeLoader = function(options) {
        //extend该方法是将item合并到Jquery的全局对象中去，
        //相当于为Jquery全局对象添加了一个静态方法
        var settings = $.extend({
            timeToHide:1200, 
            pos:'fixed',
            top:'0px',  
            left:'0px', 
            width:'100%', 
            height:'100%', 
            bgColor: 'orange',
            spinner:'spinner04', 
        }, options);
        //自定义div
        var spinner04 = '<div class="fl spinner4"></div>'; 
        //取到当前目标
        var el = $(this);
        //初始样式
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };
        //应用样式
        el.css(initStyles);
        //Each 
        el.each(function() {
             el.html(spinner04);
        });
        //每1200ms进行一次淡出函数调用
        setTimeout(function(){
            $(el).fadeOut();
        }, settings.timeToHide); 
        
        return this.css({
            'backgroundColor':settings.bgColor,
        });

    }; 

        function centerLoader() {
            var winW = $(window).width();
            var winH = $(window).height();
            var spinnerW = $('.fl').outerWidth();
            var spinnerH = $('.fl').outerHeight();
            $('.fl').css({
                'position': 'absolute',
                'left': (winW / 2) - (spinnerW / 2),
                'top': (winH / 2) - (spinnerH / 2)
            });
        }
        $(window).load(function() {
            centerLoader();
        });





