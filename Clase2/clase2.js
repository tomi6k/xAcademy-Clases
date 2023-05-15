// // function cocinar(){
// //     console.log("Estoy preparando un plato");
// // }

// // cocinar();

// function saludar(nombre, apellido, direccion){
//     console.log("Hola "+nombre+" "+apellido+" "+ direccion);
// }

// saludar("Tomás", "Canavidez");
// saludar("Sofia", "Callave");

// //  Functionn Expresion -- Funciones Anonimas

// const cocinar = function(){
// //     console.log("Estoy preparando un plato");
// // }

// // Directiva Return
// let resultado = {};
// function sumar(a, b, resultado){
//     resultado.suma = a + b;
//     // return a+b;
//     // no se ejecuta este codigo, codigo muerto
//     // si no se hace el return, da undefined
// }

// sumar(2,4, resultado);
// console.log(resultado);

// console.log(sumar(2,10)); // --> tambien es valido pero no es una buena practica en la programacion. ^-^

// const cuadrado = function(numero){
//     return numero * numero;
// }

// ---> Error Handling <------
// ----> Manejo de Errores <-----

// Bloque Try Catch

// try{
//     // ejecutar
//     // si hay un error
//     // esto sigue
// }catch(error){
//     console.log(error);
// }

// try{
//     function sumar(a, b) {
//         let resultado = a + c;
//         return resultado;
//     }
    
//     let result= sumar(2,2);
//     console.log(result);
// }catch(error){
//     console.log("Hubo un error: "+error);
// }

// console.log("sigue la ejecucion del programa");
// function sumar(a, b) {
//     let resultado = a + c;
//     return resultado;
// }

// let result= sumar(2,2);
// console.log(result);


// // // // function dividir(a,b){
// // // //     if(b === 0){
// // // //         throw "No se puede dividir un numero por 0.";
// // // //     }
// // // //     return a/b;
// // // // }

// // // // try {
// // // //     const res = dividir(2,0);
// // // //     console.log(res);
// // // // } catch (error) {
// // // //     console.log(error);
// // // // } finally{
// // // //     console.log("Finalmente...");
// // // // }


const lapicera = {
    marca: "Faber",
    color: "negro",
    precio: 100,
    tieneTapa: true   // 1:01:35
}