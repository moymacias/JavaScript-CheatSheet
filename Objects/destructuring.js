// Sirve cuando queremos extraer propiedades de un objeto o un arreglo

/* ---------------------------------------Notacion de puntos------------------------------------------- */
// Con la notacion de puntos era como accediamos anteriormente

const dev = { nombre: "Moy", ciudad: "Mexico" };

const nombre = dev.nombre;
const ciudad = dev.ciudad;
/* ---------------------------------------------------------------------------------------------------- */

/* -----------------------------------------Destructuring---------------------------------------------- */

/* ----- Normal ----- */
const developer = { name: "Moy", city: "Mexico" };

const { name, city } = dev; // Moy, Mexico
/* --------------------*/

/* ----- Propiedad no definida ----- */
//En caso de que queramos extraer una propiedad que no existe, podemos asignarle un valor por defecto con el operador =

const obj = { prop1: "Prop 1", prop2: "Prop 2" };

const { lenguaje = "JS" } = obj;
/* --------------------------------- */

/* ----- Utilizar alias ----- */
// Podemos crear nuestrar variables con un nombre diferente a la propiedad que queremos extraer

const otherObj = { prop: "Prop", newProp: "newProp" };

const { prop: porpVar } = otherObj;
// propVar ahora tiene el valor de prop
/* -------------------------- */

/* ----- Acceso profundo ----- */
// En el caso que tengamos un objeto dentro de otro objeto tendremos que acceder a su propiedad

const dev2 = {
  person: "Moy",
  country: "Mexico",
  stack: { language: "JS", editor: "VSCode" },
};

const {
  stack: { editor },
} = dev2;
console.log(editor); //VSCode
/* ---------------------------- */

/* ----- Obtencion resto de props ----- */
// En el caso de que queramos obtener el resto de propiedads usaremos la sintaxis rest (...)

const dev3 = {
  person: "Moy",
  country: "Mexico",
  stack: { language: "JS", editor: "VSCode" },
};

const { person, ...rest } = dev3;
console.log(rest);
/* {country: "Mexico", stack: { language: "JS", editor: "VSCode" }} */
/* ---------------------------------------------------------------------------------------------------- */
