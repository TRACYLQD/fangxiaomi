window.onload = function(){
	
	var nav = document.getElementsByClassName('nav_list');
	var nav_list = document.getElementsByClassName('nav_list')[0].getElementsByTagName('li');
	var nav_show = document.getElementsByClassName('nav_show');
	var banner = document.getElementById('banner');
	var img_list = document.getElementsByClassName('banner_img')[0].getElementsByTagName('div');
	var prve = document.getElementById('prve');
	var next = document.getElementById('next');
	var buttons = document.getElementsByClassName('buttons')[0].getElementsByTagName('span');
	var arrow = document.getElementsByClassName('arrow')[0];
	var left = document.getElementById('left');
	var right = document.getElementById("right");
	var xmstart = document.getElementById('xm_start_page');
	var xmstartbt = document.getElementById('xm_start_bt').getElementsByTagName('a');
	var xmstart1 = document.getElementById('xm_start_page1');
	var xmstartbt1 = document.getElementById('xm_start_bt1').getElementsByTagName('a');
	var toplist1 = document.getElementById('toplist1').getElementsByTagName('li');
	var mid_rt1 = document.getElementById('mid_rt1').getElementsByTagName('ul');
	var toplist2 = document.getElementById('toplist2').getElementsByTagName('li');
	var mid_rt2 = document.getElementById('mid_rt2').getElementsByTagName('ul');
	var toplist3 = document.getElementById('toplist3').getElementsByTagName('li');
	var mid_rt3 = document.getElementById('mid_rt3').getElementsByTagName('ul');
	index = 0 ;
	var timer = null;






// 二级菜单
	for(var i=0;i<nav_list.length-2;i++){

		nav_list[i].index = i;

		nav_list[i].onmouseover = function(){

			move(nav_show[this.index],250);

		}
		nav_list[i].onmouseout = function(){

			 move(nav_show[this.index],0);
		}
	}



// 二级菜单运动
	function move(obj,iTarget){
		var time =null;

		clearInterval(obj.time);

		obj.time = setInterval(function(){

			var speed = (iTarget-obj.offsetHeight)/10;

			speed=speed>0?Math.ceil(speed) : Math.floor(speed);

			if(obj.offsetHeight == iTarget){

				clearInterval(obj.time);
			}
			else{
				obj.style.height = obj.offsetHeight + speed + 'px';
			}
		},10)
	}



// 获取当前banner下小圆点元素的下标
	function animate(myindex){

		for(var j=0;j<buttons.length;j++){

			img_list[j].className = 'hide';

			buttons[j].className = '';
		}
		buttons[myindex].className = 'light';

		img_list[myindex].className = 'show';

		index = myindex;
	}



// 按钮切换
	for(var k=0 ;k<buttons.length;k++){

		buttons[k].index = k;

		buttons[k].onclick = function(){

			animate(this.index);
		}
	}



// 上一个
	prve.onclick = function(){
		index--;

		if(index<0){

			index=6;
		}
		animate(index);
	}



// 下一个
	next.onclick = function(){
		index++;

		if(index>6){

			index=0;
		}
		animate(index);
	}



// 自动播放
	function play(){

		clearTimeout(timer);

		timer=setTimeout(function(){

			next.onclick();

			play();

		},4000);
	}



// 停止自动播放
	function stop(){
		clearTimeout(timer);
	}



// 检查鼠标移动时自动轮播的状态

	banner.onmouseover =stop;
	banner.onmouseout = play;

// 调用自动播放的函数实现自动轮播 play();
	play();





// 小米单品控制    为你推荐控制
    function go(offset){
    	var newleft = parseInt(xmstart.offsetLeft) + offset;
    	var newLeft = parseInt(xmstart1.offsetLeft) + offset;

		
		if(newleft>0||newleft<-1226){
			return;
		}
		else{
			xmstart.style.left = newleft + 'px';
		}
		if(newLeft>0||newLeft<-1226){
			return;
		}
		else{
			xmstart1.style.left = newLeft + 'px';
		}
		
    }
	left.onclick =function(){
		go(1226)
	}
	right.onclick =function(){
		go(-1226);
	}
	up.onclick =function(){
		go(1226)
	}
	down.onclick =function(){
		go(-1226);
	}





// 产品展示

    for(var e=0;e<toplist1.length;e++){
    	toplist1[e].index = e;
    	toplist1[e].onmouseover = function(){
    		for(var t = 0;t<mid_rt1.length;t++){

    			if(mid_rt1[t].className = 'bottom_hide'){

    				mid_rt1[this.index].className = 'bottom_show'
    			}
    		}   
    		    // 找到list让所有list的class设置为list_hide;
    		    for(var i=0;i<toplist1.length;i++){
    		    	toplist1[i].className = 'list_hide';
    		    }
    		// 设置当前选中的list的class为list_show;
		    toplist1[this.index].className ='list_show';
		    mid_rt1[this.index].className = 'bottom_show';
    	}
    }
    for(var e=0;e<toplist2.length;e++){
    	toplist2[e].index = e;
    	toplist2[e].onmouseover = function(){
    		for(var t = 0;t<mid_rt2.length;t++){

    			if(mid_rt2[t].className = 'bottom_hide'){

    				mid_rt2[this.index].className = 'bottom_show'
    			}
    		}   
    		    // 找到list让所有list的class设置为list_hide;
    		    for(var i=0;i<toplist2.length;i++){
    		    	toplist2[i].className = 'list_hide';
    		    }
    		// 设置当前选中的list的class为list_show;
		    toplist2[this.index].className ='list_show';
		    mid_rt2[this.index].className = 'bottom_show';
    	}
    }
    for(var e=0;e<toplist3.length;e++){
    	toplist3[e].index = e;
    	toplist3[e].onmouseover = function(){
    		for(var t = 0;t<mid_rt3.length;t++){

    			if(mid_rt3[t].className = 'bottom_hide'){

    				mid_rt3[this.index].className = 'bottom_show'
    			}
    		}   
    		    // 找到list让所有list的class设置为list_hide;
    		    for(var i=0;i<toplist3.length;i++){
    		    	toplist3[i].className = 'list_hide';
    		    }
    		// 设置当前选中的list的class为list_show;
		    toplist3[this.index].className ='list_show';
		    mid_rt3[this.index].className = 'bottom_show';
    	}
    }
}

