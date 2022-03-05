
// 这里是框架JS
$('#fullpage').fullpage({
		
	sectionsColor:['orange','lightseagreen','skyblue','seagreen','hotpink','lightcoral','pink'],
	anchors:['page1','page2','page3','page4','page5','page6','page7'],
	navigation:true,
	verticalCentered:false,
	paddingTop:80,
	afterLoad:function( link,index ){
		
		if( index == 1 ){
			$('.section1 .t1').addClass('animated bounceInLeft');
			$('.section1 .t2').addClass('animated bounceInDown');
			$('.section1 .t3').addClass('animated bounceInRight');
			
			setTimeout(function(){
				$('.section1 dl').addClass("animated bounceIn");
			},1100)
			
		}
	
	},
	onLeave:function(index,nextIndex,dir){
		// 如果我们从某一屏离开之后要去到nextIndex屏，所以我们就应将下一屏所对应的li高亮
		$('.nav_list li').eq(nextIndex-1).addClass('act').siblings().removeClass('act');
		
		if( index == 1 ){
			$('.section1 .t1').removeClass('animated bounceInLeft');
			$('.section1 .t2').removeClass('animated bounceInDown');
			$('.section1 .t3').removeClass('animated bounceInRight');
			
			$('.section1 dl').removeClass("animated bounceIn");
		}
		
	}
	
});

// 点击顶部导航跳转效果
$('.nav_list li').click( function(){
	$(this).addClass('act').siblings().removeClass('act')
} );

