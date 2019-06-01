const estudiante1 = require ('./calculo.js');

//console.log(estudiante1);
console.log(`prueba --- de funcion ${estudiante1.obtenerPromedio(estudiante1.estudiante.notas.matematicas,
    estudiante1.estudiante.notas.ingles,estudiante1.estudiante.notas.programacion)}`);


    const {estudiante,obtenerPromedio} = require ('./calculo.js');

//console.log(estudiante1);
console.log(`prueba 2222 --- de funcion ${obtenerPromedio(estudiante.notas.matematicas,
    estudiante.notas.ingles,estudiante.notas.programacion)}`);

    let {nombre,edad:anos,notas:{matematicas,ingles,programacion}}=estudiante;

    console.log(`el nombre del estudiante es:${nombre}`)
    console.log(`nota de matematicas es:${matematicas}`)
    console.log(`la edad del estudiante es :${anos}`)

    const fs = require('fs');
    let crearArchivo=()=>{
        texto ='el nombre del estudiante es:'+nombre+'\n'+
        'ha obtenido un promedio de '+obtenerPromedio(matematicas,ingles,programacion);
        fs.writeFile('promedio.txt',texto,(error)=>{
            if(error) throw (error);
            console.log('Se ha escrito el archivo');
        });

    }

    crearArchivo();