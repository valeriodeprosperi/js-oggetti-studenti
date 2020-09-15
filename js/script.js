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
