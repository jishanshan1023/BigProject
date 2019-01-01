window.onload = function(){
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
}
function change1(){
	var img1=document.getElementById("img1");
	img1.style.border="2px solid #ff9003";
	var img3=document.getElementById("i11");
	img3.setAttribute("src","img/pp0.jpeg");
	var img2=document.getElementById("img2");
	img2.style.border="";
	var Bimg=document.getElementById("Bimg");
	Bimg.setAttribute("src","img/pp0.jpeg");
	Bimg.style.width="816";
	Bimg.style.height="816";
}
function change2(){
	var img2=document.getElementById("img2");
	img2.style.border="2px solid #ff9003";
	var img22=document.getElementById("i11");
	img22.setAttribute("src","img/pp1.jpeg");
	var img1=document.getElementById("img1");
	img1.style.border="";
	var Bimg=document.getElementById("Bimg");
	Bimg.setAttribute("src","img/pp1.jpeg");
	Bimg.style.width="816";
	Bimg.style.height="816";
}

// function add()
// {
// 	var txt=document.getElementById('txt');
// 	var a=txt.value;
// 	if(a>=5)
//     {
//     	alert('对不起，库存件数不能大于等于9');
//     }
//     else
//     {
//     	a++;
//     	txt.value=a;
//     }
// }
// function jian()
// {
// 	var txt=document.getElementById('txt');
// 	var b=txt.value;
// 	if(b<=1)
// 	{
// 		alert('对不起，库存件数不能为0');
// 	}
// 	else
// 	{
// 		b--;
// 		txt.value=b;
// 	}
// }
