let personnes = [
  "Samuel",
  "Karim",
  "Nadia",
  "Catherine",
  "Kevin",
  "Laetitia",
  "Djamina",
  "Vincent",
  "Sacha",
];
document.write(`<p>Nombre d'éléments dans tableau : ${personnes.length}</p>`);
console.log(`Nombre d'éléments dans tableau : ${personnes.length}`);

personnes.push("Pierre");
document.write(`<p>Après ajout</p>`);
document.write(`<p>Nombre d'éléments dans tableau : ${personnes.length}</p>`);
document.write(`<p>Après suppression du premier</p>`);
let personne = personnes.shift();
document.write(`<p>Element supprimé : ${personne}</p>`);
document.write(`<p>Nombre d'éléments dans tableau : ${personnes.length}</p>`);

document.write(
  `<p>Valeur de l'élément en 3ème position index = 2 : ${personnes[2]}</p>`
);

document.write(`<p>Recherche position d'une valeur : méthode indexOf</p>`);
let pos = personnes.indexOf("Kevin");
// Modification de la valeur
personnes[pos] = "Kévin";
document.write(
  `<p>Valeur de l'élément kevin modifié  index ${pos} : ${personnes[pos]}</p>`
);
// Méthode findIndex avec fonction anonyme
document.write(`<p>Recherche position d'une valeur : méthode findIndex</p>`);
pso = personnes.findIndex(function (elt) {
  return elt === "Kévin";
});
document.write(
  `<p>Position de l'élément kévin modifié  ${pos} et valeur : ${personnes[pos]}</p>`
);
// Méthode findIndex avec fonction fléchée d'écriture plus concise
pos = personnes.findIndex((elt) => elt === "Kévin");
document.write(
  `<p>Position de l'élément kévin modifié  ${pos} et valeur : ${personnes[pos]}</p>`
);

personne = personnes.find(function (elt) {
  return elt === "Kévin";
});
document.write(`<p>Valeur de l'élément trouvé : ${personne}</p>`);
document.write(`<p>Recherche d'une valeur : méthode find</p>`);
personne = personnes.find((elt) => elt === "Kévin");
document.write(`<p>Valeur de l'élément trouvé : ${personne}</p>`);

// Suppression en position avec la méthode splice
pos = personnes.findIndex((elt) => elt === "Vincent");
pos = personnes.indexOf("Vincent");
let eltsSup = personnes.splice(pos, 1);

// Suppression avec l'opérateur delete
// Approche moins usuelle que vous pourrez utiliser avec
// la manipulation des propriétés des objets
personnes.push(eltsSup[0]);
pos = personnes.indexOf("Vincent");
if (pos != undefined && pos != -1) {
  delete personnes[pos];
}

// Parcours des éléments d'un tableau
document.write(`<p>Extraction éléments et indice méthode forEach</p>`);
// Disponibles l'élément, sa position et l'objet tableau
personnes.forEach(function (elt, index, tab) {
  document.write(
    `<p>Element ${elt} en position ${index} dans tableau de longueur ${tab.length}</p>`
  );
});
// Cycle for très classique
for (let index = 0; index < personnes.length; index++) {
    document.write(
        `<p>Element ${personnes[index]} en position ${index}</p>`
      );
}

