/*  Con este metodo puedes obtener el elemento pasandole el indice  */

const fruits = ["🍅", "🍈", "🍉", "🥭"];

/* ----------------------------------Accediendo de forma manual-------------------------------------- */
// Recupera el ultimo elemento usando el length
const lastManually = fruits[fruits.length - 1]; // -> "🥭"
/* -------------------------------------------------------------------------------------------------- */

/* ----------------------------------------Con el Metodo At------------------------------------------ */
// Usando el nuevo metodo at()
const lastAt = fruits.at(-1); // -> "🥭"

// Si accedemos a una posicion que no exista regresara null
const some = fruits.at(15); // -> undefined
/* -------------------------------------------------------------------------------------------------- */
