function eudrey() {
    limpiarCamposEudrey();
    // Acá de define la función para guardar datos dentro de la función mostrarModal (función anidada)
    function guardarDatos() {
        /**
         * Acá se capturan los datos del DOM
         */

        // Por ejemplo:
        var fechaVenta = $("#input_fecha_venta").val();
        console.log('Fecha de venta:', fechaVenta);
        var nombreCliente = $("#input_nombre_cliente_modal_venta").val();
        console.log('Nombre cliente:', nombreCliente);
        /** 
         * Se crea la ruta para enviar los datos al back end mediante la tecnología FETCH de Js
         *  
         */
        // Datos a enviar al servidor en formato JSON // Agregar los datos faltantes
        var datos = {
            fechaVenta: fechaVenta,
            nombreCliente: nombreCliente
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
        var url = 'URL_DEL_ENDPOINT';

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
    $('#boton_guardar_datos_venta').click(guardarDatos);
}