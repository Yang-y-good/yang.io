window.addEventListener('load',function(){
	  var swiper = new Swiper('.swiper-container',{
			direction : 'vertical',
			followFinger : false,
			speed:800,
			mousewheel: true,
			pagination : {
				el:'.swiper-pagination',
			},
			on:{
				init:function(swiper){
			        slide=this.slides.eq(0);
				    slide.addClass('ani-slide');
			    },
				transitionStart: function(){
				    for(i=0;i<this.slides.length;i++){
				    	slide=this.slides.eq(i);
				        slide.removeClass('ani-slide');
					}
			    },
				transitionEnd: function(){
					slide=this.slides.eq(this.activeIndex);
				    slide.addClass('ani-slide');
					
			    },
			}
	    });
		
		    var swiper = new Swiper('.swiper-first', {
		      effect: 'cube',
		      grabCursor: true,
		      cubeEffect: {
		        shadow: true,
		        slideShadows: true,
		        shadowOffset: 20,
		        shadowScale: 0.94,
		      },
		      pagination: {
		        el: '.swiper-pag',
		      },
		    });
			
			
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