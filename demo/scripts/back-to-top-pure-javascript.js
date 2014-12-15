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