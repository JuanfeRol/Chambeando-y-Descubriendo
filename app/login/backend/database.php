<?php
    $conexion = @mysqli_connect(
        'localhost',
        'root',
        '621252',
        'chameandodescubriendo'
    );

    /**
     * NOTA: si la conexión falló $conexion contendrá false
     **/
    if(!$conexion) {
        die('¡Base de datos NO conextada!');
    }
?>