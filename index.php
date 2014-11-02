<html>
<head>

<link href='http://fonts.googleapis.com/css?family=Droid+Sans:400,700' rel='stylesheet' type='text/css'>

<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/weather-icons.css" />
<link rel="stylesheet" type="text/css" href="css/simplegrid.css" />
<link rel="stylesheet" type="text/css" href="css/main.css" />

</head>
<body>
	<div class="grid grid-pad">
		<div class="col-2-3 mobile-col-2-3">
			<div class="content">
				<span id="current_date" class="medium dimmed"></span><span id="current_holiday" class="medium dimmed"></span>
			</div>
		</div>
		<div class="col-1-3 mobile-col-1-3">
			<div class="content align-right">
				<span id="weather_icon" class="icon-padded-right wi"></span><span id="weather_temp"></span><span class="icon-small wi wi-fahrenheit"></span>
			</div>
		</div>
	</div>
	
	<div class="grid grid-pad">
		<div class="col-1-3 mobile-col-1-3">
			<div class="content">
				<span id="current_time"></span>
			</div>
		</div>
		<div class="col-1-3 mobile-col-1-3">
			<div class="content">
				<br />
			</div>
		</div>
		<div class="col-1-3 mobile-col-1-3">
			<div class="content align-right">
				<span class="icon-padded-right wi wi-sprinkles"></span><span id="weather_humidity"></span>%
			</div>
		</div>
	</div>
	
	<div class="grid grid-pad">
		<div class="col-9-12">
			<div class="content">
				<div id="calendar_holidays"></div>
				<br />
			</div>
		</div>
		<div class="col-3-12">
			<div class="content">
				<div id="weather_forecast"></div>
				<br />
			</div>
		</div>
	</div>

	<div class="grid grid-pad">
		<div class="col-1-1 mobile-col-1-1">
			<div class="content medium">
				<ul id="newsFeed">
					<li></li> 
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	</div>


<?php include("holiday.php"); ?>

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.transit.min.js"></script>
<script type="text/javascript" src="js/jquery.feedToJSON.js"></script>
<script type="text/javascript" src="js/moment-with-locales.min.js"></script>
<script type="text/javascript" src="js/config.js"></script>
<script type="text/javascript" src="js/main.js"></script>

</body>

</html>

