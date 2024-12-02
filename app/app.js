$(document).ready(function(){
    $('#form').submit(function(e){
        let completeArea = true;
        let completeStats = true;
        let message = "";
        e.preventDefault();
        //Validación de selección de respuesta a todas las preguntas
        if(!document.querySelector('input[name="form1-p1"]:checked')) {
            completeArea = false;
        }
        if(!document.querySelector('input[name="form1-p2"]:checked')) {
            completeArea = false;
        }
        if(!document.querySelector('input[name="form1-p3"]:checked')) {
            completeArea = false;
        }
        if(!document.querySelector('input[name="form1-p4"]:checked')) {
            completeArea = false;
        }
        if(!document.querySelector('input[name="form1-p5"]:checked')) {
            completeArea = false;
        }
        if(!document.querySelector('input[name="form1-p6"]:checked')) {
            completeArea = false;
        }
        if(!document.querySelector('input[name="form1-p7"]:checked')) {
            completeArea = false;
        }
        if(!document.querySelector('input[name="form1-p8"]:checked')) {
            completeArea = false;
        }
        if(!document.querySelector('input[name="form1-p9"]:checked')) {
            completeArea = false;
        }
        if(!document.querySelector('input[name="form1-p10"]:checked')) {
            completeArea = false;
        }
        if(!document.querySelector('input[name="form1-p11"]:checked')) {
            completeArea = false;
        }

        //Mensaje por si se falta selecciones para área
        if(!completeArea){
            message = message + "Selecciona una respuesta para cada pregunta de área. ";
        }

        if(!document.querySelector('input[name="form2-p1"]:checked')) {
            completeStats = false;
        }
        if(!document.querySelector('input[name="form2-p2"]:checked')) {
            completeStats = false;
        }
        if(!document.querySelector('input[name="form2-p3"]:checked')) {
            completeStats = false;
        }
        if(!document.querySelector('input[name="form2-p4"]:checked')) {
            completeStats = false;
        }
        if(!document.querySelector('input[name="form2-p5"]:checked')) {
            completeStats = false;
        }
        if(!document.querySelector('input[name="form2-p6"]:checked')) {
            completeStats = false;
        }

        //Mensaje por si se falta selecciones para estadísticas
        if(!completeStats){
            message = message + "Selecciona una respuesta para cada pregunta de evaluación. ";
        }

        if(!completeArea || !completeStats){
            alert(message);
        } else {
            //Llamado a función para obtención de valores por área


            //Envío a base de datos
        }
        //alert("Se ha presionado enviar");
    });
});
