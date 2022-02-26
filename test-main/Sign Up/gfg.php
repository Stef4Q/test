<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {

$data = array(
	$_POST['name'],
	$_POST['email'],
	$_POST['phone']
);

// Open file in append mode
$fp = fopen('database.csv', 'a');

// Append input data to the file
fputcsv($fp, $data);

// close the file
fclose($fp);
}

?>
