function andresTorres() {
    limpiarCamposTorres();

    function guardarDatos() {
        var nombreCliente = $("#input_nombre_cliente").val();
        var fechaNacimiento = $("#input_fecha_nacimiento").val();

        if (nombreCliente === "") {
            Swal.fire('Debe ingresar el nombre del cliente!', '', 'error');
            return;
        }

        if (fechaNacimiento === "") {
            Swal.fire('Debe ingresar la fecha de nacimiento!', '', 'error');
            return;
        }

        // Datos a enviar al servidor en formato JSON // agregar datos faltantes
        var datos = {
            nombreCliente: nombreCliente,
            fechaNacimiento: fechaNacimiento
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

    $('#boton_guardar_datos_cliente').click(guardarDatos);
}
