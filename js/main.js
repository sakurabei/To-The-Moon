var can;
var ctx;
var w;
var h;
var moonPic = new Image();
var starPic = new Image();

var num =60;
var stars = [];

var lastTime;
var deltaTime;

var switchy = false;
var life = 0;

function init(){
	// console.log("a");
	// 获取canvas
	can = document .getElementById("canvas");
	ctx = can.getContext("2d");
	w=can.width;
	h=can.height;
// 添加鼠标事件
	document.addEventListener("mousemove",mousemove,false);



	moonPic.src="src/background.png";
	starPic.src="src/star.png";

	for(var i=0;i<num;i++){
		var obj = new starObj();
		// stars[i]=new starObj();
		stars.push(obj);
		stars[i].init();

	}
	// console.log(w);
	lastTime = Date.now();
	gameloop();
	
}
// 循环调用的三种方法
// requestAnimFrame（function（）{}）；根据不同浏览器进行适配
// setTimeout（function（）{}，time）；三秒之后调用function（）
// setInterval（function（）{}，time）； 先调用function（）三秒之后再次调用function

document.body.onload= init;
// 一阵一阵的渲染
function gameloop(){
	window.requestAnimFrame(gameloop);
	var now = Date .now();
	deltaTime = now-lastTime;
	lastTime = now;

	// console.log(deltaTime);
	drawBackground();
	drawPicture();
	// drawStar();
	drawStars();
	aliveUpdate();
}
function drawBackground(){
	ctx.fillStyle='#393550';
	ctx.fillRect(0,0,w,h);
}
function drawPicture(){
	// drawImage(img,x,y);
	// x轴坐标正方向向右，y轴坐标正方向向下，（0,0）在canvas左上角
	ctx .drawImage(moonPic,100,150,600,300);
}

function mousemove(e){
	if(e.offsetX || e.layerX){
		var px = e.offsetX == undefined ? e.layerX:e.offsetX;
		var py = e.offsetY == undefined ? e.layerY:e.offsetY;
		// out switchy = false ;
		// in switchy = true;
		// console.log(px); 
		// px在范围内，py也在范围内
		if(px > 100 && px < 700 && py > 150 && py < 450){
			switchy = true;
		}else{
			switchy = false;
		}
		console.log(switchy);
	}
}