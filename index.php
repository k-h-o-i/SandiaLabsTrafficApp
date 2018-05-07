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
    <div id="travelTimeBox">
      <div id="gate0">Carlisle</div>
      <div id="gate1">Truman</div>
      <div id="gate2">Gibson</div>
      <div id="gate3">Wyoming</div>
      <div id="gate4">Eubank</div>
    </div>
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
	<div>
        <img src="images/kirtland.png" width="800" height="1100" alt="myPic" />
    </div>
	</div><!-- /content -->

	<?php include("footer.php") ?>
</div><!-- /page -->

    <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=
AIzaSyDcCd4o6LalenDpw293KCJ2Z0dRrWMYRAc
"></script>
    <script src="geolocation.js"></script>
</body>
</html>
