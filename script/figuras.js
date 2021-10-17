// Codigo de cuadrado
console.group("Cuadrados")

// Perimetro del Cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
} 

// Area del cuadrado
function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo

console.group("Triangulo")


// Perimetro del triangulo
function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}

// Area del triangulo
function areaTriangulo(base,altura) {
    return (base*altura)/2;
}

console.groupEnd();

// Codigo del Circulo
console.group("Circulo");

// Radio
function radioCirculo(radio) {
    return radio;
}

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI );

// Circunferencia 
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI
}

console.groupEnd();

// Interaccion HTML

function calculaPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calculaAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calculaPerimetroTriangulo() {
    const inputLadoA = document.getElementById("InputTrianguloLadoA");
    const inputLadoB = document.getElementById("InputTrianguloLadoB");
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueLadoA = parseInt(inputLadoA.value) ;
    const valueLadoB = parseInt(inputLadoB.value);
    const valueBase = parseInt(inputBase.value);
    const valueAltura = parseInt(inputAltura.value);
    const perimetro = perimetroTriangulo(valueLadoA,valueLadoB,valueBase);
    alert(perimetro);
}

function calculaAreaTriangulo() {
    const inputLadoA = document.getElementById("InputTrianguloLadoA");
    const inputLadoB = document.getElementById("InputTrianguloLadoB");
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueLadoA = parseInt(inputLadoA.value) ;
    const valueLadoB = parseInt(inputLadoB.value);
    const valueBase = parseInt(inputBase.value);
    const valueAltura = parseFloat(inputAltura.value);
    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);
}

function calculaPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calculaAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}
function calculaDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
}
