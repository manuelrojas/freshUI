### ==========================================================
 freshUI.js v0.0.1
 http://www.mrojasweb.com/
 ==========================================================
 Author:Manuel Rojas
 Date:2/12/2013
 Description: Plugin to show a banner with descriptions and
 images.
 ==========================================================  ###
((window, $)->
	class FreshUI
		
		_defaultoptions:
			delay: 1000,
			duration: 700,
			easing: 'easeInOutExpo'
			bottom: '+=300px'
		
		constructor: (opts) ->
			@.options = $.extend(opts, @._defaultoptions)
			@.$container = $('.banner > p')

		init: () ->
			console.log 'freshUI rocking!'
			console.log  @.options.delay
			@.animateDescriptions()
			
		animateDescriptions: ->
			@.$container.each((i,elem) =>
				$(elem).show().delay(@.options.delay * i)
				.animate({
					bottom : @.options.bottom
					}, {
						duration:  @.options.duration, 
						easing: @.options.easing
				})
			)
	$.fn.freshUI = () ->
		f = new FreshUI()
		f.init()
		
)(window, jQuery)