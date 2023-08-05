function andresTorres() {
    limpiarCamposTorres();
    // Acá de define la función para guardar datos dentro de la función mostrarModal (función anidada)
    function guardarDatos() {
        /**
         * Acá se capturan los datos del DOM
         */

        // Por ejemplo:
        var inputValor = $("#input_valor_torres").val();
        console.log('Valor capturado:', inputValor);
        /** 
         * Se crea la ruta para enviar los datos al back end mediante la tecnología FETCH de Js
         *  
         */



    }

    // Se asignsa la función guardarDatos al botón de guardar en el modal
    $('#boton_guardar_datos_cliente').click(guardarDatos);
}
