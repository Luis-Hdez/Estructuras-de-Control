// EJERCUCIO 1:
// MODO CONSOLA -->

let edad = 18;
let esMayorDeEdad =
  edad >= 18 ? "La persona es mayor de edad" : "La persoa es menor de edad";
console.log(esMayorDeEdad);

// Ejercicio 2
// Variables de cada estudiante
let nombre = "Luis";
let carnet = "0505-90";
let examen = 10;
let tareas = 34;
let asistencia = 10;
let investigacion = 7;

// porecentaje de cada nota
const exaPorcent = 0.2; // 20%
const tarPorcent = 0.4; // 40%
const asisProcent = 0.1; // 10%
const invesPorcent = 0.3; // 30%

// Calculo de la nota final
let notaFinal =
  examen * exaPorcent +
  tareas * tarPorcent +
  asistencia * asisProcent +
  investigacion * invesPorcent;
// Redondear la nota final a dos decimales7
notaFinal = Math.round(notaFinal * 100) / 100; // Math.round redondea al entero mas cercano multiplicamos por 100 y dividimos por 100
// Nota final con dos decimales
//notaFinal = notaFinal.toFixed(2); // toFixed convierte a string con dos decimales
// Resultado final
console.log(`La nota final de ${nombre} con carnet ${carnet} es: ${notaFinal}`);
//console.log(notaFinal);

// EJERCICIO 3
// TABLA DE CATEGORIAS DE AUMENTO
// CATEGORIA | AUMENTO
//  A       |  15%
//  B       |  30%
//  C       |  10%
//  D       |  20%
// Categoriass
const categoriaAumento = {
  A: 0.15, // 15%
  B: 0.3, // 30%
  C: 0.1, // 10%
  D: 0.2, // 20%
};

// variables de empleado
let nombreEmpleado = "Ana";
let salario = 1000;
let categoriaEmpleado = "C"; // A, B, C o D se cambia la letra para cambiar categoria

// Calculo del aumento
let aumento = salario * categoriaAumento[categoriaEmpleado];
let nuevoSalario = salario + aumento;
// Redondear el nuevo salario a dos decimales
nuevoSalario = Math.round(nuevoSalario * 100) / 100; //
// Mostrar el resultado
console.log(
  `El nuevo salario de ${nombreEmpleado} es: ${nuevoSalario} (Aumento: ${aumento})`
);

//
//
// EJERCICIO 4
let num1 = 34;
let num2 = 5;

// calulamos cual es maoyor de los dos numeros
// Usamos el operador ternario para determinar el mayor
let mayor = num1 > num2 ? num1 : num2;
// mostramos el resultado
console.log(`El número mayor entre ${num1} y ${num2} es: ${mayor}`);

//
//
// EJERCICIO 5
const fordFiesta = 0.05; // 5% de descuento
const fordFocus = 0.1; // 10% de descuento
const fordEscape = 0.2; // 20% de descuento

function calcularDescuento() {
  const autoSeleccionado = document.getElementById("car").value; // traemos el valor del carro es decir una string para usarla en el switch
  const precioAuto = parseFloat(document.getElementById("price").value); // treamos el precio y lo parseamos

  let descuento = 0; // inicializamos la variable descuento
  let car = ""; // tambien la variale para guardar el modelo

  switch (autoSeleccionado) {
    case "fordFiesta":
      descuento = precioAuto * fordFiesta;
      car = "Ford Fiesta";
      break;
    case "fordFocus":
      descuento = precioAuto * fordFocus;
      car = "Ford Focus";
      break;
    case "fordEscape":
      descuento = precioAuto * fordEscape;
      car = "Ford Escape";
      break;
    default:
      console.error("Auto no válido");
      return;
  }

  //
  const resultadoDescuento = document.querySelector("#resultado span");
  resultadoDescuento.textContent = `El descuento para ${car} es: $${descuento.toFixed(
    2
  )}`;
  //console.log(resultadoDescuento);
}

