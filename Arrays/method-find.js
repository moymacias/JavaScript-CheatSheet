/*  Este metodo retorna el primer elemento de un arreglo dado que satisfaga la condicion, 
    si ningun valor satisface la condicion, este retorna un "undefined" */

const developers = [
  { name: "Moy", age: 24 },
  { name: "Juan", age: 26 },
  { name: "Ana", age: 34 },
];

let buscar = developers.find(item => item.name === "Moy");
// {name: "Moy", age: "24"}
