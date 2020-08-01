window.addEventListener('load',function(){
	var i = document.getElementsByTagName('i')[1];
	var il = document.getElementsByTagName('i')[0];
	console.log(il);
	var myAuto = document.getElementById('myaudio');
	var aim = document.getElementById
	var flag=0;
	i.addEventListener('click',function(){
		if(flag==0){
			// il.setAttribute('class','')
			il.style.display='block'
			myAuto.pause()
			this.style.animationPlayState = "paused";
			il.style.animationPlayState = "paused";
			flag = 1;
		}else{
			myAuto.play()
			// il.setAttribute('class','current')
			il.style.display='none'
			this.style.animationPlayState = "running";
			flag = 0;
		}
	})
	
	window.addEventListener("touchmove",function(event) {
	        if(event.scale !== 1) {
	            event.preventDefault();
	        }
	    }, 
	    {
	        passive: false
	    }
	);
})
