<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
	<link rel="stylesheet" href="geolocation.css" />
</head>
<body>
<!-- Start of home page -->
<div data-role="page" id="homePage">

	<?php include("header.php") ?>

	<div role="main" class="ui-content">
		<p>Travel Times Page</p>
		<div id="Carlisle">Carlisle</div>
		<div id="Truman">Truman</div>
		<div id="Gibson">Gibson</div>
		<div id="Wyoming">Wyoming</div>
		<div id="Eubank">Eubank</div>
		<button id="getTravelTimes" onClick="console.log('can\'t touch this')">Click To Find Travel Times</button>
	</div><!-- /content -->

	<?php include("footer.php") ?>
</div><!-- /page -->

<!-- Start of second page -->
<div data-role="page" id="mapPage">

<?php include("header.php") ?>

	<div role="main" class="ui-content">
		<div id="map-canvas">map-canvas</div>
	</div><!-- /content -->

	<?php include("footer.php") ?>
</div><!-- /page -->

<!-- Start of third page -->
<div data-role="page" id="hoursPage">

<?php include("header.php") ?>

	<div role="main" class="ui-content">
		<p>Wyoming Gate:  05:30 a.m. to 7 p.m., Monday through Friday</p>
		<p>Gibson Gate:    5:30 a.m. to  9 p.m., Monday through Friday</p>
		<p>Eubank Gate:  24 hours / 7 days a week</p>
		<p>Truman Gate:  24 hours / 7 days a week</p>
	</div><!-- /content -->

	<?php include("footer.php") ?>
</div><!-- /page -->

    <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTZea67jn4YSPIGu0dNTHRyB1jnvo1Q00"></script>
    <script src="geolocation.js"></script>
</body>
</html>
