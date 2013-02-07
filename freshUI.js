(function ($,window) {
	$.fn.freshUI = function(options){
		
		$(this).children("p").each(function(){
			$(this).animate({
					      		bottom: "100px", 
					      		opacity: 1
					    	}, 
					    	{ 
					    		duration: 500, 
					    		queue: false 
					    	});
			console.log("each");
		});

		
	}
})(jQuery,window)