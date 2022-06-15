<?php

header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints

// Variablen für Verbindung
$servername = "localhost";
$username = "root";
$password = "usbw";
$database_in_use = "notentracker";

// Create connection
$mysqli = mysqli_connect($servername, $username, $password, $database_in_use);

// Check connection
if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}

?>
