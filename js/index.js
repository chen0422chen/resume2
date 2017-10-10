// alert(1)
// 弹出框

$(function(){
	// 选中所有按钮添加点击事件
	$(".tab .anniu_box .anniu").click(function(){
		// 所有内容隐藏
		$(".tab .content_box ul").hide();
        // num表示点击的按钮是哪个
		var num = $(".tab .anniu_box .anniu").index($(this));
		// 把对应的内容显示出来
		$(".tab .content_box ul").eq(num).show();
		// 把所有的按钮背景色去掉
		$(".tab .anniu_box .anniu").css({
			"background":"rgba(0,0,0,0)"
		})
		// 把对应按钮的背景色添加
		$(this).css({
        "background":"#4eb2d6"
		})
	})

	$(".backtop").backTop();
	//$(".backtop") 返回按钮父容器 
// 向下滚动
$(".sanjiao").click(function () {
        $({dNum:0}).animate({dNum:700},{
            duration:1000,
            step: function () {
                $(window).scrollTop(this.dNum);
            }
        })
    });

$("nav .nav li:eq(0)").click(function (){
	$({num:$(window).scrollTop()}).animate({num:0},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});
$("nav .nav li:eq(1)").click(function (){
	$({num:$(window).scrollTop()}).animate({num:700},{
		duration:700,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});
$("nav .nav li:eq(2)").click(function (){
	$({num:$(window).scrollTop()}).animate({num:1300},{
		duration:700,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});
$("nav .nav li:eq(3)").click(function (){
	$({num:$(window).scrollTop()}).animate({num:2000},{
		duration:700,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});
$("nav .nav li:eq(4)").click(function (){
	$({num:$(window).scrollTop()}).animate({num:3500},{
		duration:700,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});











})
