// Existen varias formas de invertir un string

/* ---------------------------------------👌🏻La mas facil👌🏻------------------------------------------- */

const reverse1 = str => str.split("").reverse().join("");
/* -------------------------------------------------------------------------------------------------- */

/* --------------------------------------🚀La mas moderna🚀------------------------------------------ */

const reverse2 = str => [...str].reverse().join("");
/* ---------------------------------------------------------------------------------------------------- */

/* ---------------------------------------🧑🏻‍💻Con reduce()🧑🏻‍💻------------------------------------------- */

const reverse3 = str =>
  str.split("").reduce((rev, char) => `${char}${rev}`, "");
/* ---------------------------------------------------------------------------------------------------- */

/* ---------------------------------------♻️La recursiva♻️------------------------------------------- */

const reverse4 = str =>
  str === "" ? "" : reverse4(str.sustring(1)) + str.charAt(0);
/* ---------------------------------------------------------------------------------------------------- */
