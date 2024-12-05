
function init() {
    /**
     * Convierte el JSON a string para poder mostrarlo
     * ver: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON
     */
}

$(document).ready(function() {
    let edit = false;
    fetchProducts();
    console.log("jQuery is ready");

    //Funcion buscar con Jquery
    $('#search').keyup(function (e) {
        if ($('#search').val()) {
            let search = $('#search').val();
        console.log(search);
        $.ajax(
            {
                url: '../backend/backend4login/search',
                type: 'POST',
                data: {search},
                success: function(response) {
                    let areas = (JSON.parse(response));
                    let template = "";
                    areas.forEach(area => {
                        console.log(area);
                        template += `<li>${area.nombre}</li>`;
                    });
                    if (areas.length > 0) {
                        $("#area-result").removeClass("d-none");
                    }
                    $('#container').html(template);

                    //Se listan los productos que coinciden con la busqueda con todos sus datos
                    $("#areas").html("");
                    areas.forEach(area => {
                        $("#areas").append(`
                            <tr areaId="${area.id}">
                                <td>${area.id}</td>
                                <td>
                                    <a href="#" class="area-item">${area.nombre}</a>
                                </td>
                                <td>${area.descripcion}</td>
                                <td>
                                    <ul>${area.trab1}</ul>
                                    <ul>${area.trab2}</ul>
                                    <ul>${area.trab3}</ul>
                                </td>
                                <td>
                                    <ul>${area.curso1}</ul>
                                    <ul>${area.curso2}</ul>
                                </td>
                            </tr>
                        `);
                    });
                }

            }
        )
        }

    });

    //Enviar Productos con jquery
    $("#area-form").submit(function (e) {
        e.preventDefault();

        id = $('#areaId').val();
        nombre = $('#name').val();
        descripcion = $('#description').val();
        trab1 = $('#urlwork1').val();
        trab2 = $('#urlwork2').val();
        trab3 = $('#urlwork3').val();
        curso1 = $('#urlcourse1').val();
        curso2 = $('#urlcourse2').val();

        const data = {
            id: id,
            nombre: nombre,
            descripcion: descripcion,
            trab1: trab1,
            trab2: trab2,
            trab3: trab3,
            curso1: curso1,
            curso2: curso2,
        };

        //se convierte a string para poder enviarlo
        dataJsonString = JSON.stringify(data);

        console.log(data);
        console.log(dataJsonString);
        let url =
            edit === false ? "../backend/backend4login/list" : "../backend/backend4login/list";
        $.post(url, dataJsonString, function (response) {
            console.log(response);
            let message= JSON.parse(response);
            let template = "";
            template = `<p>${message.message}</p>`;
            $("#area-form").trigger("reset");
            //init();
            alert(response);
            fetchProducts();

            if (message.message.length > 0) {
                $("#area-result").removeClass("d-none");
            }

            $("#container").html(template);
        

        });
        e.preventDefault();
    });

    //validar descripción
    $("#description").keyup(function() {
        let descripcion = $("#description").val();
        if (descripcion.trim() === "") {
            $("#description").addClass("is-invalid");
            $("#description").removeClass("is-valid");
        }
        else {
            $("#description").addClass("is-valid");
            $("#description").removeClass("is-invalid");
        }
    });
    //Validar el ingreso de al menos un url de cada tipo
    $("#urlwork1").keyup(function() {
        let trab1 = $("#urlwork1").val();
        if (trab1.trim() === "") {
            $("#urlwork1").addClass("is-invalid");
            $("#urlwork1").removeClass("is-valid");
        }
        else {
            $("#urlwork1").addClass("is-valid");
            $("#urlwork1").removeClass("is-invalid");
        }
    });

    $("#urlcourse1").keyup(function() {
        let curso1 = $("#urlcourse1").val();
        if (curso1.trim() === "") {
            $("#urlcourse1").addClass("is-invalid");
            $("#urlcourse1").removeClass("is-valid");
        }
        else {
            $("#urlcourse1").addClass("is-valid");
            $("#urlcourse1").removeClass("is-invalid");
        }
    });
    /*
    //validar modelo
    $("#model").keyup(function() {
        let model = $("#model").val();
        const modeloRegex = /^[a-zA-Z0-9]+$/;
        if (model.trim() === "" || !modeloRegex.test(model) || model.length > 25) {
            $("#model").addClass("is-invalid");
            $("#model").removeClass("is-valid");
        } else {
            $("#model").addClass("is-valid");
            $("#model").removeClass("is-invalid");
        }
    });
    */

    //Mostrar productos con jquery
    function fetchProducts() {
        $.ajax({
            url: '../backend/backend4login/list',
            type: 'GET',
            success: function (response) {
                let areas = JSON.parse(response);
                let template = "";
                areas.forEach(area => {
                    template += `
                    <tr areaId="${area.id}">
                        <td>${area.id}</td>
                        <td>
                            <a href="#" class="area-item">${area.nombre}</a>
                        </td>
                        <td>${area.descripcion}</td>
                        <td>
                            <ul>${area.trab1}</ul>
                            <ul>${area.trab2}</ul>
                            <ul>${area.trab3}</ul>
                        </td>
                        <td>
                            <ul>${area.curso1}</ul>
                            <ul>${area.curso2}</ul>
                        </td>
                    </tr>
                    `;
                });
                $('#areas').html(template);
            }
        });
    }

    //Editar areas con jquery
    $(document).on("click", ".area-item", function () {
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr("areaId");
        $.post("../backend/backend4login/product-single.php", {id}, function (response) {
            const area = JSON.parse(response);
            console.log(area);
            //asginar valores a los campos del formulario
            $('#areaId').val(area.id);
            $('#name').val(area.nombre);
            $('#description').val(area.descripcion);
            $('#urlwork1').val(area.trab1);
            $('#urlwork2').val(area.trab2);
            $('#urlwork3').val(area.trab3);
            $('#urlcourse1').val(area.curso1);
            $('#urlcourse2').val(area.curso2);
            edit = true;
        });
    });
});