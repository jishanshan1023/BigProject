function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

function x(){
	var c22=document.getElementById("c22");
	var option=document.getElementsByTagName("option");
	var span=document.getElementsByTagName("span")[5];
	for(var i=0;i<option.length;i++){
		if(option[i].selected){
			span.innerHTML="￥"+option[i].innerText;
			break;
		}
	}
	// span.innerText="￥"+option[c22.selectedIndex].innerText;	
}

window.onload = function () {
    var cover=document.getElementsByClassName("cover")[0];
    window.onscroll = function(){
        var st=document.documentElement.scrollTop || document.body.scrollTop;
        if(st>180){
            cover.style.position ="fixed";
        }
        else{
            cover.style.position ="static";
        }
    }
        var oDiv = document.getElementById('div1');
        oDiv.style.right = '-79px';
        oDiv.onmouseover = function () {
            startMove1(1);
        };
        oDiv.onmouseout = function () {
            startMove1(0);
        }
    
    var timer1 = null;
    function startMove1(iTarget) {
        var oDiv = document.getElementById('div1');
        var speed = 1;
        clearInterval(timer1);
        timer1 = setInterval(function () {
            if(iTarget){
                oDiv.style.right = parseFloat(oDiv.style.right) + speed + 'px';
                if(parseFloat(oDiv.style.right) >= 0){
                    oDiv.style.right = '0';
                    window.clearInterval(timer1);
                }
            }else {
                oDiv.style.right = parseFloat(oDiv.style.right) - speed + 'px';
                if(parseFloat(oDiv.style.right) <= -79){
                    oDiv.style.right = '-79px';
                    window.clearInterval(timer1);
                }
            }
        }, 5);
    }

    var oDiv2 = document.getElementById('div2');
    oDiv2.style.right = '-79px';
    oDiv2.onmouseover = function () {
        startMove2(1);
    };
    oDiv2.onmouseout = function () {
        startMove2(0);
    }

    var timer2 = null;
    function startMove2(iTarget) {
        var oDiv2 = document.getElementById('div2');
        var speed = 1;
        clearInterval(timer2);
        timer2 = setInterval(function () {
            if(iTarget){
                oDiv2.style.right = parseFloat(oDiv2.style.right) + speed + 'px';
                if(parseFloat(oDiv2.style.right) >= 0){
                    oDiv2.style.right = '0';
                    window.clearInterval(timer2);
                }
            }else {
                oDiv2.style.right = parseFloat(oDiv2.style.right) - speed + 'px';
                if(parseFloat(oDiv2.style.right) <= -79){
                    oDiv2.style.right = '-79px';
                    window.clearInterval(timer2);
                }
            }
        }, 5);
    }

    var oDiv3 = document.getElementById('div3');
    oDiv3.style.right = '-79px';
    oDiv3.onmouseover = function () {
        startMove3(1);
    };
    oDiv3.onmouseout = function () {
        startMove3(0);
    }

    var timer3 = null;
    function startMove3(iTarget) {
        var oDiv3 = document.getElementById('div3');
        var speed = 1;
        clearInterval(timer3);
        timer3 = setInterval(function () {
            if(iTarget){
                oDiv3.style.right = parseFloat(oDiv3.style.right) + speed + 'px';
                if(parseFloat(oDiv3.style.right) >= 0){
                    oDiv3.style.right = '0';
                    window.clearInterval(timer3);
                }
            }else {
                oDiv3.style.right = parseFloat(oDiv3.style.right) - speed + 'px';
                if(parseFloat(oDiv3.style.right) <= -79){
                    oDiv3.style.right = '-79px';
                    window.clearInterval(timer3);
                }
            }
        }, 5);
    }

    var oDiv4 = document.getElementById('div4');
    oDiv4.style.right = '-79px';
    oDiv4.onmouseover = function () {
        startMove4(1);
    };
    oDiv4.onmouseout = function () {
        startMove4(0);
    }

    var timer4 = null;
    function startMove4(iTarget) {
        var oDiv4 = document.getElementById('div4');
        var speed = 1;
        clearInterval(timer4);
        timer4 = setInterval(function () {
            if(iTarget){
                oDiv4.style.right = parseFloat(oDiv4.style.right) + speed + 'px';
                if(parseFloat(oDiv4.style.right) >= 0){
                    oDiv4.style.right = '0';
                    window.clearInterval(timer4);
                }
            }else {
                oDiv4.style.right = parseFloat(oDiv4.style.right) - speed + 'px';
                if(parseFloat(oDiv4.style.right) <= -79){
                    oDiv4.style.right = '-79px';
                    window.clearInterval(timer4);
                }
            }
        }, 5);
    }
}
    