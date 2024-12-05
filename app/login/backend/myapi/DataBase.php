<?php

namespace API;

abstract class DataBase
{
    protected $conexion;
    protected $data;    

    public function __construct($db,$user='root',$password='Calcetines2'){
        $this -> conexion = @mysqli_connect(
            'localhost',
            $user,
            $password,
            $db
        );
    }

    public function getData(){
        return $this->data;
    }
}

?>