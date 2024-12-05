$(document).ready(function(){
    //Gráfica edades
    const labelsAge = ['16-25', '26-35', '36-45', '46-55', '56-65', '65-80']
    const graphAge = document.querySelector("#graphAge");

    const dataAge = {
        labels: labelsAge,
        datasets: [{
            label: "Personas",
            data: [2,3,4,5,6,1], //Sustituir en orden
            backgroundColor: 'rgba(144, 12, 63,0.4)',
            borderColor: 'rgba(144, 12, 63,1)',
            borderWidth: 1
        },
        ]
    };

    const configAge = {
        type: 'bar',
        data: dataAge,
    };

    new Chart(graphAge, configAge);

    //Gráfica personas por área
    const labelsArea = ['Redes', 'Robótica y Circuitos', 'Inteligencia Artificial', 'Ciencia de Datos', 'Desarrollo Web']
    const graphArea = document.querySelector("#graphArea");

    const dataArea = {
        labels: labelsArea,
        datasets: [{
            label: "Personas",
            data: [2,3,4,5,6], //Sustituir en el orden redes, robot, ia, cienciaD, desarolloW
            backgroundColor: 'rgba(229,112,126,0.4)',
            borderColor: 'rgba(229,112,126,1)',
            borderWidth: 1
        },
        ]
    };

    const configArea = {
        type: 'bar',
        data: dataArea,
    };

    new Chart(graphArea, configArea);

    //Gráfica salario
    const labelsSalary = ['Menos de $8000', 'De $8000 a $16000', 'De $16000 a $24000', 'Más de $24000']
    const graphSalary = document.querySelector("#graphSalary");
    const dataSalary = {
        labels: labelsSalary,
        datasets: [{
            label: "Respuestas",
            data: [2,3,4,5], //Sustituir en el orden redes, robot, ia, cienciaD, desarolloW
            backgroundColor: 'rgba(230,181,102,0.5)',
            borderColor: 'rgba(230,181,102,1)',
            borderWidth: 1
        },
        ]
    };
    const configSalary = {
        type: 'bar',
        data: dataSalary,
    };
    new Chart(graphSalary, configSalary);

    
    const labelsYesNo = ['Sí', 'No']
    const colorsYN0 = ['rgba(141, 16, 16,0.5)', 'rgba(141, 79, 16,0.5)',];
    const bordercolorYN0 = ['rgba(141, 16, 16,1)', 'rgba(141, 79, 16,1)'];

    const colorsYN1 = ['rgba(236, 73, 134,0.5)', 'rgba(236, 93, 73,0.5)',];
    const bordercolorYN1 = ['rgba(236, 73, 134,1)', 'rgba(236, 93, 73,1)'];

    const colorsYN2 = ['rgba(238, 46, 53,0.5)', 'rgba(238, 135, 46,0.5)',];
    const bordercolorYN2 = ['rgba(238, 46, 53,1)', 'rgba(238, 135, 46,1)'];

    const colorsYN3 = ['rgba(238, 142, 46,0.5)', 'rgba(238, 238, 46,0.5)',];
    const bordercolorYN3 = ['rgba(238, 142, 46,1)', 'rgba(238, 238, 46,1)'];
    
    

    

    //Gráfica prestaciones de ley
    const graphBenefits = document.querySelector("#graphBenefits");
    const dataBenefits = {
        labels: labelsYesNo,
        datasets: [{
            data: [15,18], //Reemplazar por consulta en base de datos
            backgroundColor: colorsYN0,
            borderColor: bordercolorYN0,
            borderWidth: 1
        }]
    };
    const configBenefits = {
        type: 'pie',
        data: dataBenefits,
    };

    new Chart(graphBenefits, configBenefits);
    
    //Gráfica Prestaciones de ley superiores
    const graphUpperBenefits = document.querySelector("#graphUpperBenefits");

    const dataUpperBenefits = {
        labels: labelsYesNo,
        datasets: [{
            data: [14,16], //Reemplazar por consulta en base de datos
            backgroundColor: colorsYN1,
            borderColor: bordercolorYN1,
            borderWidth: 1
        }]
    };

    const configUpperBenefits = {
        type: 'pie',
        data: dataUpperBenefits,
    };

    new Chart(graphUpperBenefits, configUpperBenefits);

    //Gráfica tiempo de traslado
    const labelsTime = ['Menos de 30 minutos', 'Entre 30 y 60 minutos', 'Más de 60 minutos']
    const graphTime = document.querySelector("#graphTime");

    const dataTime = {
        labels: labelsTime,
        datasets: [{
            label: "Respuestas",
            data: [2,3,4], //Sustituir en el orden redes, robot, ia, cienciaD, desarolloW
            backgroundColor: 'rgba(232,233,161,0.5)',
            borderColor: 'rgba(230,181,102,1)',
            borderWidth: 1
        },
        ]
    };
    const configTime = {
        type: 'bar',
        data: dataTime,
    };
    new Chart(graphTime, configTime);

    //Gráfica Seguro Medico
    const graphMedicalInsurance = document.querySelector("#graphMedicalInsurance");
    const dataMedicalInsurance = {
        labels: labelsYesNo,
        datasets: [{
            data: [1, 3], //Reemplazar por consulta en base de datos
            backgroundColor: colorsYN2,
            borderColor: bordercolorYN2,
            borderWidth: 1
        }]
    };

    const configMedicalInsurance = {
        type: 'pie',
        data: dataMedicalInsurance,
    };

    new Chart(graphMedicalInsurance, configMedicalInsurance);

    //Gráfica Satisfacción
    const graphSatisfaction = document.querySelector("#graphSatisfaction");

    const dataSatisfaction = {
        labels: labelsYesNo,
        datasets: [{
            data: [19, 20], //Reemplazar por consulta en base de datos
            backgroundColor: colorsYN3,
            borderColor: bordercolorYN3,
            borderWidth: 1
        }]
    };

    const configSatisfaction = {
        type: 'pie',
        data: dataSatisfaction,
    };

    new Chart(graphSatisfaction, configSatisfaction);
});