import saludar from "./saludador";

const name = document.querySelector("#user-name");
const form = document.querySelector("#askName-form");
const div = document.querySelector("#grettingsName-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = name.value;

  div.innerHTML = "<p> Hola " + saludar(userName) + "</p>";
});

