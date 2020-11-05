// array che contiene i vari oggetti bicicletta

const bikeIndex = [

    {
        'model':'type0',
        'weight': 6,
    },
    {
        'model' : 'type1',
        'weight' : 7,
    },
    {
        'model' : 'type2',
        'weight' : 5.2,
    },
    {
        'model' : 'type3',
        'weight' : 6.9,
    },
    {
        'model' : 'type4',
        'weight' : 8.1,
    },
    {
        'model' : 'type5',
        'weight' : 5.1,
    }

];

// test visualizzazione array

console.log(bikeIndex);

let lighterBike; // variabile che prenderà il valore della bicicletta più leggera

lighterBike = bikeIndex[0];

// invece del ciclo for, per assegnare il peso minore via via che scorro l'array, uso il foreach e la arrow function

bikeIndex.forEach((item, i) => {

});
