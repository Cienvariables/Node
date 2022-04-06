// https://developer.mozilla.org/es/docs/Web/HTTP/Overview

// Los mensajes que envía el cliente, normalmente un navegador Web,
// se llaman peticiones, y los mensajes enviados por el servidor se llaman respuestas
//   El agente del usuario, es cualquier herramienta que actué en representación del usuario.
//   Esta función es realizada en la mayor parte de los casos por un navegador Web.
//   Hay excepciones, como el caso de programas específicamente usados por desarrolladores
//   para desarrollar y depurar sus aplicaciones.
// Un servidor conceptualmente es una unica entidad, aunque puede estar
// formado por varios elementos.

// De esta forma se nos generará un fichero `package.json` con los datos de nuestro servidor
//  y nos permitirá arrancar el servidor mediante `npm run start`.
// Cuando abramos un servidor, esté se mantendrá abierto hasta que decidamos
// cerrarlo manualmente o sufra un error inesperado. //  Crea un archivo **server.js** y añade el siguiente código en su interior:

// paquete http server  //
// const http = require('http');

// const PORT = 3000;
// const server = http.createServer();

// // El servidor necesita dos argumentos, el puerto y un callback
// // para cuando empiece a funcionar cuando usemos node.
// server.listen(PORT, () => {
//   console.log(`Server started in http://localhost:${PORT}`);
// });

// Ya tenemos levantado nuestro servidor, ahora si acedemos a
// **[http://localhost:3000]

// Para configurar respuesta en el servidor vamos a crear una función
// **requestHandler** y la pasaremos por argumento a la función **createServer**
// para poder acceder a la información que el navegador manda al servidor.

// const http = require('http');

// // Se encarga de escuchar las peticiones que lleguen al servidor.
// const requestHandler = (req, res) => { // Maneja peticiones
//   console.log(req); // request info --> Metodo del que ha hecho la request get, información sobre las Cookies, la sesión, la url, y todos los headers que identifican una petición HTTP.
//   // Por ejemplo, si una persona hace una petición a nuestro servidor, la información de éste llegará en la Request que identificaremos como req, y usando esos datos podemos obtener si un usuario accede desde una sesión tras registrarse o no tiene sesión, para luego enviarle la información que creamos necesaria utilizando el argumento Response que identificaremos como res y es capaz de utilizar funciones para enviar respuestas al usuario.
//   console.log(res); // response info --> Lo que yo le devuelvo al frontal
// };

// const PORT = 3000;
// const server = http.createServer(requestHandler);// Se la paso por parametro a la hora de levantar el servidor

// server.listen(PORT, () => {
//   console.log(`Server started in http://localhost:${PORT}`);
// });


// Si ahora abres de nuevo el servidor y lanzas una petición desde tu[navegador]
//   (http://localhost:3000/), verás que en la consola aparece un output muy
//     largo para ** req ** y otro para ** res.**

//     - ** req →** El argumento req se refiere a ** request **, es decir,
//     el contenido que llega desde el navegador al servidor.
//     Contendrá información sobre las Cookies, la sesión, la url,
//     y todos los headers que identifican una petición HTTP.
//     - ** res →** El argument res se refiere a ** response **
//     y es capaz de indicar a nuestro servidor la forma en la que queremos envíar
//     la información de vuelta al navegador.

//     Por ejemplo, si una persona hace una petición a nuestro servidor,
//      la información de éste llegará en la Request que identificaremos como ** req **,
//       y usando esos datos podemos obtener si un usuario accede desde una sesión
//       tras registrarse o no tiene sesión, para luego enviarle la información que
//       creamos necesaria utilizando el argumento Response que
//       identificaremos como ** res ** y es capaz de utilizar funciones para enviar respuestas al usuario.

//     Ahora vamos a modificar nuestra función ** requestHandler ** para mandar al
//      usuario un mensaje que diga "¡El servidor esta funcionando!".

// const requestHandler = (req, res) => {
//   // Indicamos que vamos a responder con un contenido de tipo json
//   res.setHeader("Content-Type", "text/json");
//   // Indicamos que la respuesta será el status 200 (éxito)
//   res.writeHead(200);
//   // Enviamos la respuesta a nuestros usuarios
//   res.end('¡El servidor está funcionando!')
// };

// -------

// const http = require('http');

// // Se encarga de escuchar las peticiones que lleguen al servidor.
// const requestHandler = (req, res) => { // Maneja peticiones

//   // Indicamos que vamos a responder con un contenido de tipo json
//   res.setHeader("Content-Type", "text/json");
//   // Indicamos que la respuesta será el status 200 (éxito)
//   res.writeHead(200);
//   // Enviamos la respuesta a nuestros usuarios
//   res.end('¡El servidor está funcionando!')
// };
// const PORT = 3000;
// const server = http.createServer(requestHandler);// Se la paso por parametro a la hora de levantar el servidor

// server.listen(PORT, () => {
//   console.log(`Server started in http://localhost:${PORT}`);
// });

// --------------------------Routes HTTP-------------------------------------
// Para diferenciar las rutas de un servidor HTTP, utilizaremos el argumento req que vimos antes.
// Este argumento contiene la propiedad url a la que accederemos mediante req.url
// y será igual a la url que el usuario pida desde el servidor.

// const http = require('http');

// const requestHandler = (req, res) => {
//   console.log(req.url);
// };

// const PORT = 3000;
// const server = http.createServer(requestHandler);

// server.listen(PORT, () => {
//   console.log(`Server started in http://localhost:${PORT}`);
// });


// Si accedes ahora a http://localhost:3000 verás que aparece un log en
// la terminal
// que indica nuestro path actual /.
// Esto significa que hemos accedido a la raíz de nuestro servidor.
// Si ahora accedes a http://localhost:3000/avengers podrás ver
//  en consola como aparece /avengers escrito.
//  Esta es la forma que tiene Node.js de decirnos qué es lo que piden nuestros usuarios.

// Estos path son también conocidos como endpoints y serán nuestra principal
// herramienta para organizar un servidor. Hagamos un ejemplo en el que si
// un usuario accede a http://localhost:3000/hello el servidor le responda 'Hello from Upgrade Hub!'.

const { appendFile } = require('fs');
const http = require('http');

const requestHandler = (req, res) => {
  if (req.url === '/hello') { // Tengo que controlar de las request la url que le estan haciendo
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    // ---------res.end('Hello from Upgrade Hub!');
    res.end(JSON.stringify(user));
  } else if (req.url === '/users/1') { //user 1
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    const user = [{ id: 1, name: 'Juan' }]; // Esto YA va 
    res.end(JSON.stringify(user));
  }
};

// SI creara un JSON con los user en lugar de recibirlos por appendFile podria tenerlos algo asi

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});

// Levantamos el servidor y accederemos en el navegador a la dirección
//  http://localhost:3000/hello para obtener la siguiente respuesta: