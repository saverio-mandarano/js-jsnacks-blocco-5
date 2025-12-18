const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 },
  { noName: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//Versione-1
for (let i=0; i<people.length; i++){
  console.log("versione-1 ", people[i].name); //se un elemento non ha name, stampa undefined
}

//Versione-2
for (const person of people){
  for (const key in person) { //ciclo sulle proprietà della i-esima persona
    if (key === `name`){ //se non c'è proprietà name, non stampo nulla
      console.log("versione-2 ", person[key]);
    }
  } 
}