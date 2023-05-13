const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
  let valid = true;

  if (!validarEmail()) {
    valid = false;
  }

  if (!validarContrasenia()) {
    valid = false;
  }

  if (!valid) {
    event.preventDefault();
  }
});

function validarContrasenia() {
  const regExMail = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\:;"'<>,.?/~`])(?=.{8,16})/;
  if (regExMail.test(password.value)) {
    password.classList.remove("invalid");
    password.classList.add("valid");
    password.nextElementSibling.textContent = "";
    return true;
  } else {
    password.classList.remove("valid");
    password.classList.add("invalid");
    password.nextElementSibling.textContent =
      "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos especiales.";
    return false;
  }
}

function validarEmail() {
  const regExPass = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regExPass.test(email.value)) {
    email.classList.remove("invalid");
    email.classList.add("valid");
    email.nextElementSibling.textContent = "";
    return true;
  } else {
    email.classList.remove("valid");
    email.classList.add("invalid");
    email.nextElementSibling.textContent =
      "Por favor, ingrese una dirección de correo electrónico válida.";
    return false;
  }
}