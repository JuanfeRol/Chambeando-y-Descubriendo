<?php
    $conexion = @mysqli_connect(
        'localhost',
        'root',
        'Calcetines2',
        'chambeandodescubriendo'
    );

    /**
     * NOTA: si la conexión falló $conexion contendrá false
     **/
    if(!$conexion) {
        die('¡Base de datos NO conextada!');
    }
?>