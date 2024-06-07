// Importa el módulo http
const http = require('http');

// Crea una función handleRequest que recibe una solicitud (req) y una respuesta (res)
function handleRequest(req, res) {
    if (req.method === 'POST') {
        let body = '';

        // Lee el cuerpo de la solicitud
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Una vez finalizada la lectura del cuerpo
        req.on('end', () => {
            // Extrae el nombre del cuerpo de la solicitud
            const params = new URLSearchParams(body);
            const nombre = params.get('nombre');

            // Establece el código de estado de la respuesta a 200 (OK)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');

            // Envía una respuesta con el mensaje personalizado
            res.end(`Hola, ${nombre}!`);
        });
    } else {
        // Maneja otros métodos HTTP (por ejemplo, GET)
        res.statusCode = 405; // Método no permitido
        res.setHeader('Content-Type', 'text/plain');
        res.end('Método no permitido');
    }
}

// Crea un servidor HTTP utilizando http.createServer y pasa handleRequest como controlador de solicitudes
const server = http.createServer(handleRequest);

// Inicia el servidor escuchando en el puerto 3000
server.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});
