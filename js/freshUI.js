
/* 
==========================================================
 freshUI.js v0.0.3
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
        bottom: '+=300px',
        descriptions: [
          {
            description: "Firts Thumbnail label"
          }, {
            description: "Second Thumnail"
          }, {
            description: "Info3"
          }, {
            description: "Info4"
          }
        ]
      };

      function FreshUI(opts) {
        this.options = $.extend(opts, this._defaultoptions);
        this.$container = $('.banner');
      }

      FreshUI.prototype.init = function() {
        console.log('freshUI rocking!');
        this.createMarkUp();
        this.$elems = $('.banner > p');
        return this.animateDescriptions();
      };

      FreshUI.prototype.animateDescriptions = function() {
        var _this = this;
        return this.$elems.show().each(function(i, elem) {
          console.log($(elem).html());
          return $(elem).delay(_this.options.delay * i).animate({
            bottom: _this.options.bottom
          }, {
            duration: _this.options.duration,
            easing: _this.options.easing
          });
        });
      };

      FreshUI.prototype.createMarkUp = function() {
        var bottom, desc, _i, _len, _ref, _results;
        bottom = 0;
        _ref = this.options.descriptions;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          desc = _ref[_i];
          bottom += 30;
          this.elem = $('<p />', {
            style: "bottom:" + bottom + "px; left:10px; display:none;"
          }).text(desc.description);
          _results.push(this.$container.append(this.elem.show()));
        }
        return _results;
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
