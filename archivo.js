const opciones={
    matematicas:{
        defualt:0,
        alias:'m'
    },
    ingles:{
        default:0,
        alias:'i'
    },
    programacion:{
        demand:true,
        alias:'p'
    }
}

const argv = require('yargs')
.command('promedio','Calcular el promedio de los estudiantes',opciones)
.argv;

console.log(argv.matematicas);
console.log(`El nombre del estudiante es:${argv.nombre}`);
console.log(argv);
console.log('el promedio es:'+(argv.m+argv.i+argv.p)/3);