/// Un sistema de gestion de pedidos recibe códigos de seguimiento en el formato: PED-2025-00045, se necesita extraer el año del periodo y el número de orden usando el metodo substring().
//Requesitos:
//1.Extraer el año del periodo (2025) y el número de orden(00045)usando substring().


//import readline from 'readline';

//const rl = readline.createInterface({
//input: process.stdin,
//output: process.stdout
//})

//rl.question("Ingrese el código del pedido(ej:PED-2025-00045):",(código)=>
//{
// const año= código.substring(4,8);
// const numeroOrden= código.substring(9);

// console.log(`Año del pedido: ${año}`);
//console.log(`Número de orden: ${numeroOrden}`);

//rl.close();
//})

//Ejercicios:

//1. En un formulario web pides al usuario su nombre completo y quieres asegurarte de que no haya espacios al inicio o final, y además quieres mostrar cuántos caracteres tiene el nombre sin contar los espacios. 
 
// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout

// })

// rl.question("Ingrese su nombre completo:",(nombre)=>{
//     const nombreLimpio= nombre.trim();
//     const nombreSinEspacios= nombre.replaceAll(" ","");
//     const numCaract= nombreSinEspacios.length;

//      console.log(`Nombre limpio: ${nombreLimpio}`);
//      console.log(`Nombre sin espacios: ${nombreSinEspacios}`);
//      console.log(`Cantidad de caracteres sin espacios: ${numCaract}`);

// rl.close();
// })

//2. Un sistema de registro de usuarios necesita guardar todos los correos electrónicos en minúsculas para evitar duplicados causados por diferencias en mayúsculas y minúsculas. Además, se requiere verificar si el correo pertenece al dominio @gmail.com antes de aceptarlo. El programa debe: Solicitar al usuario su correo electrónico. Convertir el correo ingresado a minúsculas. Verificar si contiene el dominio @gmail.com. Mostrar en pantalla el correo normalizado y si es o no un dominio válido. 


// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout

// })
// rl.question("Ingrese su correo:",(correo)=>{
//     const correoNormalizado= correo.toLocaleLowerCase();
//     const dominioValido= correo.includes("@gmail.com");

//     console.log(`Correo normalizado: ${correoNormalizado}`);
//      console.log(`¿Es un dominio @gmail.com? : ${dominioValido}`);

//      rl.close();

// })

//3. de un código generado automáticamente solo se requiere mostrar los últimos 4 caracteres 

// import readline from 'readline';

// const rl = readline.createInterface({
//    input: process.stdin,
//  output: process.stdout

//  })

//  rl.question("Ingrese un código generado:",(codigo)=>{
//     const ultimosDigitos= codigo.slice(-4);
//     console.log(`ultimos digitos: ${ultimosDigitos}`);

//     rl.close();


// })

//4. Un programador quiere saber4. Un programador quiere saber en qué parte de su mensaje aparece la palabra error.  en qué parte de su mensaje aparece la palabra error. 

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
output: process.stdout

})

rl.question("Ingrese el mensaje:",(mensaje)=>{
    const error= mensaje.indexOf("error");
    console.log(`la palabra detectada es: ${error}`);

    rl.close();
})
