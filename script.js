const cifradoAmericano = ["C", "D", "E", "F", "G", "A", "B"];
const notas = ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];

let spanIzq = document.getElementById("span-izq");
let spanDer = document.getElementById("span-der");

let btnSi = document.getElementById("si");
let btnNo = document.getElementById("no");

let numeroAleatorio = Math.floor(Math.random() * 7);
let numeroAleatorio2 = Math.floor(Math.random() * 7);

spanIzq.textContent = cifradoAmericano[numeroAleatorio];
spanDer.textContent = notas[numeroAleatorio2];

function correcto() {
  container.style.backgroundImage = "none";
  container.style.backgroundColor = "#23c483";
  setTimeout(function () {
    window.location.reload();
  }, 500);
}

function incorrecto() {
  container.style.backgroundImage = "none";
  container.style.backgroundColor = "#c42e23";
  setTimeout(function () {
    window.location.reload();
  }, 500);
}

btnSi.addEventListener("click", function () {
  if (numeroAleatorio === numeroAleatorio2) {
    container.style.backgroundColor = "#23c483";
    setInterval(correcto, 500);
  } else {
    container.style.backgroundColor = "#c42e23";
    setInterval(incorrecto, 500);
  }
});

btnNo.addEventListener("click", function () {
  if (numeroAleatorio !== numeroAleatorio2) {
    container.style.backgroundColor = "#23c483";
    setInterval(correcto, 500);
  } else {
    container.style.backgroundColor = "#c42e23";
    setInterval(incorrecto, 500);
  }
});
