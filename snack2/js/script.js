// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console.

const squadre = [
    {
        nome: 'milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'genoa',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'sassuolo',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'salernitana',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'comprensorio vairano',
        puntiFatti: 0,
        falliSubiti: 0
    }
];
const newSquadre = [];
for(let i = 0; i < squadre.length; i++) {
    const thisSquadra = squadre[i];
    thisSquadra.puntiFatti = getRndInteger(0, 100);
    thisSquadra.falliSubiti = getRndInteger(0, 200);

    const {nome, falliSubiti} = thisSquadra;
    const copySquadra = {
        nome,
        falliSubiti
    };

    newSquadre.push(copySquadra);
}

console.log(newSquadre);


// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}