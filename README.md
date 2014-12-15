#返回顶部-原生javascript

##HTML
\<a class="back-top" href="#" \>\</a\>

##CSS
https://gist.githubusercontent.com/zzuieliyaoli/2ccfafda932b7400f478/raw/62c28381b17ec89c67163d7d72c71d1e318e44dd/style.css

##javascript
<pre class="prettyprint">
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



</pre>
https://gist.githubusercontent.com/zzuieliyaoli/2ccfafda932b7400f478/raw/d21ab26b9784e0466ad32c4126d3b79de53eb38a/back-to-top-pure-javascript.js


