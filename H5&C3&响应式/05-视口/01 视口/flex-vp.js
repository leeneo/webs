/*  动态设置可视窗口
 *  采用淘宝类似方案，clientWidth=10rem;
 */
/*{
	"author":"Leeneo/leeneo.cn",
	"version":,"1.0"
  }
*/

window.onload = function () {
	var iScale = 1 / window.devicePixelRatio;
	document.write('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=' + iScale + ', maximum-scale=' + iScale + ', minimum-scale=' + iScale + '" />');
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + "px";
}