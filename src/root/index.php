<!DOCTYPE html>
<html lang="de" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Notentracker</title>

		<link rel="stylesheet" href="index.css">
	</head>

	<?php // Verbindung zur Datenbank aufbauen
	include "verbindung_db_notentracker.php";	?>

	<body>
		<header>
			<!--Übersichtskasten links oben für Kurs und Jahrgang-->
			<div class="Kurs-Overview">
		 		<b>Kurs/Klasse</b><span class="Teiler"/><b>Jahrgang</b>
	 		</div>

			<!--Übersichtskasten links oben für Lehrer und Halbjahr-->
			<div class="Lehrer-Semester">
            <b>Lehrkraft: </b>
            <span>LehrerVariabel</span><br/>
            <b>Halbjahr: </b>
            <span>Zeitraum</span>
            <RiPencilFill class="PencilIcon" size="1.5em"/>
        </div>

				<!--Übersichtskasten rechts oben für Username und abmelden-->
				<div class="user-block">
        	<FaUser class="UserIcon"/><b>Username</b><span class="Teiler"/><b>abmelden</b>
        </div>
		</header>

		<div class="Uebersicht">

			<!--Übersichtskasten rechts neben Tabelle für Notendurchschnitt des Kurses-->
				 <div class="UebersichtBox">

					 <?php // Alle Punkte in der Datenbank anzeigen und Durchschnitt errechnen
					 $sql = "SELECT Punkte FROM alles Where 1";
					 $result = mysqli_query($mysqli, $sql);
					 $i = 0;
					 while($row = $result->fetch_assoc()){
					 	$anzahl =  $anzahl+1;
					 	$punkte_ges = $punkte_ges + $row["Punkte"];
						}
						// Durchschnitt errechen
					 $durchschnitt = ($punkte_ges / $anzahl);

					 // Durchschnitt aller Noten anzeigen und auf die zweite Stelle runden
					 echo "Durchschnitt: " .round($durchschnitt, $precision=2 ). "<br>";
					 ?>
				 </div>
			 </div>

<!--

<h2>Eintrag hinzufügen</h2>
<form action="/eintrag-hinzufügen.php">
 <label for="vorname">Vorname:</label><br>
   <input type="text" id="neuer_vorname" name="neuer_vorname"><br>
 <label for="nachname">Nachname:</label><br>
   <input type="text" id="neuer_nachname" name="neuer_nachname"><br>
 <label for="datum">Datum:</label><br>
   <input type="text" id="neues_datum" name="neues_datum"><br>
 <label for="punkte">Punkte:</label><br>
   <input type="text" id="neue_punkte" name="neue_punkte"><br>
 <label for="art">Art der Leistung:</label><br>
   <input type="text" id="neue_art" name="neue_art"><br>
<br>
  <input type="submit" value="Hinzufügen">
</form>

-->

<!--Tabelle mit allen Schülern eines Kurses-->
<div class="containerDiv">
<table class="Tabelle">
	<thead>
		<tr>
			<th>Vorname</th>
			<th>Nachname</th>
			<th>Punkte</th>
			<th>Datum</th>
			<th>Art der Leistung</th>
		</tr>
	</thead>
	<tbody>

		<?php
		// Tabelle mit allen Schülern ausgeben
		$sql = "SELECT * FROM alles";
		$result = mysqli_query($mysqli, $sql);

		while ($row = mysqli_fetch_object($result)) {
			echo "<tr>";
			echo "<td>".$row->Vorname . "</td>";
			echo "<td>".$row->Nachname . "</td>";
			echo "<td>".$row->Punkte . "</td>";
			echo "<td>".$row->Datum . "</td>";
			echo "<td>".$row->Art_der_Leistung . "</td>";
			echo "</tr>";
		}	?>
	</tbody>

</table>
</div>

<!--Eingabefeld für das Einfügen neuer Schüler und Noten-->

<form class="NeueNoteOverlay" action="/eintrag-hinzufügen.php">
          <h2 align="middle">Note hinzufügen</h2>
<!--Vorname-->
					<label class="LabelOben">Vorname</label>
          <input id="neuer_vorname" class="NeueNoteBox" name="neuer_vorname" type="text" required="text" value="">
          <label class="LabelUnten">max. 50 Zeichen</label>
<!--Nachname-->
					<label class="LabelOben">Nachname</label>
          <input id="neuer_nachname" class="NeueNoteBox" name="neuer_nachname" type="text" required="text" value="">
          <label class="LabelUnten">max. 50 Zeichen</label>
<!--Punkte-->
					<label class="LabelOben">Punkte</label>
          <input id="neue_punkte" class="NeueNoteBox" name="neue_punkte" min="0" max="15" required="number" type="number" value="">
          <label class="LabelUnten">0 bis 15</label>
<!--Art der Leistung-->
					<label class="LabelOben">Leistung</label>
          <input id="neue_art" class="NeueNoteBox" name="neue_art" maxlength="50" required="required" type="text" value="">
          <label class="LabelUnten">max. 50 Zeichen</label>
<!--Datum-->
          <label class="LabelOben">Datum</label>
          <input id="neues_datum" class="NeueNoteBox" name="neues_datum" required="required" type="date" value="">
          <label class="LabelUnten"></label>

<!--Eingaben löschen oder in Datenbank übernehmen-->
					<span>
						<input class="NeueNoteSubmit" type="submit" value="Note hinzufügen">
          <!--  <button class="NeueNoteReset" type="reset">Reset</button> -->
          </span>
        </form>

<?php
// Verbindung zur Datenbank schließen
$mysqli->close(); ?>

	</body>
</html>
