<?php
    require_once __DIR__ . '/vendor/autoload.php';

    $consultas = new MYAPI\Create\Create('proyecto');
    $consultas->add( json_decode( json_encode($_POST) ) );
    echo $consultas->getData();
?>