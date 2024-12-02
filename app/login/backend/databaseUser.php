<?php

$host = "localhost";
$dbname = "ChambeandoDescubriendo";
$username = "root";
$password = "pochita20";

$mysqli = new mysqli(hostname: $host,
                     username: $username,
                     password: $password,
                     database: $dbname);
                     
if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
}

return $mysqli;