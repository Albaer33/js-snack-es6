// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

const roadBike = [
    {
        name: 'pinarello',
        weightInKg: 6
    },
    {
        name: 'cannondale',
        weightInKg: 7
    },
    {
        name: 'bmc',
        weightInKg: 5
    },
    {
        name: 'trek',
        weightInKg: 4
    },
    {
        name: 'bianchi',
        weightInKg: 9
    },
    {
        name: 'campagnolo',
        weightInKg: 7
    }
];

let currentLightestBike = roadBike[0];
for(let i = 0; i < roadBike.length; i++) {
    const thisBike = roadBike[i];
    if(thisBike.weightInKg < currentLightestBike.weightInKg) {
        currentLightestBike = thisBike;
    }
}
// output
console.log(currentLightestBike);
