const password = document.querySelector("#")
const mail =document.querySelector("#")


const admin = {
  email:"facundocajal199@gmail.com",
  password:"Mortadela05@",
};


function validarContrasenia() {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\:;"'<>,.?/~`])(?=.{8,16})/;
if (regEx.test(password.value)) {
  password.className ="form-control is-valid"
  return true ;
} else {
  password.className="form-control is-invalid"
  return false;
} 
}

function validarEmail() {
  const regEx =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regEx.test(email.value)) {
    email.className = "form-control is-valid";
    return true;
  } else {
    email.className = "form-control is-invalid";
    return false;
  }
} 