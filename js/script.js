//MODULO 2

//Más utilizado
/*var nombre = document.querySelector("#nombre"); //acceso por id
nombre.innerHTML = "Magalí Díaz";

var curso = document.querySelector(".curso"); //acceso por clase
curso.innerHTML = "JavaScript - EducaciónIT";

var titulo1 = document.querySelector("h1"); //acceso por tag
console.log(titulo1.innerHTML);*/

//Acceso a elementos con métodos diferentes

/*var subtitulo = document.getElementById("subtitulo");
subtitulo.innerHTML = "Clase 2";

var titulo = document.getElementById("titulo");
console.log(titulo);

var tarjetas = document.getElementsByClassName("card");
console.log(tarjetas[0].innerHTML);

var palabra = document.getElementsByTagName("p");
console.log(palabra[0].innerHTML);*/

//operadores relacionales
/*
a < b
a > b
a <= b
a >= b
a == b
a === b
a != 
Operadores lógicos
AND : ambos operandos true
OR : por lo menos un operando true
NOT : !(a > b)
a = 10
b = 10
*/

/***********ESTRUCTURAS CONDICIONALES ************/

//IF 

/*var respuesta = confirm("¿Es usted mayor de edad?");
console.log(respuesta);

if (!respuesta){
    console.log("MENOR DE EDAD");
}*/

//var nombreAlumno = "Agostina";
//var mailAlumno = "agostina@gmail.com";
//var nombre = prompt("Ingresá tu nombre:");
//var mail = prompt("Ingresá tu mail");

/*if ((nombre == nombreAlumno) && (mail == mailAlumno)) {
    document.querySelector(".user").innerHTML = nombre;
    console.log("login correcto");
    //...
}*/

//OPERADOR TERNARIO
//condicion ? sentenciaTrue : sentenciaFalse;

//nombre == nombreAlumno ? document.querySelector(".user").innerHTML = nombre : console.log("login incorrecto");

/*var curso = "Javascript desde cero";
var cursoDelUsuario = prompt("Indicá el curso que estás realizando: ");

if (cursoDelUsuario == curso) {
    document.querySelector(".curso").innerHTML = curso;
} else {
    document.querySelector(".curso").innerHTML = "No es un curso válido";
}*/

//IF-ELSE
/*
if (condicion){
    sentencias;
} 
else {
    sentencias;
}
*/

//var edad = prompt("Edad: ");
//var nacionalidad = prompt("Nacionalidad: ");

/*if ((edad >= 16) && (nacionalidad == "argentino")) {
    alert("Podés votar");
} else {
    alert("Todavía no podés votar");
}*/

//IF ELSE - IF ELSE
/*if (edad < 16) {
    alert("No podés votar, sos menor de edad");
} else if ((nacionalidad == "argentino") || (nacionalidad == "argentina")){
    alert("Podés votar");
} else {
    alert("Datos incorrectos");
}*/

var nombreAlumno = "Agostina";
var mailAlumno = "agostina@gmail.com";
var cursoAlumno = "Javascript";

/*var nombre = prompt("Ingresá tu nombre:");
var mail = prompt("Ingresá tu mail");
var curso = prompt("¿Qué curso estás realizando?");

var salidaNombre = document.querySelector(".user");
var salidaMail = document.querySelector(".mail");
var salidaCurso = document.querySelector(".curso");

if (nombre == nombreAlumno){
    salidaNombre.innerHTML = nombre;
} else {
    salidaNombre.innerHTML = "Invitado";
} 

if (mail == mailAlumno){
    salidaMail.innerHTML = mail;
} else {
    salidaMail.innerHTML = "Registrate!";
}

if (curso == cursoAlumno) {
    salidaCurso.innerHTML = curso;
} else {
    salidaCurso.innerHTML = "Inicia un curso!";
}*/

//PSEUDOCÓDIGO
/* Atender el teléfono

Aproximarnos al teléfono cuando suene

Levantar el tubo

Colocar el tubo en la oreja

Comenzar a hablar 

Finalizada la conversacion, colgar el tubo nuevamente

*/

/* Comprobar estado civil de una persona

Preguntar al usuario su estado civil 

Si es soltero

    Entonces
    Escribir "Disfrute su soltería"

Si es casado 

    Entonces
    Escribir "Felicitaciones"

Si es viudo 

    Entonces
    Escribir "Lo siento mucho"

Fin

*/

