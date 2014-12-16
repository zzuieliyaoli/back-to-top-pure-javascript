#返回顶部-原生javascript

##HTML
\<a class="back-top" href="#" \>\</a\>
可以放在页面body中的任何位置

##CSS
<pre>
a.back-top{
	display: none;
	position: fixed;
	right: 2em;
	bottom: 4em;
		
	height: 50px;
	width: 50px;
		
	background-color: #da6426;
	background-image: url(../images/scrollup.png);
	background-position: center;
	border-radius: 7px;
	-webkit-transition: 0.5s;
	 -moz-transition: 0.5s;
	  -ms-transition: 0.5s;
	   -o-transition: 0.5s;
	      transition: 0.5s;		
}
a.back-top:hover{
	background-color: white;
}
</pre>

##javascript
<pre class="prettyprint">
window.onload = function(){
	

	var elem = document.querySelector(".back-top");

	//兼容 document.documentElement.scrollTop + document.body.scrollTop
	//判断在页面加载完成时，滚动条的位置
	if ((document.documentElement.scrollTop + document.body.scrollTop) >= 100){
				elem.style.display = "inline";
	}

	//click事件处理程序
	elem.addEventListener("click", function(event){
		//取消默认行为
		event.preventDefault();

		//链式调用setTimeout()，每次函数执行的时候都会重新创建一个新的定时器。
		//arguments.callee来获取对当前执行的函数的引用，并为其设置另外一个定时器
		//好处：在前一个定时器代码执行完之前，不会向队列插入新的定时器代码
		//      可以保证在下一次定时器代码执行之前，至少要等待指定的间隔
		setTimeout(function(){
			document.documentElement.scrollTop = document.documentElement.scrollTop - (document.documentElement.scrollTop / 3);
			document.body.scrollTop = document.body.scrollTop - (document.body.scrollTop / 3);

			if ((document.documentElement.scrollTop + document.body.scrollTop) > 0) {
				setTimeout(arguments.callee, 30);
			}

		}, 30);
	}, false);
	document.addEventListener("scroll", function(){
		
		//函数节流思想：某些代码不可以在没有间隔的情况下重复连续执行。
		//当滚动条滚动时，scroll会连续触发
		clearTimeout(tId);
		var tId = setTimeout(function(){
			if ((document.documentElement.scrollTop + document.body.scrollTop) < 100) {
				elem.style.display = "none";
			}
			if ((document.documentElement.scrollTop + document.body.scrollTop) >= 100){
				elem.style.display = "inline";
			}

		}, 200);	
	}, false);
};



</pre>



