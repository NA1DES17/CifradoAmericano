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
    setTimeout(function () {
      der.style.border = "4px solid #23c483";
      izq.style.border = "4px solid #23c483";
      der.style.backgroundColor = "#23c483";
      izq.style.backgroundColor = "#23c483";
      setTimeout(function () {
        der.style.border = "none";
        izq.style.border = "none";
        der.style.backgroundColor = "#deaa46";
        izq.style.backgroundColor = "#deaa46";
      }, 500);
    }, 250);
    aleatorios();
  } else {
    console.log("La racha terminó");
    racha = 0;
    spanRacha.textContent = racha;
    setTimeout(function () {
      der.style.border = "4px solid #c42e23";
      izq.style.border = "4px solid #c42e23";
      der.style.backgroundColor = "#c42e23";
      izq.style.backgroundColor = "#c42e23";
      setTimeout(function () {
        der.style.border = "none";
        izq.style.border = "none";
        der.style.backgroundColor = "#deaa46";
        izq.style.backgroundColor = "#deaa46";
      }, 250);
    }, 125);
    aleatorios();
  }
});
btnSi.addEventListener("click", function () {
  if (numeroAleatorio === numeroAleatorio2) {
    racha++;
    spanRacha.textContent = racha;
    setTimeout(function () {
      der.style.border = "4px solid #23c483";
      izq.style.border = "4px solid #23c483";
      der.style.backgroundColor = "#23c483";
      izq.style.backgroundColor = "#23c483";
      setTimeout(function () {
        der.style.border = "none";
        izq.style.border = "none";
        der.style.backgroundColor = "#deaa46";
        izq.style.backgroundColor = "#deaa46";
      }, 250);
    }, 125);
    aleatorios();
  } else {
    console.log("La racha terminó");
    racha = 0;
    spanRacha.textContent = racha;
    setTimeout(function () {
      der.style.border = "4px solid #c42e23";
      izq.style.border = "4px solid #c42e23";
      der.style.backgroundColor = "#c42e23";
      izq.style.backgroundColor = "#c42e23";
      setTimeout(function () {
        der.style.border = "none";
        izq.style.border = "none";
        der.style.backgroundColor = "#deaa46";
        izq.style.backgroundColor = "#deaa46";
      }, 250);
    }, 125);
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
