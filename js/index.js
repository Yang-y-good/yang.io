window.addEventListener('load',function(){
	var i = document.querySelector('i');
	console.log(i);
	var myAuto = document.getElementById('myaudio');
	var flag=0;
	i.addEventListener('click',function(){
		if(flag==0){	
			myAuto.pause()
			flag = 1;
		}else{
			myAuto.play()
			flag = 0;
		}
	})
})
