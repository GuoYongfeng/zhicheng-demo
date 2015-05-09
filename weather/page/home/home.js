/**
 * @author guoyongfeng
 * @desc   weather page
 * @date   2015-05-09
 */

function Weather(){

	// console.log(this);
	
}

Weather.data = {
	'DOM': {
		'show_detail': $('.show_detail'),
		'weather_block': $('.weather_block'),
		'show_weather': $('.show_weather'),
		'weather_icon': $('.weather_icon'),
		'date': $('.date')
	}
}

Weather.prototype = {

	getDataSrc: function( el ){

		return $(el).attr('data-src');
	},

	changeHeaderMsg: function(img, word){

		var DOM = Weather.data.DOM,
			weather_icon = DOM.weather_icon,
			date = DOM.date;

		weather_icon.attr({'src': img});
		date.text(word);
	},

	clickAddAnimate: function(){

		Weather.data.DOM.show_detail.on('click', function(e){

			$('#container').addClass('pt-page-moveToLeft');

			// var state = {
			// 	title: 'shop',
			// 	url: '../shop/shop.html',
			// 	otherkey: ''
			// };

			setInterval(function(){
				// window.history.pushState('../shop/shop.html');
				$('#container').css({display: 'none'});
				$('#shop').css({display: 'block'});
			}, 600);
			
		});
		
	},

	bindEvent: function(){

		var _this = this,
			DOM = Weather.data.DOM,

			weather_block = DOM.weather_block,
			lists = $(weather_block).find('li');

		lists.on('click', function( e ){

			var target = $(this).find('div'),
				//get data-src
				src = _this.getDataSrc(target),
				//get date message
				date = $(this).find('h3').text();

			_this.changeHeaderMsg(src, date);

		});


	},

	init: function(){
		this.bindEvent();
		this.clickAddAnimate();
	}
}

var weather = new Weather();

weather.init();

// module.exports = Weather;
