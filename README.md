返回顶部-原生javascript

##HTML

<a class="back-top" href="#"></a>
可以放在页面中的任何位置

##CSS
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

##javascript

window.onload = function(){
	var elem = document.querySelector(".back-top");

	
	if ((document.documentElement.scrollTop + document.body.scrollTop) >= 100){
				elem.style.display = "inline";
	}
	
	elem.addEventListener("click", function(event){
		event.preventDefault();
		setTimeout(function(){
			document.documentElement.scrollTop = document.documentElement.scrollTop - (document.documentElement.scrollTop / 3);
			document.body.scrollTop = document.body.scrollTop - (document.body.scrollTop / 3);

			if ((document.documentElement.scrollTop + document.body.scrollTop) > 0) {
				setTimeout(arguments.callee, 30);
			}

		}, 30);
	}, false);

	document.addEventListener("scroll", function(){
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


