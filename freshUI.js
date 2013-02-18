/* ==========================================================
 * freshUI.js v0.0.1
 * http://www.mrojasweb.com/
 * ==========================================================
 * Author:Manuel Rojas
 * Date:2/12/2013
 * Description: Plugin to show a banner with descriptions and
 * images.
 * ========================================================== */

(function ($,window) {
	$.fn.freshUI = function(options){
		freshUI.init(options);
	}
	
	var freshUI = {

		init: function(options){
			/*this.opts = options;*/
			this.animateDescriptions();
		},
		animateDescriptions: function(){
			$('.banner > p').each(function(index){
				//Animate each element
				$(this)
				.delay(1000*index)
				.animate({bottom: "+=100px", opacity: 1}, "slow");
				
			});
		}
	};
})(jQuery,window)