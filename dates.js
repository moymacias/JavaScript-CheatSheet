// Existen varias formas de mostrar una fecha

/* ---------------------------------------Formato de fecha------------------------------------------- */
const halloween = new Date(2023, 9, 31, 23, 59, 59);

//Por defecto el formato de la fecha es ISO 8601, genial para almacenarlo pero poco util para mostrarlo
console.log(halloween); // 2021-10-32T22:59:59,000z
/* -------------------------------------------------------------------------------------------------- */

/* -------------------------------------Opciones para mostrar---------------------------------------- */

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
// Existen mas opciones, googlearlas para conocerlas

halloween.toLocaleString("ko-KR", options); // 🇰🇷
halloween.toLocaleString("es-ES", options); // 🇪🇸
/* -------------------------------------------------------------------------------------------------- */
