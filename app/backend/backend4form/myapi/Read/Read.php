<?php

namespace MYAPI\Read;
include_once __DIR__ ."/../DataBase.php";
use MYAPI\DataBase as Database;

class Read extends Database{
    public function __construct($based, $usuario='root', $contrasena='mendoza21:)') {
        parent::__construct($based, $usuario, $contrasena);
    }

    public function listEdad(){
        $data = array(
            'edad'  => 0,
            'persporarea' => 0,
            'salmensual'  => 0,
            'presley' => 0,
            'presleysup'  => 0,
            'temptras' => 0,
            'seguromed'  => 0,
            'satisfaccion' => 0
        );
        $cont1=0; $cont2=0; $cont3=0; $cont4=0; $cont5=0; $cont6=0; $cont7=0;
        $contsal1=0; $contsal2=0; $contsal3=0; $contsal4=0;
        $contpres1=0; $contpres2=0;
        $contpresup1=0; $contpresup2=0;
        $conttras1=0; $conttras2=0; $conttras3=0;
        $contseg1=0; $contseg2=0;
        $contsat1=0; $contsat2=0;

        $cdes=0; $cred=0; $crob=0; $cia=0; $ccien=0;
        $vdes=0; $vred=0; $vrob=0; $via=0; $vcien=0;
        // SE REALIZA LA QUERY DE BÚSQUEDA Y AL MISMO TIEMPO SE VALIDA SI HUBO RESULTADOS
        if ( $result = $this->conexion->query("SELECT * FROM areas") ) {
            // SE OBTIENEN LOS RESULTADOS
            $rows = $result->fetch_all(MYSQLI_ASSOC);
            if(!is_null($rows)) {
                // Mapeo de arreglo para recorrido de respuestas
                foreach($rows as $num => $row) {
                    foreach($row as $key => $value) {
                        //contabilizando edades
                        if ($key == 'edad'){
                            if ($value > 15 && $value <=25){$cont1 = $cont1 + 1;}
                            elseif ($value > 25 && $value <=35) {$cont2 = $cont2 + 1;}
                            elseif ($value > 35 && $value <=45) {$cont3 = $cont3 + 1;}
                            elseif ($value > 45 && $value <=55) {$cont4 = $cont4 + 1;}
                            elseif ($value > 55 && $value <=65) {$cont5 = $cont5 + 1;}
                            elseif ($value > 65 && $value <=80) {$cont6 = $cont6 + 1;}
                        }
                        //Contabilizando personas
                        if($key == 'DesarrolloWeb'){$vdes = $value;}
                        if($key == 'Redes'){$vred = $value;}
                        if($key == 'RoboticaCircuitos'){$vrob = $value;}
                        if($key == 'InteligenciaArtificial'){$via = $value;}
                        if($key == 'CienciaDatos'){$vcien = $value;
                            $maximo = max($vdes, $vred,$via, $vcien, $vrob);

                            if ($maximo == $vdes){ $cdes = $cdes +1; }
                            if ($maximo == $vred){ $cred = $cred +1; }
                            if ($maximo == $via){ $cia = $cia +1; }
                            if ($vcien == $maximo){ $ccien = $ccien + 1; }
                            if ($maximo == $vrob){ $crob = $crob +1; }
                        }
                    }
                }
                
                $edad = array(
                    '16-25' => $cont1,
                    '26-35' => $cont2,
                    '36-45' => $cont3,
                    '46-55' => $cont4,
                    '56-65' => $cont5,
                    '66-80' => $cont6
                );
                $persporarea = array(
                    'Redes' => $cred,
                    'Robótica y Circuitos' => $crob,
                    'Inteligencia Artificial' => $cia,
                    'Ciencia de Datos' => $ccien,
                    'Desarrollo Web' => $cdes
                );
                $data['edad'] = $edad;
                $data['persporarea'] = $persporarea;
                $this->data = $data; 
            }
            $result->free();
        } else {
            die('Query Error: '.mysqli_error($this->conexion));
        }

        if($result = $this->conexion->query("SELECT * FROM evaluacion")){
            $rows = $result->fetch_all(MYSQLI_ASSOC);
            if(!is_null($rows)) {
                // SE CODIFICAN A UTF-8 LOS DATOS Y SE MAPEAN AL ARREGLO DE RESPUESTA
                foreach($rows as $num => $row) {
                    foreach($row as $key => $value) {
                        //contabilizando salarios
                        if ($key == 'salmensual'){
                            if($value == 'Menos de $8000'){$contsal1 = $contsal1 +1;}
                            elseif($value == 'De $8000 a $16000'){$contsal2 = $contsal2 +1;}
                            elseif($value == 'De $16000 a $24000'){$contsal3 = $contsal3 +1;}
                            elseif($value == 'Más de $24000'){$contsal4 = $contsal4 +1;}
                        }
                        //contabilizando prestaciones de ley
                        if ($key == 'presley'){
                            if($value == 1){$contpres1 = $contpres1 + 1;}
                            if($value == 0){$contpres2 = $contpres2 + 1;}
                        }
                        //contabilizando prestaciones superiores a la ley
                        if ($key == 'presleyup'){
                            if($value == 1){$contpresup1 = $contpresup1 + 1;}
                            if($value == 0){$contpresup2 = $contpresup2 + 1;}
                        }
                        if ($key == 'temptras'){
                            if($value == 'Menos de 30 minutos'){$conttras1 = $conttras1 + 1;}
                            if($value == 'Entre 30 y 60 minutos'){$conttras2 = $conttras2 + 1;}
                            if($value == 'Más de 60 minutos'){$conttras3 = $conttras3 + 1;}
                        }
                        if ($key == 'seguromed'){
                            if($value == 1){$contseg1 = $contseg1 + 1;}
                            if($value == 0){$contseg2 = $contseg2 + 1;}
                        }
                        if ($key == 'satisfaccion'){
                            if($value == 1){$contsat1 = $contsat1 + 1;}
                            if($value == 0){$contsat2 = $contsat2 + 1;}
                        }
                    }
                }
                
                $salmensual = array(
                    'Menos de $8000' => $contsal1,
                    'De $8000 a $16000' => $contsal2,
                    'De $16000 a $24000' => $contsal3,
                    'Más de $24000' => $contsal4
                );
                $presley = array(
                    'Si' => $contpres1,
                    'No' => $contpres2
                );
                $presleyup = array(
                    'Si' => $contpresup1,
                    'No' => $contpresup2
                );
                $temptras = array(
                    'Menos de 30 minutos' => $conttras1,
                    'Entre 30 y 60 minutos' => $conttras2,
                    'Más de 60 minutos' => $conttras3,
                );
                $seguromed = array(
                    'Si' => $contseg1,
                    'No' => $contseg2
                );
                $satisfaccion = array(
                    'Si' => $contsat1,
                    'No' => $contsat2
                );
                $data['salmensual'] = $salmensual;
                $data['presley'] = $presley;
                $data['presleyup'] = $presleyup;
                $data['temptras'] = $temptras;
                $data['seguromed'] = $seguromed;
                $data['satisfaccion'] = $satisfaccion;
                $this->data = $data; 
            }
            $result->free();
        }
        else{
            die('Query Error: '.mysqli_error($this->conexion));
        }
        $this->conexion->close();
    }


}

?>