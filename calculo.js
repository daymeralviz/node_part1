
let estudiante = {
    nombre:'Daymer',
    edad:34,
    notas:{
        matematicas:3,
        ingles:4,
        programacion:5
    }
}

let obtenerPromedio = (nota1,nota2,nota3)=> (nota1+nota2+nota3)/3;



module.exports={
    estudiante,
    obtenerPromedio
}