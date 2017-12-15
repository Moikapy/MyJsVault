/* original examples.js */

(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

(function(jqbs) {

jqbs('.first.circle').circleProgress({
	value: 1.00, //Value and Round Value must Equal for Circle to Work.
	fill: {gradient: ['#560048', '#560048']}
}).on('circle-animation-progress', function(event, progress) {
                                            //Round Value.
	jqbs(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
});

jqbs('.second.circle').circleProgress({
	value: 1.00,
	fill: {gradient: ['#00788A', '#00788A']}
}).on('circle-animation-progress', function(event, progress) {
	jqbs(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
});

jqbs('.third.circle').circleProgress({
	value: 0.85,//Value and Round Value must Equal for Circle to Work.
	fill: {gradient: ['#00703C', '#00703C']}
}).on('circle-animation-progress', function(event, progress) {
                                           //Round Value.
	jqbs(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
});

jqbs('.fourth.circle').circleProgress({
	value: 0.95,
	fill: {gradient: ['#F8971D', '#F8971D']}
}).on('circle-animation-progress', function(event, progress) {
	jqbs(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
});

jqbs('.fifth.circle').circleProgress({
	value: 0.50,
	fill: {gradient: ['#E5B53A', '#E5B53A']}
}).on('circle-animation-progress', function(event, progress) {
	jqbs(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
});

jqbs('.sixth.circle').circleProgress({
	value: 1.00,
	fill: {gradient: ['#4F6E18', '#4F6E18']}
}).on('circle-animation-progress', function(event, progress) {
	jqbs(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
});

jqbs('.seventh.circle').circleProgress({
	value: 0.38,
	fill: {gradient: ['#B1B579', '#B1B579']}
}).on('circle-animation-progress', function(event, progress) {
	jqbs(this).find('strong').html(Math.round(38 * progress) + '<i>%</i>');
});

jqbs('.eighth.circle').circleProgress({
	value: 0.97,
	fill: {gradient: ['#F6E7A1', '#F6E7A1']}
}).on('circle-animation-progress', function(event, progress) {
	jqbs(this).find('strong').html(Math.round(97 * progress) + '<i>%</i>');
});


})(jQuery);
