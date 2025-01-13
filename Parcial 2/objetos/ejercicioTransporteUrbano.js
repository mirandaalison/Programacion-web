class Conductor {
    #nombre;
    #licencia;
  
    constructor(nombre, licencia) {
      this.#nombre = nombre;
      this.#licencia = licencia;
      this.listaRutas = [];
    }
  
    agregarRuta(nuevaRuta) {
      if (nuevaRuta instanceof Ruta) {
        this.listaRutas.push(nuevaRuta);
        console.log(`Se guardó la ruta: ${nuevaRuta.obtenerInfo().nombreRuta}`);
      } else {
        console.log('No se puede guardar porque no es una Ruta válida');
      }
    }
  
    mostrarInfo() {
      return {
        nombre: this.#nombre,
        licencia: this.#licencia,
      };
    }
  }
  
  class Vehiculo {
    #modelo;
    #matricula;
  
    constructor(modelo, matricula) {
      this.#modelo = modelo;
      this.#matricula = matricula;
      this.estaOcupado = false;
    }
  
    usar() {
      this.estaOcupado = true;
      console.log(`El vehículo ${this.#modelo} (${this.#matricula}) ahora está en uso.`);
    }
  
    liberar() {
      this.estaOcupado = false;
      console.log(`El vehículo ${this.#modelo} (${this.#matricula}) está libre otra vez.`);
    }
  
    obtenerInfo() {
      return {
        modelo: this.#modelo,
        matricula: this.#matricula,
        estaOcupado: this.estaOcupado,
      };
    }
  }
  
  class Ruta {
    #nombreRuta;
    #longitud;
  
    constructor(nombreRuta, longitud) {
      this.#nombreRuta = nombreRuta;
      this.#longitud = longitud;
    }
  
    obtenerInfo() {
      return {
        nombreRuta: this.#nombreRuta,
        longitud: this.#longitud,
      };
    }
  }
  
  class ConductorVIP extends Conductor {
    constructor(nombre, licencia) {
      super(nombre, licencia);
      this.autoFavorito = null;
    }
  
    asignarAutoFavorito(vehiculo) {
      if (!vehiculo.estaOcupado) {
        this.autoFavorito = vehiculo;
        vehiculo.usar();
        console.log('Tu auto favorito ha sido asignado.');
      } else {
        console.log('Ese auto ya lo está usando alguien más.');
      }
    }
  }
  

  
  const conductor1 = new Conductor('Luis', 'LIC001');
  const ruta1 = new Ruta('Camino Sur', 20);
  conductor1.agregarRuta(ruta1);
  console.log(conductor1.mostrarInfo());
  
  const vehiculo1 = new Vehiculo('Nissan Sentra', 'ABC123');
  const vehiculo2 = new Vehiculo('Honda Civic', 'XYZ789');
  
  const conductorVIP = new ConductorVIP('Ana', 'VIP123');
  const ruta2 = new Ruta('Ruta Premium', 50);
  conductorVIP.agregarRuta(ruta2);
  conductorVIP.asignarAutoFavorito(vehiculo1);
  conductorVIP.asignarAutoFavorito(vehiculo2);
  
  
  