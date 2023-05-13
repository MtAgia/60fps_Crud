function validarCantCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    return false;
  }
}

function validarURLImagenes(texto) {
  const patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|gif)$/;
  if (patron.test(texto)) {
    return true;
  } else {
    return false;
  }
}

function validacionCategoria(categoria){
    if(categoria.length > 0 && categoria === 'Accion' || categoria === 'Aventura' || categoria === 'Comedia' || categoria === 'Terror' || categoria === 'Drama'){
        return true;
    }else{
        return false;
    }
}

function validarPrecio(precio) {
  if (precio > 1 && precio < 9999) {
    return true;
  } else {
    return false;
  }
}

export function totalValidaciones(inputTexto, inputDescripcion, inputImagen, inputCategoria, inputPrecio, inputReqSistemas, inputDesarrolador){
    let resumen = "";
    if(!validarCantCaracteres(inputTexto, 2, 100)){
        resumen = "*Porfavor el nombre debe tener caracteres en el rango minimo de 2 y maximo 100"
    }
    if (!validarCantCaracteres(inputDescripcion, 2, 600)) {
        resumen +="*La Descripción tiene que tener entre 2 y 600 caracteres. <br>";
    }
    if(!validarURLImagenes(inputImagen)){
        resumen +="*Tiene que ingresar una imagen con formato valido, con terminacion (.jpg, .png, .gif) <br>";
    }
    if (!validacionCategoria(inputCategoria)) {
      resumen += "*Porfavor ingrese categorias acceptadas <br>";
    }
    if(!validarPrecio(inputPrecio)){
        resumen +="*Porfavor el precio tiene que ser mayor a 1 y menor a 9999 <br>";
    }
    if (!validarCantCaracteres(inputReqSistemas, 30, 400)) {
        resumen +="*Porfavor los requisitos del sistema tienen que tener mas de 30 caracteres y menos de 400 <br>";
    }
    if (!validarCantCaracteres(inputDesarrolador, 2, 100)) {
        resumen +="*Porfavor los desarroladores tienen que tener mas de 2 caracteres y menos de 100 <br>";
    }
    return resumen
}