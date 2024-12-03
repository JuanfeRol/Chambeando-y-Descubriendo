
function init() {
    /**
     * Convierte el JSON a string para poder mostrarlo
     * ver: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON
     */
}

$(document).ready(function() {
    let edit = false;
    //fetchProducts();
    console.log("jQuery is ready");

    //Funcion buscar con Jquery
    $('#search').keyup(function (e) {
        if ($('#search').val()) {
            let search = $('#search').val();
        console.log(search);
        $.ajax(
            {
                url: 'backend/product-search.php',
                type: 'POST',
                data: {search},
                success: function(response) {
                    let areas = JSON.parse(response);
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
        descripcion = $('#description').val();
        trab1 = $('#urlwork1').val();
        trab2 = $('#urlwork2').val();
        trab3 = $('#urlwork3').val();
        curso1 = $('#urlcourse1').val();
        curso2 = $('#urlcourse2').val();

        const data = {
            id: id,
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
            edit === false ? "backend/product-add.php" : "backend/product-edit.php";
        $.post(url, dataJsonString, function (response) {
            console.log(response);
            let message= JSON.parse(response);
            let template = "";
            template = `<p>${message.message}</p>`;
            $("#area-form").trigger("reset");
            //init();
            alert(response);
            //fetchProducts();

            if (message.message.length > 0) {
                $("#area-result").removeClass("d-none");
            }

            $("#container").html(template);
        

        });
        e.preventDefault();
    });

/*
    //validar cada campo del formulario y mostrar el estado en una barra de estado
    //validar que el nombre no exista en la base de datos
    $("#name").keyup(function() {
        let name = $("#name").val();
        //se imprime por consola lo enviado en el campo nombre
        console.log(name);

        //Se envia el nombre a la base de datos para verificar si existe
        $.ajax({
            url: 'backend/search-name.php',
            type: 'POST',
            data: {name},
            success: function(response) {
                let products = JSON.parse(response);
                if (products.length > 0 || name.trim() === "" || name.length > 100) {
                    $("#name").addClass("is-invalid");
                    $("#name").removeClass("is-valid");
                } else {
                    $("#name").addClass("is-valid");
                    $("#name").removeClass("is-invalid");
                }
                //Se listan los productos que coinciden con la busqueda con todos sus datos en consola
                console.log(products);
                //mostrar el resultado de la busqueda en la barra de estado
                let searchProducts = JSON.parse(response);
                let template = "";
                searchProducts.forEach(product => {
                    template += `<li>Producto existente: ${product.nombre} <br>Elige un nuevo nombre por favor</li>`;
                });
                if (searchProducts.length > 0) {
                    $("#product-result").removeClass("d-none");
                }
                $('#container').html(template);
            }
        });
    }
    );
*/
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
            url: 'backend/product-list.php',
            type: 'GET',
            success: function (response) {
                let products = JSON.parse(response);
                let template = "";
                products.forEach(product => {
                    template += `
                    <tr productId="${product.id}">
                        <td>${product.id}</td>
                        <td>
                            <a href="#" class="area-item">${product.nombre}</a>
                        </td>
                        <td>${product.marca}</td>
                        <td>${product.modelo}</td>
                        <td>${product.precio}</td>
                        <td>${product.detalles}</td>
                        <td>${product.unidades}</td>
                        <td>
                            <img src="${product.imagen}" class="img-fluid" alt="Imagen del producto">
                        </td>
                        <td>
                            <button class="product-delete btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                    `;
                });
                $('#products').html(template);
            }
        });
    }

    //Editar productos con jquery
    $(document).on("click", ".area-item", function () {
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr("productId");
        $.post("backend/product-single.php", {id}, function (response) {
            const product = JSON.parse(response);
            console.log(product);
            $('#productId').val(product.id);
            $('#name').val(product.nombre);
            baseJSON = {
                "precio": product.precio,
                "unidades": product.unidades,
                "modelo": product.modelo,
                "marca": product.marca,
                "detalles": product.detalles,
                "imagen": product.imagen
            };
            //asginar valores a los campos del formulario
            $('#price').val(baseJSON.precio);
            $('#units').val(baseJSON.unidades);
            $('#model').val(baseJSON.modelo);
            $('#brand').val(baseJSON.marca);
            $('#details').val(baseJSON.detalles);
            $('#image').val(baseJSON.imagen);
            $('#description').val(baseJSON.nombre);
            edit = true;
        });
    });
});