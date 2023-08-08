//----------------
const cifradoAmericano = ["C", "D", "E", "F", "G", "A", "B"];
const notas = ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];

let spanIzq = document.getElementById("span-izq");
let spanDer = document.getElementById("span-der");

let btnSi = document.getElementById("si");
let btnNo = document.getElementById("no");

let numeroAleatorio;
let numeroAleatorio2;

aleatorios();
function aleatorios() {
  numeroAleatorio = Math.floor(Math.random() * 7);
  numeroAleatorio2 = Math.floor(Math.random() * 7);
  spanIzq.textContent = cifradoAmericano[numeroAleatorio];
  spanDer.textContent = notas[numeroAleatorio2];
}
let spanRacha = document.getElementById("racha");
let racha = 0;
spanRacha.textContent = racha;

btnNo.addEventListener("click", function () {
  if (numeroAleatorio !== numeroAleatorio2) {
    racha++;
    spanRacha.textContent = racha;
    console.log(numeroAleatorio + " - " + numeroAleatorio2);
    console.log(racha);
    aleatorios();
  } else {
    console.log("La racha terminó");
    racha = 0;
    spanRacha.textContent = racha;
    aleatorios();
  }
});
btnSi.addEventListener("click", function () {
  if (numeroAleatorio === numeroAleatorio2) {
    racha++;
    spanRacha.textContent = racha;
    console.log(numeroAleatorio + " - " + numeroAleatorio2);
    console.log(racha);
    aleatorios();
  } else {
    console.log("La racha terminó");
    racha = 0;
    spanRacha.textContent = racha;
    aleatorios();
  }
});

//------------------
// let spanTest = document.getElementById("span-test");
// let btnTest = document.getElementById("btn-test");

// let n1 = Math.floor(Math.random() * 7);
// let n2 = Math.floor(Math.random() * 7);
// spanTest.textContent = n1;
// //spanDer.textContent = notas[n2];

// btnTest.addEventListener("click", function () {
//   n1 = Math.floor(Math.random() * 7);
//   spanTest.textContent = n1;
// });
