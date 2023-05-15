
export default class VideoJuego {
  #id;
  #nombre;
  #precio;
  #descripcion;
  #categoria;
  #imagen;
  #requisitosDeSistema;
  #desarrollador;
  //#resena;
  constructor(
    nombre,
    precio,
    descripcion,
    categoria,
    imagen,
    requisitosDeSistema,
    desarrollador
    //resena
  ) {
    this.#id = uuidv4();
    this.#nombre = nombre;
    this.#precio = precio;
    this.#descripcion = descripcion;
    this.#categoria = categoria;
    this.#imagen = imagen;
    this.#requisitosDeSistema = requisitosDeSistema;
    this.#desarrollador = desarrollador;
    //this.#resena = resena;
  }

  // Getters
  get id() {
    return this.#id;
  }

  get nombre() {
    return this.#nombre;
  }

  get precio() {
    return this.#precio;
  }

  get descripcion() {
    return this.#descripcion;
  }

  get categoria() {
    return this.#categoria;
  }

  get imagen() {
    return this.#imagen;
  }

  get requisitosDeSistema() {
    return this.#requisitosDeSistema;
  }

  get desarrollador() {
    return this.#desarrollador;
  }
  /*
  get resena() {
    return this.#resena;
  }
*/
  // Setters
  set id(id) {
    this.#id = id;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  set precio(precio) {
    this.#precio = precio;
  }

  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }

  set imagen(imagen) {
    this.#imagen = imagen;
  }

  set requisitosDeSistema(requisitosDeSistema) {
    this.#requisitosDeSistema = requisitosDeSistema;
  }

  set desarrollador(desarrollador) {
    this.#desarrollador = desarrollador;
  }
  /*
  set resenas(resenas) {
    this.#resena = resena;
  }
*/
  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      genero: this.genero,
      precio: this.precio,
      descripcion: this.descripcion,
      categoria: this.categoria,
      imagen: this.imagen,
      requisitosDeSistema: this.requisitosDeSistema,
      desarrolador: this.desarrollador,
      //resena: this.resena,
    };
  }
}
