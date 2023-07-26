/* Generalmente cuando llamamos a una API necesitamos manejar los posibles error,
   try...catch nos puede ayudar con eso */

/* ----------------------------------------Ejemplo 1------------------------------------------ */
const myFunction = () => {
  alerT("Hola mundo");
  //⚠️ El alert esta mal escrito por lo que nos arrojara un error
};

try {
  myFunction();
} catch (error) {
  console.error("Error capturado:", error);
}

console.log("Continuamor con la ejecucion...");
//⚠️ Error caputurado: ReferenceError:
//⚠️ alerT is not defined
//✅ Continuamos con la ejecucion
/* ------------------------------------------------------------------------------------------- */

/* ----------------------------------------Ejemplo 2------------------------------------------ */
const nombre = "Moy";
try {
  nombre();
  // ⚠️ Nombre no es del tipo esperado (funcion) por lo que daria un error
} catch (error) {
  console.error(`Tipo: ${error.name}`, `Error: ${error.message}`);
  // 👨🏻‍🏫 El error es un objeto con muchas propiedades entre ellas el name y el message
}
/* ----------------- -------------------------------------------------------------------------- */

/* ----------------------------------------Ejemplo 3------------------------------------------ */
// 👨🏻‍🏫 Que pasaria si no se detecta algun error? podemos crear nuestros propios errores

const frameworks = ["React", "Angular", "Next"];

try {
  if (!frameworks.includes("Vue")) {
    throw new Error("Debes usar Vue");
  }
} catch (error) {
  console.error(error.message);
}
// ✅ Debes usar Vue
/* ------------------------------------------------------------------------------------------- */

/* ----------------------------------------Ejemplo 4------------------------------------------ */
/* 👨🏻‍🏫 Try...catch tiene un clasula final (opcional) que se siempre se va a ejecutar de errores o no
 generalmente se usa para liberar un recurso, cerrar conexiones, etc. */

let conexion; // API, webservice, etc

try {
  const conexion = conexion.abrir();
  const data = obtenerDatos(conexion);
  console.log(data);
} catch (error) {
  console.error(error);
} finally {
  conexion.cerrar();
}
/* ------------------------------------------------------------------------------------------- */
