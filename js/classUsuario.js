export default class Usuario {
    #nombre;
    #mail;
    #password;
    #isAdmin;
    #listaDeseados = [];
  
    constructor(nombre, mail, password, isAdmin) {
      this.#nombre = nombre;
      this.#mail = mail;
      this.#password = password;
      this.#isAdmin = isAdmin;
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    set nombre(nombre) {
      this.#nombre = nombre;
    }
  
    get mail() {
      return this.#mail;
    }
  
    set mail(mail) {
      this.#mail = mail;
    }
  
    get password() {
      return this.#password;
    }
  
    set password(password) {
      this.#password = password;
    }
  
    get isAdmin() {
      return this.#isAdmin;
    }
  
    set isAdmin(isAdmin) {
      this.#isAdmin = isAdmin;
    }
  
    get listaDeseados() {
      return this.#listaDeseados;
    }
  
    set listaDeseados(listaDeseados) {
      this.#listaDeseados = listaDeseados;
    }
  
    static getUsuarios() {
      let usuarios = localStorage.getItem("usuarios");
      if(!usuarios || usuarios.length < 1){
        usuarios = [];
      }else {
        usuarios = JSON.parse(usuarios).map(
          (usuario) =>
            new Usuario(
              usuario.nombre,
              usuario.mail,
              usuario.password,
              usuario.isAdmin,
              usuario.listaDeseados
            )
        );
      }
      return usuarios;
    }
  
    static crearUsuario(usuario) {
      let usuarios = this.getUsuarios();
      if (usuarios && usuarios.length > 0) {
        if (usuarios.some((u) => u.mail === usuario.mail)) {
          console.log("No se pudo crear el usuario. El correo ya está en uso.");
          return false;
        }
      }
      this.guardarUsuario(usuario);
      console.log("Usuario creado exitosamente.");
      return true;
    }
  
    static guardarUsuario(usuario) {
      let usuarios = this.getUsuarios();
      if (!usuarios || usuarios.length === 0) {
        usuarios = [];
      }
      usuarios.push(usuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
  
    static login(mail, password) {
      let usuarios = this.getUsuarios();
  
      const usuarioEncontrado = usuarios.find((u) => u.mail === mail);
      console.log(usuarioEncontrado);
  
      if (usuarioEncontrado && usuarioEncontrado.password === password) {
        console.log(`Bienvenido, ${usuarioEncontrado.nombre}!`);
        sessionStorage.setItem("loggedUser", JSON.stringify(usuarioEncontrado));
        return true;
      } else {
        console.log("Email o contraseña incorrectos.");
        return false;
      }
    }

    static logout() {
      sessionStorage.removeItem("loggedUser");
      console.log("Sesión cerrada");
    }
  
    toJSON() {
      return {
        nombre: this.nombre,
        mail: this.mail,
        password: this.password,
        isAdmin: this.isAdmin,
        listaDeseados: this.listaDeseados,
      }
    }
}
  