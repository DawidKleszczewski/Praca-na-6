<?php
$conn = mysqli_connect(
    'localhost',
    'root',
    '',
    'ksiazki'
);

$tytul = $_POST['tytul'];
$desc = $_POST['opis'];

$sql = "INSERT INTO ksiazki VALUES ('','$tytul','$desc')";

mysqli_query($conn,$sql);

header("Location: index.php");
?>
