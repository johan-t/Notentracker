<?php
include "verbindung_db_notentracker.php";

$neuer_vorname_eingabe = $_GET["neuer_vorname"];
$neuer_nachname_eingabe = $_GET["neuer_nachname"];
$neue_punkte_eingabe = $_GET["neue_punkte"];
$neues_datum_eingabe = $_GET["neues_datum"];
$neue_art_eingabe = $_GET["neue_art"];

// SQL-Anfrage
$sql = "INSERT INTO `alles` (`Vorname`, `Nachname`, `Datum`, `Punkte`, `Art_der_Leistung`) VALUES ('$neuer_vorname_eingabe', '$neuer_nachname_eingabe', '$neues_datum_eingabe', '$neue_punkte_eingabe', '$neue_art_eingabe' );";
$result = $mysqli->query($sql);

//header("Location: http://localhost:8080, true, 301");
//exit();

?>

<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Gespeichert</title>
    <meta http-equiv="refresh" content="0; URL=http://localhost:8080">
    <link rel="stylesheet" href="index.css">
  </head>
  <body>

  </body>
</html>
