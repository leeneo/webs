var aLi = $('.list > li');
var iH  = $(window).height();

var strartY,moveY,endY,nowIndex,nextIndex;

aLi.on( 'touchstart',startFn );


//
aLi.on( 'transitionend',function(){
	
	aLi.eq(nextIndex).css( {'transition':''} )
	aLi.eq(nextIndex).show().siblings().hide();
	
	// 当上一屏的滑动动画结束之后开启下一屏动画
	aLi.on( 'touchstart',startFn );
	
} );

// 定义手指按下函数
function startFn(ev){
	
	nowIndex = $(this).index();
	strartY = ev.originalEvent.changedTouches[0].clientY;
	
	$(this).on( 'touchmove', moveFn);
	
	$(this).on( 'touchend', endFn);
	
}

// 定义手指滑动函数
function moveFn(ev){
	endY = ev.originalEvent.changedTouches[0].clientY;
	
	if( strartY > endY ){
	
		nextIndex = nowIndex+1;
		if( nextIndex == 4 ){
			nextIndex = 0
		}
		
		// 无论是上滑还是下滑，我们需要做的第一步就是找到下一屏li然后让它显示出来
		aLi.eq(nextIndex).show();
		aLi.eq(nextIndex).addClass('act').siblings().removeClass('act');
		
		// 当我们拿到了下一屏的编号之后需要做的事情就是拿着这个编号去
		// li所在的集合找到对应的 li 让它向中做动画。
		moveY = strartY - endY;
		aLi.eq(nextIndex).css( 'top',iH-moveY );
		
		console.log( nextIndex );
	
	}else if( strartY < endY ){
		nextIndex = nowIndex-1;
		if( nextIndex == -1 ){
			nextIndex = 3
		}
		
		aLi.eq(nextIndex).show();
		aLi.eq(nextIndex).addClass('act').siblings().removeClass('act');
		
		// 当我们拿到了下一屏的编号之后需要做的事情就是拿着这个编号去
		// li所在的集合找到对应的 li 让它向中做动画。
		moveY = endY - strartY;
		aLi.eq(nextIndex).css( 'top',-iH+moveY );
		console.log( '下' );
	}
	
}

// 定义手指抬起函数
function endFn(ev){
	// 当手指抬起时我们需要让下一屏运动到目标点（ 都是top为0的位置 ）
	aLi.eq(nextIndex).css('top',0);
	aLi.eq(nextIndex).css( {'transition':'all .5s'} )
	endY = ev.originalEvent.changedTouches[0].clientY;
	
	if( endY != strartY ){
		aLi.off( 'touchmove touchstart touchend' );
	}
	
}