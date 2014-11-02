function roundVal(temp)
{
	return Math.round(temp * 10) / 10;
}
var session_CurrentNewsItem = 0;




jQuery(document).ready(function($) {
	
	(function updateTime()
	{
		var currentDateTime = new moment();
		$("#current_date").html(currentDateTime.format('LL'));
		$("#current_time").html(currentDateTime.format('h:mm a'));
		
		setTimeout(function() {
			updateTime();
		}, global_ClockInterval);
	})();
	
	(function updateCurrentWeather()
	{		
		$.getJSON('http://api.openweathermap.org/data/2.5/weather', weatherParams, function(json, textStatus) {
			var temp = roundVal(json.main.temp);
			var humidity = roundVal(json.main.humidity);
			var wind = roundVal(json.wind.speed);
			
			$("#weather_temp").html(temp);
			$("#weather_humidity").html(humidity);			
			
			var iconClass = iconTable[json.weather[0].icon];
			$("#weather_icon").html($('<span />').addClass(iconClass));
		});
		
		setTimeout(function() {
			updateCurrentWeather();
		}, global_CurrentWeatherInterval);
	})();
	
	(function updateWeatherForecast()
	{		
		$.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily', forecastParams, function(json, textStatus) {
			var forecastData = {};
			
			for (var i in json.list) {				
				var forecast = json.list[i];
				var dateKey = forecast.dt;
				if (forecastData[dateKey] == undefined) {
					forecastData[dateKey] = {
						'icon':forecast.weather[0].icon,
						'day':forecast.temp.day,
						'night':forecast.temp.night
					};
				}
			}
			
			var forecastTable = $('<table />').addClass('forecast-table');
			
			for (var i in forecastData) {
				var forecast = forecastData[i];
				var iconClass = iconTable[forecast.icon];				
				var dt = new moment.unix(i);
				
				if (dt.diff(new moment()) < 0) continue; // Skip old times
				
				var row = $('<tr />')
					.append($('<td/>').html(dt.format("ddd")).addClass("dimmed"))
					.append($('<td/>').addClass('icon-small wi').addClass(iconClass))
					.append($('<td/>').html(Math.round(forecast.day) + "° "))
					.append($('<td/>').html(Math.round(forecast.night) + "° "));
				
				forecastTable.append(row);
			}
			
			$('#weather_forecast').html(forecastTable);
			
		});
			
		setTimeout(function() {
			updateWeatherForecast();
		}, global_ForecastWeatherInterval);
	})();
	
	(function updateNewsItems()
	{
		$.feedToJson({
			feed:'http://feeds.reuters.com/reuters/topNews',
			success: function(data){
				if(data.item.length > 1) data = data.item;
				newsFeedList = [];
				$.each(data, function(){
					if($.inArray(this.title, newsFeedList) == -1){
						newsFeedList.push(this.title);
					}
				});
			}
		});
		
		setTimeout(function() {
			updateNewsItems();
		}, global_NewsUpdateInterval);
	})();		
		
	(function rotateNewsItems()
	{	
		if(session_CurrentNewsItem++ > newsFeedList.length) session_CurrentNewsItem = 0;
				
		$("#newsFeed li:first-child")
			.transition({
				y: '-100%',
				easing: 'ease',
				opacity: 0,
				duration: 600 }, 
				function() {
					$(this).transition({
						y: '100%',
						duration: 0
					});
				
					$(this).html(newsFeedList[session_CurrentNewsItem]);
					$(this).appendTo("#newsFeed")
						.transition({
							y: '0%',
							opacity: 1,
							duration: 800
						});		
				});
		
		setTimeout(function() {
			rotateNewsItems();
		}, global_NewsRotateInterval);
	})();
	
	(function updateHolidays()
	{	
		var idx = 0;
		var today = new moment();
		var holidayContainer = $('<div />');
		
		// var holiday is created in the holiday.php file
		$.each(holidays, function(key, value) {
			var hol = new moment(value, "MMM-DD");
			
			if (hol.diff(today, 'days') < 0) return true;	// Don't process old holidays
			if (hol.diff(today, 'days') > global_HolidayDaysOut) return true;	// Only process holidays this many days out		
			
			if (today.startOf('day').isSame(hol.startOf('day'))) {
				$('#current_holiday').html(" - " + key + " today");
				return true;
			}
			
			if (idx++ >= global_HolidayListMax) return true;		// Limit the number of holidays shown
				
			var $title = $('<span />').append(key);
			var $timeDiff = $('<span />').append(" " + hol.fromNow());		
				
			var $holiday = $('<span />')
				.addClass('fullWidth')
				.append($title)
				.append($timeDiff);
			
			
			holidayContainer.append($holiday);
		});		
		
		$("#calendar_holidays").html(holidayContainer);
		
	})();
	
});
