const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// Versione semplice con ciclo for
const numbersPlusOne = [];
for (let i=0; i<numbers.length; i++){
    numbersPlusOne.push(numbers[i] + 1);
}
 console.log(numbersPlusOne);
 
 // Versione con map()
 const numbersPlusTwo = numbers.map( (number) => number + 2);
 console.log(numbersPlusTwo);