<?php


    require_once __DIR__ . '/vendor/autoload.php';
    use API\Read\Read;

    $products = new Read('proyecto');
    $products->listProduct();
    echo $products->getData();

    ?>