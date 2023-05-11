
export default class VideoJuego {
  #id;
  #nombre;
  #precio;
  #descripcion;
  #categoria;
  #imagen;
  #requisitosDeSistema;
  #desarrollador;
  #resenas;
  constructor(
    nombre,
    precio,
    descripcion,
    categoria,
    imagen,
    requisitosDeSistema,
    desarrollador,
    resenas
  ) {
    this.#id = uuidv4();
    this.#nombre = nombre;
    this.#precio = precio;
    this.#descripcion = descripcion;
    this.#categoria = categoria;
    this.#imagen = imagen;
    this.#requisitosDeSistema = requisitosDeSistema;
    this.#desarrollador = desarrollador;
    this.#resenas = resenas;
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

  get resenas() {
    return this.#resenas;
  }

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

  set resenas(resenas) {
    this.#resenas = resenas;
  }
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
      resenas: this.resenas,
    };
  }
}