//SWITCH 

/*
switch (expresion){
    case 1:
        Sentencias;
        break;
    case 2:
        Sentencias;
        break;
    case N:
        Sentencias;
        break;
    default;
        Sentencias;
        break;
}
*/

var fechaCompleta = new Date();
//document.querySelector(".datetime").innerHTML = fechaCompleta;

var mes = fechaCompleta.getMonth();

/*switch (mes){
    case 0:
    case 1:
    case 2:
    case 3:
        console.log("Primer cuatrimestre");
        break;
    case 4:
    case 5:
    case 6:
    case 7:
        console.log("Segundo cuatrimestre");
        break;
    case 8:
    case 9:
    case 10:
    case 11:
        console.log("Tercer cuatrimestre");
        break;
}*/

//ENE   FEB  MAR  ABR   MAY  JUN  JUL   AGO  SEP   OCT   NOV   DIC
// 0     1    2    3     4    5    6     7    8     9     10    11

/*switch (mes){
    case 0: 
        mes = "Enero";
        break;
    case 1: 
        mes = "Febrero";
        break;
    case 2: 
        mes = "Marzo";
        break;
    case 3: 
        mes = "Abril";
        break;
    case 4: 
        mes = "Mayo";
        break;
    case 5: 
        mes = "Junio";
        break;
    case 6: 
        mes = "Julio";
        break;
    case 7: 
        mes = "Agosto";
        break;
    case 8: 
        mes = "Septiembre";
        break;
    case 9: 
        mes = "Octubre";
        break;
    case 10: 
        mes = "Noviembre";
        break;
    case 11: 
        mes = "Diciembre";
        break;
    default:
        mes = "N/A";
        break;
}

console.log(mes);

var dia = fechaCompleta.getDay();

switch(dia){
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Lunes";
        break;
    case 2: 
        dia = "Martes";
        break;
    case 3:
        dia = "Miércoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5: 
        dia = "Viernes";
        break;
    case 6:
        dia = "Sábado";
        break;
    default:
        dia = "N/A";
        break;
}
*/
document.querySelector(".datetime").innerHTML = dia + " " + fechaCompleta.getDate() + " de " + mes;

/**************************MODULO 3*******************************
 * arreglos
 */
//Creación de un arreglo


var productos = []; //arreglo vacío                                     DINAMICO
var notas = [10, 9, 7, 5, 10, 9, 7]; //más usada actualmente            ESTATICO
var empleado = new Array("Pedro", "Díaz", 30, true); //más usada antes  ESTATICO
//                          0        1     2   3

//alert(notas.length); //función para determinar la longitud del arreglo
productos.push("Arroz", "Harina", "Azúcar", "Aceite");//agregar variables al arreglo dinámico
empleado.push("OSDE");//agregar variables al arreglo estático

document.querySelector("#productos").innerHTML = productos;
document.querySelector("#empleado").innerHTML = empleado;

notas.pop(); //eliminar última variable del arreglo
document.querySelector("#notas").innerHTML = notas;

var nombreEmpleado = empleado.slice(0, 1);
//var nombreEmpleado = empleado[0];
//alert(nombreEmpleado);
//Métodos de arreglos: https://www.w3schools.com/js/js_array_methods.asp
/*
var cursos = ["Java", "Git", "Javascript", "HTML", "Python", "Bases de datos", "Testing"];
var curso = prompt("¿Qué curso estás realizando?");
var salidaCurso = document.querySelector(".curso");

if (curso == cursos[0]) {
    salidaCurso.innerHTML = curso;
} else if (curso == cursos[1]){
    salidaCurso.innerHTML = curso;
} else if (curso == cursos[2]){
    salidaCurso.innerHTML = curso;
} else if (curso == cursos[3]){
    salidaCurso.innerHTML = curso;
} else if (curso == cursos[4]){
    salidaCurso.innerHTML = curso;
} else if (curso == cursos[5]){
    salidaCurso.innerHTML = curso;
} else if (curso == cursos[6]){
    salidaCurso.innerHTML = curso;
} else {
    salidaCurso.innerHTML = "No es un curso válido";
}*/
