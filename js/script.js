/*Creare un oggetto che descriva uno studente con le seguenti proprietà:
nome, cognome e età. Stampare a schermo attraverso il for in tutte le
proprietà.*/
var studente = {
    "nome": "Marco",
    "cognome": "Olivetti",
    "età": "28"
}

for (var infostudente in studente) {
    console.log(studente[infostudente]);
}
/* Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome*/

var arrayStudenti = [
  {
    "nome": "Marco",
    "cognome": "balestri",
    "età": "30"
  },

  {
    "nome": "Pippo",
    "cognome": "Bruni",
    "età": "22"
  },

  {
    "nome": "Simone",
    "cognome": "Biancji",
    "età": "27"
  }

];

for (var i = 0; i < arrayStudenti.length; i++) {
  console.log(arrayStudenti[i].nome , arrayStudenti[i].cognome);
}
