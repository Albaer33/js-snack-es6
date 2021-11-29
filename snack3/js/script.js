// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const min=2, max=4;


// versione con forEach
// const newArray = [];
// myArray.forEach((element, index, array) => {
//     if (index >= min && index <= max) {
//         newArray.push(element);
//     }
// });
// console.log(newArray);

// versione con filter
const newArray = myArray.filter((item, index, array) => {
    const thisItem = index >= min && index <= max;
    return thisItem;  
});

console.log(newArray);