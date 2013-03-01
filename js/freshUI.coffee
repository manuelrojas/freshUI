### 
==========================================================
 freshUI.js v0.0.3
 http://www.mrojasweb.com/
 ==========================================================
 Author:Manuel Rojas
 Date:2/12/2013
 Description: Plugin to show a banner with descriptions and
 images.
==========================================================
 ###
((window, $)->
	class FreshUI
		
		_defaultoptions:
			delay: 1000,
			duration: 700,
			easing: 'easeInOutExpo'
			bottom: '+=300px'
			descriptions: [
							{description: "Firts Thumbnail label"},
							{description: "Second Thumnail"},
							{description: "Info3"},
							{description: "Info4"}
						]
		
		constructor: (opts) ->
			@.options = $.extend(opts, @._defaultoptions)
			@.$container = $('.banner')

		init: () ->
			console.log 'freshUI rocking!'
			@.createMarkUp()
			@.$elems = $('.banner > p')
			@.animateDescriptions()
			
		animateDescriptions: () ->
			@.$elems.show().each((i,elem) =>
				console.log($(elem).html())
				$(elem).delay(@.options.delay * i)
				.animate({
					bottom : @.options.bottom 
					}, {
						duration:  @.options.duration, 
						easing: @.options.easing
				})
			)

		createMarkUp: () ->
			bottom = 0;

			for desc in @.options.descriptions
				bottom += 30
				@.elem = $('<p />', 
					style: "bottom:#{bottom}px; left:10px; display:none;"
				).text(desc.description)

				@.$container.append(@.elem.show())
			
	$.fn.freshUI = () ->
		f = new FreshUI()
		f.init()
		
)(window, jQuery)