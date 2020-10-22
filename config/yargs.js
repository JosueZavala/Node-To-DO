const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendite la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Crea un archivo en la carpeta Tablas con la base y el limite correspondiente', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra tareas registradas', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}