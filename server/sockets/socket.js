const {
    io
} = require('../server');

// con este comando sabremos cuando se conecta un usuario
io.on('connection', (client) => {
    //onsole.log(client);
    console.log('Usuario Conectado');

    // esto se dispara cuando algun cliente se desconecta del Server
    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    // escuchar al cliente
    // con el on y ponemos con primer parametro el evento que se creo en el frontend, todo esto lo resolvemos con un callback para poder recibir
    client.on('enviarMensaje', (message, callback) => {
        console.log(message);
        if (message.usuario) {
            callback({
                respuesta: 'todo salio bien'
            });
        } else {
            callback({
                respuesta: 'Salio Malll!!!!!!'
            });
        }
    });

    // es de esta manera que enviamos un mensaje al servidor, con un emit
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido al esta app'
    });

});