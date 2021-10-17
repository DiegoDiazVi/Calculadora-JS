var Nombre = "Diego";
var Apellido = "Diaz";
var user = "diegoestebandiaz";
var email = "user@example.com";
var edad = 21;
var mayorEdad = true;
var ahorros = 100;
var deudas = 20;

function nombreCompleto(name, lastname) {
    console.log(name +" "+ lastname);
}

function calculaDinero(dinero, deuda) {
    var money = dinero - deuda;
    return money;
}

nombreCompleto(Nombre,Apellido);
calculaDinero (ahorros,deudas);

var name = "Juan David";
var lastname = "Castro Gallego";
var completeName = name + " " + lastname;
var nickname = "juandc";

function nombreCompleto(nombre, apodo) {
    return "Mi nombre es " + nombre + ", pero prefiero que me digas " + apodo+ "."
}

nombreCompleto(completeName,nickname);


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("Opciones no validas");
}

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

var tipoDeSuscripcion = ["Free","Basic","Expert","ExpertPlus"];

for (let i = 0; i < tipoDeSuscripcion.length; i++) {
    
    if (tipoDeSuscripcion[1]==="Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
}
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
var i = 0;
while (i<5) {
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

var i = 10;
while (i>=2) {
    console.log("El valor de i es: " + i);
    i--;
}

var resultado = parseInt(prompt("Cuanto es 2+2?")); 

do {
    var resultado = parseInt(prompt("Cuanto es 2+2?")); 
} while (resultado != 4);

if (resultado === 4) {
    console.log("Felicitaciones")
}

var numeros = [1,2,3,4,5,6,7,8,9,0];
function imprimeNumeros(nums) {
    for (let i = 0; i < nums.length; i++) {
        console.log("El primer numero es: ", nums[0]);
    }
}

imprimeNumeros(numeros);

var carros = ["Audi","BMW","Mercedes"];

function muestraCarros(cars) {
    cars.forEach(function (elements){
        console.log(elements)
    })
}

muestraCarros(carros);

var curso = {
    modalidad: "presencial",
    nombre: "Programacion web",
    duracion: "6 meses",
    profesor: "Ricardo"
}

function muestraCursos(curso) {
    Object.values(curso).forEach(element => {
        console.log(element)
    });
}

