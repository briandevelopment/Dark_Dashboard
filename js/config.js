
	var ONE_HOUR_MS = 3600000;
	var ONE_SEC_MS = 1000;
	
	var global_ClockInterval = ONE_SEC_MS;
	
	var global_CurrentWeatherInterval = ONE_HOUR_MS / 2;
	var global_ForecastWeatherInterval = ONE_HOUR_MS * 6;
	
	var global_NewsUpdateInterval = ONE_HOUR_MS / 2;
	var global_NewsRotateInterval = ONE_SEC_MS * 5;
	
	var global_HolidayDaysOut = 7; // Number of days to get holidays
	var global_HolidayListMax = 3; // Max holiday list
		
	var newsFeedList = [];
	
	var iconTable = {
		'01d':'wi-day-sunny',
		'02d':'wi-day-cloudy',
		'03d':'wi-cloudy',
		'04d':'wi-cloudy-windy',
		'09d':'wi-showers',
		'10d':'wi-rain',
		'11d':'wi-thunderstorm',
		'13d':'wi-snow',
		'50d':'wi-fog',
		'01n':'wi-night-clear',
		'02n':'wi-night-cloudy',
		'03n':'wi-night-cloudy',
		'04n':'wi-night-cloudy',
		'09n':'wi-night-showers',
		'10n':'wi-night-rain',
		'11n':'wi-night-thunderstorm',
		'13n':'wi-night-snow',
		'50n':'wi-night-alt-cloudy-windy'
		};
		
	var weatherParams = {
		'q':'Stamford,ct',
		'units':'imperial'
		};
	
	var forecastParams = {
		'q':'Stamford,ct',
		'units':'imperial',
		'cnt': '7'
		};
	
	
	