//nombre: Vanexel David Leiva Barrientos 22-02244-1
//curso: desarollo de entornos III
//year: 2024

const http = require('http')

//funcion que gestiona la respuesta del servidor
const handleRequest =(req,res)=>{
    res.statusCode = 200;
    res.end('Hola desde Node.js!')
}

//creacion del servidor
const servidor = http.createServer(handleRequest)

//puerto
const puerto = 3000

//servidor iniciado
servidor.listen(puerto,()=>{
    console.log(`el servidor escucha desde el puerto ${puerto}`);
})
