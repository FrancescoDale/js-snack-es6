// array di nomi. Da adesso prendo l'abitudine di dichiarare le variabili direttamente quando mi servono invece di dichiarle prima e poi usarle

const nameIndex = [

    {
        'nome' :'Erika',
    },
    {
        'nome' : 'Alessandra',
    },
    {
        'nome' : 'Giulia',
    },
    {
        'nome' : 'Andrea',
    },
    {
        'nome' : 'Simone',
    },
    {
        'nome' : 'Federico',
    },
    {
        'nome' : 'Giuseppe',
    },
    {
        'nome' : 'Francesca',
    },
    {
        'nome' : 'Mattia',
    },

];

//chiedo all'utente di inserire due numeri interi compresi tra 0 e numero di oggetti dell'array ( in questo caso è 9 )

const limiteInf = parseInt(prompt('Inserire il limite inferiore ( numeri da 0 a 9 ) : '));

const limiteSup = parseInt(prompt('Inserire il limite superiore ( numeri da 0 a 9 ) : '));

const outputIndex = []; // array creato in base a quali elementi sono individuati dai parametri da prompt

// uso forEach per scorrere l'array in base al valore dei parametri inseriti dai prompt. I parametri del foreach saranno element ( l'oggetto puntato di volta in volta e index, che rappresenta l'indice dell'elemento che viene di volta in volta preso in considerazione dal ciclo )

nameIndex.forEach((element, index) => {

    // condizione, uso l'operatore AND, l'index deve essere sia  maggiore uguale di limiteInf che minore o uguale di limiteSup
    if(limiteInf <= index && limiteSup >= index){
        outputIndex.push(element); // fa una push inserendo l'intero oggetto puntato nell'array outputIndex
    }

});

// verifico risultato

console.log(outputIndex);
