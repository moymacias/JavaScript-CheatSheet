//Existen diferentes formas en las que podemos fusionar un objeto con otro

const user = { name: "Moy", emoji: "🦁" };
const book = { title: "IT", score: 9 };
const beer = { name: "Judas", type: "Belgian strong" };

/* ---------------------------------------Con el metodo assign------------------------------------------- */

const withAssign = Object.assign(user, book, beer);
/* ------------------------------------------------------------------------------------------------------ */

/* --------------------------------------con el operador spread------------------------------------------ */

const withSpread = { ...user, ...book, ...beer };
/* ------------------------------------------------------------------------------------------------------ */

/* 
{
    name: "Judas",
    emoji: "🦁",
    title: "IT",
    score: 9,
    type: "Belgian strong"
} 
*/
// Date cuenta que si hay alguna propiedad con el mismo nombre esta sera sobreescrita
