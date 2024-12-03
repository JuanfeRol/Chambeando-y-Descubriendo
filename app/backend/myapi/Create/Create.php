<?php

namespace MYAPI\Create;
include_once __DIR__ ."/../DataBase.php";
use MYAPI\DataBase as Database;

class Create extends Database{
    public function __construct($based, $usuario='root', $contrasena='mendoza21:)') {
        parent::__construct($based, $usuario, $contrasena);
    }

    public function add($consulta){
        $data = array(
            'status'  => 'error',
            'message' => 'Ya existe una consulta con ese nombre'
        );
        // SE ASUME QUE LOS DATOS YA FUERON VALIDADOS ANTES DE ENVIARSE
        $this->conexion->set_charset("utf8");

        $sql = "INSERT INTO areas VALUES ('Mendoza', 21 ,{$consulta->artistico}, {$consulta->comportamientos}, 
        {$consulta->predecir}, {$consulta->computadora}, {$consulta->estructurar},{$consulta->manualidades},
        {$consulta->numeros}, {$consulta->automatizar}, {$consulta->sitiosweb},{$consulta->dispelectricos},
        {$consulta->proyectos},{$consulta->DesarrolloWeb},{$consulta->Redes},{$consulta->RoboticaCircuitos},
        {$consulta->InteligenciaArtificial},{$consulta->CienciaDatos})";
        if($this->conexion->query($sql)){
            $data['status'] =  "success";
            $data['message'] =  "Consulta agregada";
        } else {
            $data['message'] = "ERROR: No se ejecuto $sql. " . mysqli_error($this->conexion);
        }

        $sql2 = "INSERT INTO evaluacion VALUES ('{$consulta->salmensual}', {$consulta->presley}, {$consulta->presleyup}, '{$consulta->temptras}', {$consulta->seguromed}, {$consulta->satisfaccion})";
        if($this->conexion->query($sql2)){
            $data['status'] =  "success";
            $data['message'] =  "Consulta agregada";
        } else {
            $data['message'] = "ERROR: No se ejecuto $sql2. " . mysqli_error($this->conexion);
        }
        
        // Cierra la conexion
        $this->conexion->close();
    
        // SE HACE LA CONVERSIÓN DE ARRAY A JSON
        $this->data = json_encode($data, JSON_PRETTY_PRINT);        
    }
}

?>