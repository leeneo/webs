var panTit = document.getElementsByClassName('panTit')[0]
if (!panTit) {
    panTit = document.createElement('div')
    var panTx = document.createTextNode('倒计时')
    panTit.appendChild(panTx)
    panTit.setAttribute('class', 'panTit')
    panTit.style.cssText = 'position: relative; background: #dff0d8; font-size: 1.6rem; color: #333; text-align: enter; height: 3rem; line-height: 3rem;'
    document.body.appendChild(panTit)
}

var span = document.createElement('span');
span.setAttribute('id', 'showTime')
span.style.cssText = 'position: absolute;' +
    'top: -50%;' +
    'right: 1rem; ' +
    'color: orange; ' +
    'border: 1px solid orange; ' +
    'border-radius: 50%; ' +
    'width: 2rem; ' +
    'height: 2rem; ' +
    'overflow: hidden; ' +
    'line-height: 2rem; ' +
    'font-size: 1.4rem; ' +
    'margin-top: 2rem; '

panTit.style.position = 'relative'
panTit.appendChild(span)

var banTime = new Date().getTime() + 60 * 1000 //设置过期时期（未来的某一点，比如30分钟以后(30*60*1000)），不变量
function setTime() {
    var nowTime = new Date().getTime() //现在的时间，变量
    var newDate = new Date(Number(banTime - nowTime)).toLocaleString()
    var str = new Array();
    str = newDate.split(':');
    console.log(str)
    if (str[2] === '00')
        location.reload()
    span.innerHTML = str[2]
}
setInterval('setTime()', 1000)