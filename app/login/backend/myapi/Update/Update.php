<?php
    namespace API\Update;
    require_once __DIR__ . '/../DataBase.php';
    use API\DataBase as DataBase;

    class Update extends DataBase{
        public function __construct($db) {
            parent::__construct($db);
        }
        public function edit($producto){
            $data = array(
                'status'  => 'error',
                'message' => 'Ya existe un area con ese nombre'
            );
                // SE TRANSFORMA EL STRING DEL JASON A OBJETO
                // SE ASUME QUE LOS DATOS YA FUERON VALIDADOS ANTES DE ENVIARSE
                $sql = "UPDATE info_areas SET nombre = '{$producto->nombre}', descripcion = '{$producto->descripcion}', trab1 = '{$producto->trab1}', trab2 = '{$producto->trab2}', trab3 = '{$producto->trab3}', curso1 = '{$producto->curso1}', curso2 = '{$producto->curso2}' WHERE id = {$producto->id}";
        
                // Execute the statement
                if ($this->conexion->query($sql) === TRUE) {
                    $data['status'] =  "success";
                    $data['message'] =  "Area editada correctamente";
                } else {
                    $data['message'] = "ERROR: No se ejecutó la consulta. " . $this->conexion->error;
                }
        
                // Cierra la conexion
                $this->conexion->close();
        
            // SE HACE LA CONVERSIÓN DE ARRAY A JSON
            $this->data = json_encode($data, JSON_PRETTY_PRINT);
        }
    }
?>