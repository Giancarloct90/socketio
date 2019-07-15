        // podemos usar io por la libreria que acabamos de importar en la parte de arriba
        var socket = io();

        // con esto sabremos cuando nos conectamos al servidor
        socket.on('connect', function () {
            console.log('Conectado al Servidor');
        });

        // con esto sabremos que estamos desconectado del servidor
        // se dispara automaticamente cuando el servidor se cae por alguna razon
        socket.on('disconnect', function () {
            console.log('Perdimos conexion con el Server');
        });

        // los emmit son para enviar informacion al servidor
        // los on son para escuchar informacion
        // con emit estamos enviando msj al servidor, escribimos un string del evento y luego le mandamos que querramos en este caso un objeto
        socket.emit('enviarMensaje', {
            usuario: 'Fernando',
            mensaje: 'Hola Mundo'
        }, function (resp) {
            console.log('Respuesta Server:', resp);
        });

        // vamos a escuchar informacion que proviene del server, y estamos usando el evento de enviarMensaje
        socket.on('enviarMensaje', function (msj) {
            console.log('Server: ', msj);
        });