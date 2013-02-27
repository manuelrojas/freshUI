
/* ==========================================================
 freshUI.js v0.0.1
 http://www.mrojasweb.com/
 ==========================================================
 Author:Manuel Rojas
 Date:2/12/2013
 Description: Plugin to show a banner with descriptions and
 images.
 ==========================================================
*/


(function() {

  (function(window, $) {
    var FreshUI;
    FreshUI = (function() {

      FreshUI.prototype._defaultoptions = {
        delay: 1000,
        duration: 700,
        easing: 'easeInOutExpo',
        bottom: '+=300px'
      };

      function FreshUI(opts) {
        this.options = $.extend(opts, this._defaultoptions);
        this.$container = $('.banner > p');
      }

      FreshUI.prototype.init = function() {
        console.log('freshUI rocking!');
        console.log(this.options.delay);
        return this.animateDescriptions();
      };

      FreshUI.prototype.animateDescriptions = function() {
        var _this = this;
        return this.$container.each(function(i, elem) {
          return $(elem).show().delay(_this.options.delay * i).animate({
            bottom: _this.options.bottom
          }, {
            duration: _this.options.duration,
            easing: _this.options.easing
          });
        });
      };

      return FreshUI;

    })();
    return $.fn.freshUI = function() {
      var f;
      f = new FreshUI();
      return f.init();
    };
  })(window, jQuery);

}).call(this);