//
//
// EJERCICIO 6
function calcularDescuentoViaje() {
  let origen = "Palma";
  let destinos = [
    { id: 1, name: "La Costa del Sol", price: 150, discount: 0.05 },
    { id: 2, name: "Panchimalco", price: 75, discount: 0.1 },
    { id: 3, name: "Puerto El Triunfo", price: 200, discount: 0.15 },
  ];

  let destinoSeleccionado = 1; // elegimos un destino

  let destino = destinos.find((d) => d.id === destinoSeleccionado);

  if (!destino) {
    console.error("Destino no válido"); //solo si se selecciona un destino no contemplado
    return;
  }

  let descuentoTuristico = destino.price * destino.discount;
  let precioFinal = destino.price - descuentoTuristico;

  console.log(`Origen: ${origen}`);
  console.log(`Destino seleccionado: ${destino.name}`);
  console.log(`Precio original: $${destino.price}`);
  console.log(
    `Descuento aplicado: $${descuentoTuristico.toFixed(2)} (${
      destino.discount * 100
    }%)`
  );
  console.log(`Precio final: $${precioFinal.toFixed(2)}`);

  return descuentoTuristico;
}

calcularDescuentoViaje();

//
//
// EJERCICIO 7
const numerosEnteros = [];
const btnNumEnteros = document.getElementById("btnNumEnteros");
let contador = 0;

btnNumEnteros.addEventListener("click", () => {
  if (contador < 10) {
    const numero = document.getElementById("number").value;
    if (numero !== "") {// Verificarmos que no este vacío
      numerosEnteros.push(numero);
      contador++;
      document.getElementById("number").value = "";
      console.log(
        `Número ${contador}/10 agregado. Array actual:`,
        numerosEnteros
      );

      // en la parte de resultados vamos a actualizar  el dom
      document.querySelector(
        "#resultados span"
      ).textContent = `Has ingresado ${contador} de 10 números.`;

      if (contador === 10) {
        btnNumEnteros.textContent = "Ver Resultados";
      }
    }
    
  } else {
    

    // Calcular las estadiisticas de los numeros ingresados
    const negativos = numerosEnteros.filter((n) => n < 0).length;
    const positivos = numerosEnteros.filter((n) => n > 0).length;
    const multiplos15 = numerosEnteros.filter((n) => n % 15 === 0).length;
    const sumaPares = numerosEnteros.filter((n) => n % 2 === 0).reduce((a, b) => a + b, 0);

    console.log("Array final:", numerosEnteros);

    // mostramos en en HTML
    document.querySelector("#resultados span").innerHTML = `
            <strong>Resultados:</strong><br>
            • Valores negativos: ${negativos}<br>
            • Valores positivos: ${positivos}<br>
            • Múltiplos de 15: ${multiplos15}<br>
            • Suma de números pares: ${sumaPares}<br>
            <br>Array completo: [${numerosEnteros.join(", ")}]
        `;

    btnNumEnteros.disabled = true;
  }
});


//
//
// EJERCICIO 8
const btnTablaMultiplicar = document.getElementById("btnTablaMultiplicar");
const num = document.getElementById("num");
const resultadoTabla = document.querySelector("#resultadoTabla span")

btnTablaMultiplicar.addEventListener("click", () => {
  const numero = parseInt(num.value, 10);

  if (isNaN(numero)) {
   resultadoTabla.innerHTML = `Ingresa un numero`;
    return;
  }

  let tablaHTML = `<h5 class="text-primary">Tabla del ${numero}</h5><ul class="list-group">`;

  for (let i = 1; i <= 10; i++) {
    tablaHTML += `<li class="list-group-item">${numero} x ${i} = ${numero * i}</li>`;
  }

  tablaHTML += '</ul>';

  resultadoTabla.innerHTML = tablaHTML;
});

//
//
// EJERCICIO 9


//
//
// EJERCICIO 10
