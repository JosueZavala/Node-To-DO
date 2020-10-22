//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv
const ToDo = require('./To-do/To-do');
const color = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = ToDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = ToDo.getListado();
        for (let tarea of listado) {
            console.log('======To do======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================'.green);
        }
        break;

    case 'actualizar':
        let actualizado = ToDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = ToDo.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido.');
}