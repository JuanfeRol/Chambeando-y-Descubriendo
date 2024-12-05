<?php
require_once __DIR__ . '/vendor/autoload.php';

$consultas = new MYAPI\Read\Read('proyecto');
$consultas->listEdad();
echo $consultas->getData();
?>