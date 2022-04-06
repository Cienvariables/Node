// //Requerimos el paquete
// const fs = require('fs');
// //Usamos el método de la librería
// fs.writeFile(file, data[, options], callback)
// Transformo el array en una cadena de texto y lo guardo en el archivo de texto  "example_1.txt"
// fs.writeFile('example_1.txt', JSON.stringify(array), (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });  //otro


//Requerimos el paquete //// fs.writeFile(file, data que quiero que escriba[, options], callback)


const fs = require('fs'); //primo hermano de import export, de ES5 no ES6(no le va a node import/export)

// Creamos un array de objetos que representan personas

const avengers = [
  {
    name: 'SpiderMan',
    power: 70
  },
  {
    name: 'Dr.Strange',
    power: 80
  },
  {
    name: 'Hulk',
    power: 110
  }
];

// Transformamos el array a un JSON en formato String
// Stringify es un método de JSON, en formato cadena de texto con las comillas dobles
// pq necesito escribir texto en un archivo necesito texto

// const avengersJson = JSON.stringify(avengers);

// Creamos el archivo people.json y dejamos que el callback
// nos avise cuando se complete la escritura.
// fs.writeFile(file, data que quiero que escriba[, options], callback) // La  escritura requiere un callback


// fs.writeFile('avengers.json', avengersJson, () => { // nombre del archivo a crear, y del lo que lo contiene
//   console.log('avengers.json created!');
// })


// Introducimos en la terminal el comando node createAvengers
// Aplicacion: el servidor puede recojer unos datos que le estan llegando
// por una llamada y guardarselos en un archivo parcial, para mandarlo a
// una DB, hacer un calculo con el, etc.

// Igualmente podemos LEER un archivo y convertirlo a un array de objetos

//Con el mismo paquete fs

//Usamos el método de la librería
// fs.readFile(file, callback(error, data) => {})
// La escritura de un fichura depende del tiempo que tarde en leerla x eso hay callback

// Vamos paso por paso con cada argumento de la función:

// - **file →** Esto será un string que representará el nombre del archivo.
// - **data →** La información en formato string que leemos del archivo.
// - **error →**  Ops! hay problemas en la lectura.

// Ahora podemos crear un fichero desde Node.Js → vamos a ello

// const fs = require('fs');

// Leemos un archivo en la dirección dada y el callback es invocado
// cuando se termina de leer y procesar el archivo

// fs.readFile('avengers.json', (err, avengers) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     // Si obtenemos los datos y no un error, habrá que transformar
//     // la información con JSON.parse() para poder mostrarla //MOSTRAR
//     const parsedAvengers = JSON.parse(avengers);
//     console.log(parsedAvengers);
//   }
// });

// Introducimos en la terminal el comando node readAvengers
// y en consola aparece el contenido del archivo avengers.json


// el dia de mañana habra un endpoint que mediante un POST  nos devuelva una respuesta  datos (nombre de la persona)
// y una respuesta de status (200 o 500).   (200 en el caso de que no se pueda crear el archivo)
// tendra su variable de datos  y su variable de status (500)
// recoje los datos en la variable, necesito tenerlos en este fichero,
// o en una DB o una consulta y meterlo en un indice de la DB.

//para practicar lo de arriba, vamos a crear una carpeta en la carpeta node_scripts
// y dentro de ella un fichero con el nombre de avengers.json
// y dentro de ella un array de objetos con los datos de las personas
// y una funcion que nos devuelva una respuesta con los datos de la persona
// y una respuesta de status (200 o 500).   (200 en el caso de que no se pueda crear el archivo)
// tendra su variable de datos  y su variable de status (500)
// recoje los datos en la variable, necesito tenerlos en este fichero,
// o en una DB o una consulta y meterlo en un indice de la DB.


// Read JSON 
// Creacion de tantos ficheros como items haya en el fichero JSON


const avengersJson = JSON.stringify(avengers);

fs.readFile('avengers.json', (err, avengers) => {
  if (err) {
    console.error(err.message);
  } else {
    fs.writeFile('avengers.json', avengersJson, () => { // nombre del archivo a crear, y del lo que lo contiene
      console.log('avengers.json created!');
    })
  }
});




// METODOS
//Leer metodo de libreria, hay unos cuantos ..
// appendFile(no crea un nuevo fichero, solo lo actualiza), (concatena ficheros), createReadStream, createWriteStream,
//  readFile, readFileSync, readdir(..muchos son los comandos de ficheros), readdirSync, readlink, readlinkSync, realpath, realpathSync, rename, renameSync, rmdir, rmdirSync, stat, statSync, symlink, symlinkSync, truncate, truncateSync, unlink, unlinkSync, utimes, utimesSync, write, writeFile, writeFileSync, writeSync
//fs.readFile(file, callback(error, data) => {})