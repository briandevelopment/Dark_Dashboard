<?php
	date_default_timezone_set('America/New_York');
	const ONE_DAY = 86400;

	$holidays = array(
		"New Year's Day"  => "Jan 01",
		"Martin Luther King, Jr. Day" => date("MMM dd", strtotime("3 Mondays Jan")),
		
		"Groundhog Day"  => "Feb 02",
		"Valentine's Day"  => "Feb 14",
		"Presidents' Day" => date("MMM dd", strtotime("3 Mondays Feb")),
		
		"St. Patrick's Day"  => "Mar 17",
		
		"April Fools' Day"  => "Apr 01",
		
		"Mardi Gras" => date("MMM dd", easter_date() - (ONE_DAY * 47) ),
		"Ash Wednesday" => date("MMM dd", easter_date() - (ONE_DAY * 46) ),
		
		"Palm Sunday" => date("MMM dd", easter_date() - (ONE_DAY * 7) ),
		"Good Friday" => date("MMM dd", easter_date() - (ONE_DAY * 2) ),
		"Easter" => date("MMM dd", easter_date()),
		
		"Mother's Day" => date("MMM dd", strtotime("2 Sundays May")),
		"Memorial Day" => date("MMM dd", strtotime("last Monday of May")),
		
		"Father's Day" => date("MMM dd", strtotime("3 Sundays June")),
		
		"Independence Day"  => "Jul 04",
		"Labor Day" => date("MMM dd", strtotime("1 Mondays Sep")),
		
		"Columbus Day" => date("MMM dd", strtotime("2 Mondays Oct")),
		"Halloween"  => "Oct 31",
		
		"All Saints Day"  => "Nov 01",
		"All Souls Day"  => "Nov 02",
		"Election Day" => date("MMM dd", strtotime("1 Tuesday Nov")),
		"Veterans Day"  => "Nov 11",
		"Thanksgiving" => date("MMM dd", strtotime("4 Thursdays Nov")),
		"Black Friday" => date("MMM dd", strtotime("4 Fridays Nov")),
		
		"Christmas Eve" => "Dec 24",
		"Christmas Day" => "Dec 25",
		"New Year's Eve" => "Dec 31"
		
	);
		
	
?>
<script type="text/javascript">
	var holidays = <?php echo json_encode($holidays) ?>;
</script>

