<?php
	$year	= $_GET["y"];
	$month	= $_GET["m"];
	$day	= $_GET["d"];
	
	/* $url = "http://api.sportsdatallc.org/mlb-t3/daily/boxscore/$year/$month/$day.xml?api_key=exb9wafj7dkezhw7n7qgsykv"; */

	$url = "http://api.sportsdatallc.org/mlb-t3/daily/boxscore/2013/09/07.xml?api_key=exb9wafj7dkezhw7n7qgsykv"; 


		
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPGET, true);
	$output = curl_exec($ch);
	/* 
	$output_object = json_decode($output);
	*/
	/* $result_count = count($output_object->bcapi_game_sched->queryResults->row);
	for($i=0;$i<$result_count;$i++) {
		$game = array_shift($output_object->bcapi_game_sched->queryResults->row);
		if($game->venue_state == "FL") {
			array_push($output_object->bcapi_game_sched->queryResults->row,$game);
		}
	echo json_encode($output_object);
	} */
	
	echo $output;
?>

