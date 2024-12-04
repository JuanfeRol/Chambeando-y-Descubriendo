<?php

$host = "localhost";
$dbname = "chameandodescubriendo";
$username = "root";
$password = "621252";

$mysqli = new mysqli(hostname: $host,
                     username: $username,
                     password: $password,
                     database: $dbname);
                     
if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
}

return $mysqli;