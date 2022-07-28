<?php
$conn = mysqli_connect(
    'localhost',
    'root',
    '',
    'ksiazki'
);

$delete = $_POST['delete'];

$sql = "DELETE FROM ksiazki WHERE tytul = '$delete'";

mysqli_query($conn,$sql);
header("Location: index.php");
?>