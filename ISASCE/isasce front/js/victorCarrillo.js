function victorCarrillo() {
    limpiarCamposCarrillo();
    // Acá de define la función para guardar datos dentro de la función mostrarModal (función anidada)
    function guardarDatos() {
        /**
         * Acá se capturan los datos del DOM
         */

        // Por ejemplo:
        var inputValCodSuc = $("#input_codigo_sucursal").val();
        console.log('inputValCodSuc:', inputValCodSuc);
        var inputValNomSuc = $("#input_nombre_sucursal").val();
        console.log('inputValNomSuc:', inputValNomSuc);
        var inputValDirSuc = $("#input_direccion_sucursal").val();
        console.log('inputValDirSuc:', inputValDirSuc);
        var inputValTipSuc = $("#select_tipo_sucursal").val();
        console.log('inputValTipSuc:', inputValTipSuc);
        var inputValFecSuc = $("#input_fecha_sucursal").val();
        console.log('inputValFecSuc:', inputValFecSuc);
        var inputValObsSuc = $("#input_observaciones_sucursal").val();
        console.log('inputValObsSuc:', inputValObsSuc);
        //
        // Validar datos
        if (inputValCodSuc === "") {
            Swal.fire('Debe ingresar el codigo de la sucursal!', '', 'error');
            return;
        }
        if (inputValNomSuc === "") {
            Swal.fire('Debe ingresar el nombre de la sucursal!', '', 'error');
            return;
        }
        if (inputValDirSuc === "") {
            Swal.fire('Debe ingresar la dirección de la sucursal!', '', 'error');
            return;
        }
        if (inputValTipSuc === "") {
            Swal.fire('Debe ingresar el tipo de la sucursal!', '', 'error');
            return;
        }
        if (inputValFecSuc === "") {
            Swal.fire('Debe ingresar la fecha creación de la sucursal!', '', 'error');
            return;
        }
        if (inputValObsSuc === "") {
            Swal.fire('Debe ingresar la observacion de la sucursal!', '', 'error');
            return;
        }
        /** 
         * Se crea la ruta para enviar los datos al back end mediante la tecnología FETCH de Js
         *  
         */ 
        // Datos a enviar al servidor en formato JSON // agregar datos faltantes
        var datos = {
            inputValCodSuc:inputValCodSuc,
            inputValNomSuc: inputValNomSuc,
            inputValDirSuc: inputValDirSuc,
            inputValTipSuc: inputValTipSuc,
            inputValFecSuc:inputValFecSuc,
            inputValObsSuc:inputValObsSuc
            };

        // Configuración para el fetch
        var fetchConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        };

        // URL del endpoint en el servidor Node.js
        var url = 'http://localhost:4000/api/sucursal';

        // Realizar el fetch
        fetch(url, fetchConfig)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor.');
                }
                return response.json();
            })
            .then(data => {
                // Aquí manejamos la respuesta exitosa del servidor (data)
                console.log('Respuesta del servidor:', data);
                // Acá se puede mostrar una alerta o actualizar el DOM según se requiera
                Swal.fire('Datos guardados correctamente!', '', 'success');
            })
            .catch(error => {
                // Aquí manejamos los errores del fetch o del servidor
                console.error('Error:', error);
                Swal.fire('Error al guardar los datos.', '', 'error');
            });


    }

    // Asignaa la función guardarDatos al botón de guardar en el modal
    $('#boton_guardar_datos_sucursal').click(guardarDatos);
}