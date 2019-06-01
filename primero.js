console.log('Hola mundo')

function promediar(nota_1,nota_2,nota_3){

    console.log(`Resultado es:${((nota_1+nota_2+nota_3)/3)}`)
}

let promediar2=(nota_1,nota_2,nota_3)=>console.log(`Resultado -===-- es:${((nota_1+nota_2+nota_3)/3)}`)

let promediar3=(nota_1,nota_2,nota_3)=>{
    setTimeout(function (){
        console.log(`Resultado **** es:${((nota_1+nota_2+nota_3)/3)}`)
    }
    ,2000)
}

let promediar4=(nota_1,nota_2,nota_3,call_back)=>{
    setTimeout(function (){
        let resultado=((nota_1+nota_2+nota_3)/3)
        call_back (resultado);
    }
    ,0)
}

promediar(2,4,9)
promediar2(2,4,9)
promediar3(3,5,8)
promediar4(1,3,9,function(resultado){
    console.log(`Resultado con callback:${resultado}`)
})

console.log(`prueba de texto 3344ll`)

