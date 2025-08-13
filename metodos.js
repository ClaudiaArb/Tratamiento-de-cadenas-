//importar modulo
import readline from 'readline';

//crear la interfaz de lectura
const rl = readline.createInterface({
   input : process.stdin,
   output: process.stdout,
    })

    //Realizamos la preguntar
    rl.question("ingrese una frase", (frase)=>{
        console.log( `\n === Tratamiento de cadenas === `);

        //1.leghth
        const fraseLength = frase.length;
        console.log( `La longitud de la frase es:${fraseLength} `)
    
        //2. touppercase
        const fraseMayus = frase.toUpperCase ();
        console.log( `La frase en mayusculas es:${fraseMayus} `);
         
        //3.toLowerCase
        const fraseMinus = frase.toLowerCase();
        console.log( `La frase en minusculas es:${fraseMinus} `)

        //4.trim
        const fraseTrim = frase.trim();
        console.log( `La frase sin espacios al inicio y al final es :${fraseTrim} `);

        //5.substring (subcadena)
        const subCadena = frase.substring (2,6); 
        console.log( `Los primeros 5 caracteres de la frase son:${subCadena} `)

        //6.slice 
        const subCadenaSlice = frase.substring(0,5);
        console.log(`Los ultimos 5 caracteres de la frase son:${subCadenaSlice} `);
          
        //7. replace
        const fraseReemplazada = frase.replace('hola','adios');
        console.log(`La frase con 'hola' reemplazado por 'adios' es:${fraseReemplazada}`);

        //8.replaceAll 
        const fraseReemplazadaAll = frase.replaceAll('hola','adios');
        console.log(`La frase con todas las ocurrencias de 'hola' reemplazadas por 'adios' es:${fraseReemplazadaAll} `);
      
        //9. split divide la frase en palabras separandolas por un espacio
        const fraseArray = frase.split();
         console.log(`La frase divida en palabras es:${fraseArray}`);
      
         //10. includes
         const incluyeHola = frase.includes('hola');
         console.log(`La frase inclyue la palabra 'hola':${incluyeHola}`);

         //11. indexOf
         const indiceHola = frase.indexOf('hola');
          console.log(`El indice de la primer ocurrencia de 'hola' es:${indiceHola}`);
         
          //12.startsWith
          const empiezaConHola = frase.startsWith('hola');
          console.log(`La frase empieza con 'hola' :${empiezaConHola}`);
        
           //12.endsWith
          const terminaConAdios = frase.endsWith('adios');
          console.log(`La frase termina con 'adios' :${terminaConAdios}`);
        rl.close();

    })