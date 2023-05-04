// Veremos como podemos acceder a las propiedad de forma fiable

const dev = { name: "Moy", cat: { name: "kylo" } };

/* ---------------------------------------Accediendo a props------------------------------------------- */

const dogName1 = dev.dog.name;
// ⚠️ TypeError: Cannot read property "name" of undefined

const dogName2 = dev.dog?.name;
// ✅ Undefined, no te manda error pero se le asigna el valor de undefined

const dogName3 = dev.dog?.name || "Mikasa";
// ✅ Mikasa, si no existe esa prop por default se le asigna el nombre de Mikasa

const catGreet = dev.cat.meow?.() || (() => console.log("Meow 😸"));
// Meow 😸, tambien se le pueden asignar funciones
/* -------------------------------------------------------------------------------------------------- */
