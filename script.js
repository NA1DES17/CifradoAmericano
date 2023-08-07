// const cifradoAmericano = ["C", "D", "E", "F", "G", "A", "B"];
// const notas = ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];

// let spanIzq = document.getElementById("span-izq");
// let spanDer = document.getElementById("span-der");

// let btnSi = document.getElementById("si");
// let btnNo = document.getElementById("no");

// let rachaAciertos = 0;
// let racha = document.getElementById("racha");
// racha.textContent = rachaAciertos;

// let numeroAleatorio = Math.floor(Math.random() * 7);
// let numeroAleatorio2 = Math.floor(Math.random() * 7);
// spanIzq.textContent = cifradoAmericano[numeroAleatorio];
// spanDer.textContent = notas[numeroAleatorio2];

// function cambiarValores() {
//   numeroAleatorio = Math.floor(Math.random() * 7);
//   numeroAleatorio2 = Math.floor(Math.random() * 7);

//   spanIzq.textContent = cifradoAmericano[numeroAleatorio];
//   spanDer.textContent = notas[numeroAleatorio2];

//   return [numeroAleatorio, numeroAleatorio2];
// }

// btnSi.addEventListener("click", function () {
//   let [numeroAleatorio, numeroAleatorio2] = cambiarValores();
//   if (numeroAleatorio === numeroAleatorio2) {
//     rachaAciertos++;
//     racha.textContent = rachaAciertos;
//     container.style.backgroundColor = "#23c483";
//   } else {
//     rachaAciertos = 0;
//     racha.textContent = rachaAciertos;
//     container.style.backgroundColor = "#c42e23";
//   }
// });

// btnNo.addEventListener("click", function () {
//   let [numeroAleatorio, numeroAleatorio2] = cambiarValores();
//   if (numeroAleatorio !== numeroAleatorio2) {
//     rachaAciertos++;
//     racha.textContent = rachaAciertos;
//     container.style.backgroundColor = "#23c483";
//   } else {
//     rachaAciertos = 0;
//     racha.textContent = rachaAciertos;
//     container.style.backgroundColor = "#c42e23";
//   }
// });
//----------------
const cifradoAmericano = ["C", "D", "E", "F", "G", "A", "B"];
const notas = ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];

let spanIzq = document.getElementById("span-izq");
let spanDer = document.getElementById("span-der");

let btnSi = document.getElementById("si");
let btnNo = document.getElementById("no");

let rachaAciertos = 0;
let racha = document.getElementById("racha");
racha.textContent = rachaAciertos;

let numeroAleatorio = Math.floor(Math.random() * 7);
let numeroAleatorio2 = Math.floor(Math.random() * 7);
spanIzq.textContent = cifradoAmericano[numeroAleatorio];
spanDer.textContent = notas[numeroAleatorio2];

function cambiarValores() {
  numeroAleatorio = Math.floor(Math.random() * 7);
  numeroAleatorio2 = Math.floor(Math.random() * 7);

  spanIzq.textContent = cifradoAmericano[numeroAleatorio];
  spanDer.textContent = notas[numeroAleatorio2];

  return [numeroAleatorio, numeroAleatorio2];
}

btnSi.addEventListener("click", function () {
  let [numeroAleatorio, numeroAleatorio2] = cambiarValores();
  if (numeroAleatorio === numeroAleatorio2) {
    rachaAciertos++;
    racha.textContent = rachaAciertos;
    container.style.backgroundColor = "#23c483";
  } else {
    rachaAciertos = 0;
    racha.textContent = rachaAciertos;
    container.style.backgroundColor = "#c42e23";
  }
});

btnNo.addEventListener("click", function () {
  let [numeroAleatorio, numeroAleatorio2] = cambiarValores();
  if (numeroAleatorio !== numeroAleatorio2) {
    rachaAciertos++;
    racha.textContent = rachaAciertos;
    container.style.backgroundColor = "#23c483";
  } else {
    rachaAciertos = 0;
    racha.textContent = rachaAciertos;
    container.style.backgroundColor = "#c42e23";
  }
});
