let numero = parseInt(prompt("Digite un numero"))

// if (numero % 2 == 0){
//     document.write("<h1>"+numero +" es un numero par</h1>")
// }else{
//     document.write("<h3>"+numero +" es un numero Impar</h3>")
// }

// if(numero>0){
//     document.write("El numero es positivo")
// }else if (numero<0){
//     document.write("El numero es negativo")
// }else{
//     document.write("El numero es 0")
// }

// if (numero>0){
//     document.write("<p class='parraf'>El numero es positivo</p>")
//     if (numero % 2 == 0){
//         document.write("<p>El numero es par</p>")
//     }else{
//         document.write("<p>El numero es Impar</p>")
//     }
// }else if(numero<0){
//     document.write("<p>El numero es negativo</p>")
//     if (numero % 2 == 0){
//         document.write("<p>El numero es par</p>")
//     }else{
//         document.write("<p>El numero es Impar</p>")
//     }
// }


let num=0;

// for (let i = 0; i <= 10; i++) {
//     document.write("<h1>"+ numero * i +"</h1>");

//     es_par = i % 2 == 0 ? 
//               num = i*numero : 
//               num = i*numero ;
//     document.write(es_par);

      
// }

let miarray = [];
document.write("<p>Tamaño array inicial: " + miarray.length +"</p>");

miarray.push("asdf");
miarray.push(true);
miarray.push(5.2);

document.write("<p>"+ miarray[0] +"</p>");
document.write("<p>"+ miarray[1] +"</p>");
document.write("<p>"+ miarray[2] +"</p>");

document.write("<p>Tamaño array inicial: " + miarray.length + "</p>");

for (let index = 0; index < miarray.length; index++) {
    document.write("<p>"+miarray[index]+"</p>");
    
}





