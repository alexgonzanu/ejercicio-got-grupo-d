class Personajes {
  nombre;
  familia;
  edad;
  estado = "vivo";

  constructor(name, family, age, status) {
    this.nombre = name;
    this.familia = family;
    this.edad = age;
    this.estado = status;
  }

  comunicar() {
    return "";
  }

  morir(estadoPersonaje) {
    return estadoPersonaje === "vivo" ? "muerto" : "vivo";
  }
}

class Rey extends Personajes {
  añosReinado;

  constructor(years) {
    super();
    this.añosReinado = years;
  }

  comunicar() {
    return "Vais a morir todos"
  }
}

class Luchador extends Personajes {
  arma;
  destreza;

  constructor(weapon, skill) {
    super();
    this.arma = weapon;
    this.destreza = skill;
  }

  comunicar() {
    return "Primero pego y luego pregunto";
  }
}

class Asesor extends Personajes {
  personajeAlQueAsesora;

  constructor(adviser) {
    super();
    this.personajeAlQueAsesora = adviser;
  }

  comunicar() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

class Escudero extends Personajes {
  personajeAlQueSirve;
  gradoPelotismo;

  constructor(characterServes, pelota) {
    super();
    this.personajeAlQueSirve = characterServes;
    this.gradoPelotismo = pelota;
  }

  comunicar() {
    return "Soy un loser";
  }
}


