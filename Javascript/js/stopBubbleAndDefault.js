        // 功能:停止事件冒泡 
        function stopBubble(e) {
            // 如果提供了事件对象，则这是一个非IE浏览器
            if (e && e.stopPropagation) {
                // 因此它支持W3C的stopPropagation()方法
                e.stopPropagation();
            } else {
                // 否则，我们需要使用IE的方式来取消事件冒泡
                window.event.cancelBubble = true;
            }
        }

        // 功能：阻止事件默认行为
        function stopDefault(e) {
            // 阻止默认浏览器动作(W3C)
            if (e && e.preventDefault) {
                e.preventDefault();
            } else {
                // IE中阻止函数器默认动作的方式
                window.event.returnValue = false;
            }
            return false;
        }
