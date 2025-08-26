//1.Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada. 

//import readline from 'readline';

//const rl = readline.createInterface({
//  input: process.stdin,
//output: process.stdout

//})

//rl.question('Ingrese un numero: ', (num)=>{

    //let numero=Number(num);

    //console.log(`\nNumero ingresado : ${numero}`);

    //console.log(`Math.pow(${numero})-> ${Math.pow(numero,2)}`)

      //console.log(`Math.sqrt(${numero})-> ${Math.sqrt(numero)}`)

    //rl.close();

//})

//2.Un programa de sorteos necesita generar un número aleatorio entre 0 y 29 para asignar un premio.

//import readline from 'readline';

//const rl = readline.createInterface({
// input: process.stdin,
//output: process.stdout

//})

// let randomNum =Math.floor(Math.random()*30);

//console.log(`Numero aletorio entre 0 y 29 -> ${randomNum}`)

//rl.close();



//3.Una tienda de electrodomésticos necesita encontrar el precio más barato y el más caro de su lista de precios: [30, 52, 35, 1, 12, -3].

//import readline from 'readline';

//const rl = readline.createInterface({
//input: process.stdin,
//output: process.stdout

//})

//let precios=[30, 52, 35, 1, 12, -3]

//console.log(`Math.max([${precios}])-> ${Math.max(...precios)}`)
//console.log(`Math.min([${precios}])-> ${Math.min(...precios)}`)

//rl.close();

//4.Un edificio tiene 10 habitaciones por piso. El usuario ingreso el número de habitaciones en el que se encuentra (ejemplo: habitación 25). El programa debe calcular y mostrar en qué piso está. Deberá pedir el número de la habitación, dividir el número de habitaciones entre 10 y redondear hacia arriba y mostrar el piso correspondiente.

import readline from 'readline';

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout

})

rl.question('Ingrese el numero de habitacion(ejemplo habitacion 25): ', (hab)=>{

    
let numeroHab= parseInt(hab);
let numeroPis= Math.ceil(numeroHab/10);

console.log(`Habitacion ingresada: ${numeroHab}`);
console.log(`${numeroHab}÷10= ${numeroHab/10}`);
console.log(`Math.ceil(${numeroHab/10})-> ${numeroPis}`);
console.log(`La habitacion ${numeroHab} esta en el piso ${numeroPis}`);

rl.close();


})