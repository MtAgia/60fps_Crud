const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("formulario");


form.addEventListener("submit", (e)=>{
  e.preventDefault();
  validarContrasenia();
  validarEmail();
})


function validarContrasenia() {
  const regExMail = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\:;"'<>,.?/~`])(?=.{8,16})/;
  if (regExMail.test(password.value)) {
    password.className = "form-control is-valid";
    return true;
  } else {
    password.className = "form-control is-invalid";
    
    return false;
  }
}

function validarEmail() {
  const regExPass = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regExPass.test(email.value)) {
    email.className = "form-control is-valid";
    return true;
  } else {
    email.className = "form-control is-invalid";
    return false;
  }
}




