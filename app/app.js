function getScoreperArea(){
    //Obtención de valores por pregunta
    let a1 = $('input[name="form1-p1"]:checked').val();
    let a2 = $('input[name="form1-p2"]:checked').val();
    let a3 = $('input[name="form1-p3"]:checked').val();
    let a4 = $('input[name="form1-p4"]:checked').val();
    let a5 = $('input[name="form1-p5"]:checked').val();
    let a6 = $('input[name="form1-p6"]:checked').val();
    let a7 = $('input[name="form1-p7"]:checked').val();
    let a8 = $('input[name="form1-p8"]:checked').val();
    let a9 = $('input[name="form1-p9"]:checked').val();
    let a10 = $('input[name="form1-p10"]:checked').val();
    let a11 = $('input[name="form1-p11"]:checked').val();
    
    let redes = 10, desarrollo = 10, robotica = 10, ia = 10, datac = 10;

    //Obtencion de puntaje por área
    desarrollo =+ (a1 - 3) + (a9 - 3) + (a11 - 3);
    redes =+ (a5 - 3) + (a8 - 3) + (a10 -3);
    robotica =+ (a1 - 3 ) + (a6 - 3 )+ (a8 - 3 ) + (a10 - 3);
    ia =+ (a2 - 3 ) + (a7 - 3 ) + (a8 - 3);
    console.log(a2 +" "+ a7 +" "+ a8);
    datac =+ (a2 - 3 ) + (a3 - 3 ) + (a5 - 3) + (a7 - 3) + (a8 -3);

    switch (a4){
        case 1:
            redes =+ 1;
            robotica =+ 1;
        case 2:
            redes =+ 2;
            robotica =+ 2;
        case 3:
        case 4:
            ia =+ 1;
            desarrollo =+ 1;
            datac =+ 1;
        case 5:
            ia =+ 2;
            desarrollo =+ 2;
            datac =+ 2;
    }
    console.log("desarrollo "+desarrollo+", redes "+redes+", robotica "+robotica+", ia "+ia+", datac "+datac);
    //falta revisar regreso de resultados -> variables globales o return
}
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

        if(!completeArea || !completeStats){ //Si hay respuestas vacías
            alert(message);
        } else {        //Si el formulario está completo
            //Establecido de valores
            let a1 = $('input[name="form1-p1"]:checked').val();
            let a2 = $('input[name="form1-p2"]:checked').val();
            let a3 = $('input[name="form1-p3"]:checked').val();
            let a4 = $('input[name="form1-p4"]:checked').val();
            let a5 = $('input[name="form1-p5"]:checked').val();
            let a6 = $('input[name="form1-p6"]:checked').val();
            let a7 = $('input[name="form1-p7"]:checked').val();
            let a8 = $('input[name="form1-p8"]:checked').val();
            let a9 = $('input[name="form1-p9"]:checked').val();
            let a10 = $('input[name="form1-p10"]:checked').val();
            let a11 = $('input[name="form1-p11"]:checked').val();
            
            let redes = 10, desarrollo = 10, robotica = 10, ia = 10, datac = 10;

            //Obtencion de puntaje por área
            desarrollo =+ (a1 - 3) + (a9 - 3) + (a11 - 3);
            redes =+ (a5 - 3) + (a8 - 3) + (a10 -3);
            robotica =+ (a1 - 3 ) + (a6 - 3 )+ (a8 - 3 ) + (a10 - 3);
            ia =+ (a2 - 3 ) + (a7 - 3 ) + (a8 - 3);
            console.log(a2 +" "+ a7 +" "+ a8);
            datac =+ (a2 - 3 ) + (a3 - 3 ) + (a5 - 3) + (a7 - 3) + (a8 -3);

            switch (a4){
                case 1:
                    redes =+ 1;
                    robotica =+ 1;
                case 2:
                    redes =+ 2;
                    robotica =+ 2;
                case 3:
                case 4:
                    ia =+ 1;
                    desarrollo =+ 1;
                    datac =+ 1;
                case 5:
                    ia =+ 2;
                    desarrollo =+ 2;
                    datac =+ 2;
            }
            //Llamado a función para obtención de valores por área
            
            //getScoreperArea();
            artistico = $('input[name="form1-p1"]:checked').val();
            comportamientos= $('input[name="form1-p2"]:checked').val();
            predecir= $('input[name="form1-p3"]:checked').val();
            computadora= $('input[name="form1-p4"]:checked').val();
            estructurar= $('input[name="form1-p5"]:checked').val();
            manualidades= $('input[name="form1-p6"]:checked').val();
            numeros= $('input[name="form1-p7"]:checked').val();
            automatizar= $('input[name="form1-p8"]:checked').val();
            sitiosweb= $('input[name="form1-p9"]:checked').val();
            dispelectricos= $('input[name="form1-p10"]:checked').val();
            proyectos= $('input[name="form1-p11"]:checked').val();
            //form 2
            salmensual= $('input[name="form2-p1"]:checked').val();
            presley= $('input[name="form2-p2"]:checked').val();
            presleyup= $('input[name="form2-p3"]:checked').val();
            temptras= $('input[name="form2-p4"]:checked').val();
            seguromed= $('input[name="form2-p5"]:checked').val();
            satisfaccion= $('input[name="form2-p6"]:checked').val();
            const postData = {
                //form 1
                artistico: artistico,
                comportamientos: comportamientos,
                predecir: predecir,
                computadora: computadora,
                estructurar: estructurar,
                manualidades: manualidades,
                numeros: numeros,
                automatizar: automatizar,
                sitiosweb: sitiosweb,
                dispelectricos: dispelectricos,
                proyectos: proyectos,
                DesarrolloWeb: desarrollo,
                Redes:redes,
                RoboticaCircuitos: robotica,
                InteligenciaArtificial: ia,
                CienciaDatos: datac,
                //form 2
                salmensual: salmensual,
                presley: presley,
                presleyup: presleyup,
                temptras: temptras,
                seguromed: seguromed,
                satisfaccion: satisfaccion
            };
            console.log(postData);
            //Envío a base de datos
            dataJsonString = JSON.stringify(postData);
            console.log(dataJsonString);

             let url = 'backend/resp-add.php';
             $.post(url, postData, function(response){
                console.log(dataJsonString);
                $('#form').trigger('reset');
                alert(response);
            });
            e.preventDefault();
        }

        
        //alert("Se ha presionado enviar");
    });
});
