function encontrarMayor(desarrollo,redes,robotica,ia,datac) {        
    const valores = [desarrollo, redes, robotica, ia, datac];
    
    const valorMaximo = Math.max(...valores);

    const indiceMaximo = valores.indexOf(valorMaximo);

    const nombresVariables = ['Desarrollo', 'Redes', 'Robotica y Circuitos', 'Inteligencia Artificial', 'Ciencia de Datos'];
    
    return nombresVariables[indiceMaximo]
}

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
    
    let redes=10, desarrollo = 10, robotica = 10, ia = 10, datac = 10;

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
    
    // Retornar los resultados
    return  { desarrollo, redes, robotica, ia, datac };
}

/*function getArea() {
    const ctx = document.getElementById('areaChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Área 1', 'Área 2', 'Área 3','Área 4','Área 5'],
            datasets: [{
                label: 'Puntuación',
                data: [getScoreperArea()],
                backgroundColor: ['red', 'blue', 'green', 'purple','white'],
            }]
        },
        options: {
            responsive: true
        }
    });
}*/

$(document).ready(function(){
    $('#form').submit(function(e){
        // Obtener elementos del DOM
        const form = document.getElementById("form");
        const responseO = document.getElementById("GraficaRes");

        // Ocultar el div de respuesta al cargar la página
        responseO.style.display = "none";
        
        let completeArea = true;
        let completeStats = true;
        let completePersonal = true;
        let message = "";
        e.preventDefault();
        //Validación de selección de respuesta a todas las preguntas
        if (!$('#nombre').val()=== ""){
            completePersonal = false;
        }
        if ($('#edad').val()=== ""){
            completePersonal = false;
        }
        //Mensaje de no validacón de datos personales
        if(!completePersonal){
            message = message + "Indica tus datos personales. ";
        }

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

        if(!completeArea || !completeStats || !completePersonal ){ //Si hay respuestas vacías
            alert(message);
        } else {        //Si el formulario está completo
            //Envío a base de datos
            //Establecido de valores
            // Ocultar el formulario
            form.style.display = "none";

            // Mostrar el div de respuesta con un mensaje
            responseO.style.display = "block";
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
            desarrollo += (a1 - 3) + (a9 - 3) + (a11 - 3);
            redes += (a5 - 3) + (a8 - 3) + (a10 -3);
            robotica += (a1 - 3 ) + (a6 - 3 )+ (a8 - 3 ) + (a10 - 3);
            ia += (a2 - 3 ) + (a7 - 3 ) + (a8 - 3);
            console.log(a2 +" "+ a7 +" "+ a8);
            datac += (a2 - 3 ) + (a3 - 3 ) + (a5 - 3) + (a7 - 3) + (a8 -3);

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
            
            nombre = $('#nombre').val();
            edad = $('#edad').val();
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
                nombre: nombre,
                edad: edad,
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
            

             let url = './backend/backend4form/resp-add.php';
             $.post(url, postData, function(response){
                console.log(postData);
                $('#form').trigger('reset');
                alert(response);
            });
            //e.preventDefault();
            

            const scores = getScoreperArea();
            const mayor = encontrarMayor(scores.desarrollo, scores.redes, scores.robotica, scores.ia, scores.datac);

            // Mostrar resultados iniciales en el HTML
            const responseDiv = document.getElementById("GraficaRes");
            responseDiv.innerHTML = `
                <h2 style="text-align: center; color: #4CAF50;">Resultados por Área</h2>
                <div style="padding: 10px; font-family: Arial, sans-serif; line-height: 1.6;">
                    <p style="font-size: 18px; font-weight: bold; margin-top: 20px;">
                        El área donde te recomendamos es: <span style="color: #FF5722;">${mayor}</span>
                    </p>
                </div>
                <table id="areas" style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
                    <thead>
                        <tr style="background-color: #f2f2f2; text-align: left; border-bottom: 2px solid #ddd;">
                            <th style="padding: 8px;">ID</th>
                            <th style="padding: 8px;">Nombre</th>
                            <th style="padding: 8px;">Descripción</th>
                            <th style="padding: 8px;">Trabajos</th>
                            <th style="padding: 8px;">Cursos</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            `;
            
            // Solicitud AJAX para obtener detalles del área recomendada
            $.ajax({
                url: './backend/backend4login/product-list.php',
                type: 'GET',
                success: function (response) {
                    // Parsear la respuesta del servidor
                    let areas = JSON.parse(response);

                    // Filtrar áreas por el nombre del área recomendada (mayor)
                    let filteredAreas = areas.filter(area => area.nombre === mayor);

                    // Generar contenido HTML dinámico para la tabla
                    let template = "";
                    filteredAreas.forEach(area => {
                        template += `
                            <tr areaId="${area.id}" style="border-bottom: 1px solid #ddd;">
                                <td style="padding: 8px;">${area.id}</td>
                                <td style="padding: 8px;">
                                    <a href="#" class="area-item" style="color: #2196F3; text-decoration: none;">${area.nombre}</a>
                                </td>
                                <td style="padding: 8px;">${area.descripcion}</td>
                                <td style="padding: 8px;">
                                    <ul>
                                        <li><a href="${area.id}" style="color: #2196F3;">${area.trab1}</a></li>
                                        <li><a href="${area.id}" style="color: #2196F3;">${area.trab2}</a></li>
                                        <li><a href="${area.id}" style="color: #2196F3;">${area.trab3}</a></li>                                    
                                    </ul>
                                </td>
                                <td style="padding: 8px;">
                                    <ul>
                                        <li><a href="${area.id}" style="color: #2196F3;">${area.curso1}</a></li>
                                        <li><a href="${area.id}" style="color: #2196F3;">${area.curso2}</a></li>                
                                    </ul>
                                </td>
                            </tr>
                        `;
                    });

                    // Insertar las filas generadas en el cuerpo de la tabla
                    $('#areas tbody').html(template);
                },
                error: function (error) {
                    console.error("Error al cargar las áreas:", error);
                }
            }); 
            responseDiv.innerHTML += `
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Resultados</h6>
                    </div>
                    <div class="card-body">
                        <h4 class="small font-weight-bold">Desarrollo <span class="float-right">${scores.desarrollo+10}</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-danger" role="progressbar" 
                                style="width: ${(scores.desarrollo+10) * 10}%" 
                                aria-valuenow="${scores.desarrollo}" aria-valuemin="0" aria-valuemax="30"></div>
                        </div>
                        <h4 class="small font-weight-bold">Redes <span class="float-right">${scores.redes+10}</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-warning" role="progressbar" 
                                style="width: ${(scores.redes+10) * 10}%" 
                                aria-valuenow="${scores.redes}" aria-valuemin="0" aria-valuemax="30"></div>
                        </div>
                        <h4 class="small font-weight-bold">Robótica y Circuitos<span class="float-right">${scores.robotica+10}</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar" role="progressbar" 
                                style="width: ${(scores.robotica+10) * 10}%" 
                                aria-valuenow="${scores.robotica}" aria-valuemin="0" aria-valuemax="30"></div>
                        </div>
                        <h4 class="small font-weight-bold">Inteligencia Artificial <span class="float-right">${scores.ia+10}</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-info" role="progressbar" 
                                style="width: ${(scores.ia+10) * 10}%" 
                                aria-valuenow="${scores.ia}" aria-valuemin="0" aria-valuemax="30"></div>
                        </div>
                        <h4 class="small font-weight-bold">Ciencia de Datos <span class="float-right">${scores.datac+10}</span></h4>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" 
                                style="width: ${(scores.datac+10) * 10}%" 
                                aria-valuenow="${scores.datac}" aria-valuemin="0" aria-valuemax="30"></div>
                        </div>
                    </div>
                </div>
            `;
    
        };
        //alert("Se ha presionado enviar");
    });
});