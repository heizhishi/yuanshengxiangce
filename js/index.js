//大总管变量
var c = 0;
//获得屏幕高度
var win_height = $(window).height();
//获取总屏数
var num=$("#container .box").length;
$("body").swipeUp(function() {
	c++;
	if(c==num){
		c=num-1;
		return;
	}
	if(c==-1){
		c=0;
		return;
	}
	//找到c号box里面的运动元素，删除他们的animated class
	$("#container .box").eq(c).find(".ani").hide().removeClass("animated");
	setTimeout(function() {
		$("#container .box").eq(c).find(".ani").show().addClass("animated");
	}, 1000);
	//计算应该到达的top值
	var t = c * -win_height;
	//将应该到达的top值赋值过去
	$("#container").css({
		"top": t
	});
})
$("body").swipeDown(function() {
	c--;
	if(c==-1){
		c=0;
		return;
	}
	//找到c号box里面的运动元素，删除他们的animated class
	$("#container .box").eq(c).find(".ani").hide().removeClass("animated");
	setTimeout(function() {
		$("#container .box").eq(c).find(".ani").show().addClass("animated");
	}, 1000);
	//计算应该到达的top值
	var t = c * -win_height;
	//将应该到达的top值赋值过去
	$("#container").css({
		"top": t
	});
})

//音乐控制
//抓元素
var music = document.getElementById("music");
var music_bg = music.getElementsByClassName("music_bg")[0];
var music_pic = music.getElementsByClassName("music_pic")[0];
var aud = music.getElementsByTagName("audio")[0];
//定义音乐状态变量
var music_sta = 1;
music.onclick = function() {
		if(music_sta == 1) {
			aud.pause();
			music_bg.style = "display:none";
			music_pic.style.animation = "none"; //或者music_pic.style.animationPlayState="paused";
			music_sta = 2;
		} else if(music_sta == 2) {
			music_bg.style = "display:block";
			music_pic.style.animation = "musicRun 3s infinite linear"; //或者music_pic.style.animationPlayState="running";
			aud.play();
			music_sta = 1;
		}
	}
	//音乐控制