<!DOCTYPE html>
<html>
    <head>
     <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    	<link type='text/css' rel='stylesheet' href='style.css'/>
		<title>Coin Flips</title>
	</head>
	<body>
	<p>We are going to flip a coin until we get three heads in a row!</p>
	<?php

// declare variables

$headCount = 0;
$flipCount = 0;

// start while-loop

while ($headCount < 3):
    $flip = rand(0, 1);
    $flipCount++;
    if ($flip) {
        $headCount++;
        echo "<div class=\"coin\">H</div>";
    } else {
        $headCount = 0;
        echo "<div class=\"coin\">T</div>";
    }
// end while-loop
endwhile;
echo "<p>It took {$flipCount} flips!</p>";
?>
    </body>
</html>
