const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  const imc = (peso / altura ** 2).toFixed(2);

  const value = document.getElementById("value");
  let description = " ";

  document.getElementById("infos").classList.remove("hidden");

  if (imc < 18.5) {
    description = "Você Esta abaixo do peso !!";
    value.classList.add("moderada");
    value.classList.remove("normal");
    value.classList.remove("attention");
  } else if (imc >= 18.5 && imc <= 25) {
    description = "Você está no peso ideal!!";
    value.classList.add("normal");
    value.classList.remove("attention");
    value.classList.remove("moderada");
  } else if (imc > 25 && imc <= 30) {
    description = "Você está com sobrepeso!";
    value.classList.add("moderada");
    value.classList.remove("normal");
    value.classList.remove("attention");
  } else if (imc > 30 && imc <= 35) {
    description = "Você está  com obesidade moderada!! ";
    value.classList.add("attention");
    value.classList.remove("normal");
    value.classList.remove("moderada");
  } else if (imc > 35 && imc <= 40) {
    description = " CUIDADO! Você está com obesidade severa!! ";
    value.classList.add("attention");
    value.classList.remove("normal");
    value.classList.remove("moderada");
  } else {
    description = " CUIDADO! Você está com obesidade morbida!! ";
    value.classList.add("attention");
    value.classList.remove("normal");
    value.classList.remove("moderada");
  }

  value.textContent = imc.replace(".", ",");
  document.getElementById("description").textContent = description;
});
