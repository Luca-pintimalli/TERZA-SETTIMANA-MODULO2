//ESERCIZIO 1 
class User { 
    constructor (_firstName, _lastName, _age, _location){
    this.firstName = _firstName 
    this.lastName = _lastName
    this.age = _age
    this.location = _location
}
}


const pino = new User(
    'Pino', 
    'Pano',
    '41',
    'Bari'
)

const pepe = new User ( 
    'Pepe', 
    'Lorem',
    ' 66',
    'Treviso'
)

console.log('pino', pino)
console.log('pepe', pepe)



//ESERCIZIO 2 
//1)Devo prendere i vari campi input creati nell HTML 
const petInput = document.getElementById('namePet')

const ownerInput = document.getElementById('owner')

const speciesInput = document.getElementById('species')

const breedInput = document.getElementById('breed')

//riferimento generico form , serve per l'evento di submit
const formTag = document.getElementsByTagName('form')[0]  //andiamo a prendere solo il form che vogliamo 



//2)creo la classe pet 
class Pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName 
        this.ownerName = _ownerName 
        this.species = _species 
        this.breed = _breed 
    }
}


//2)creo un array per salvare i contatti 
const pets = [];




//6)creiamo la funzione che invochiamo  dentro il punto 4 , dobbiamo creare i blocchi per inserire i contatti presi 
const updatePets = function (){
    //prendiamo l'Id che abbiamo creato in html 
    const petsRow = document.getElementById('pets-row')
    //dobbiamo svuotare i contenuti dentro l'array perchè senno a ogni ciclo ricrea già quelli fatti
    petsRow.innerHTML = ''
    //per ogni elemento di pets , creo una colonna con dentro il contatto
    pets.forEach(pet =>{ // pet rappresenta la classe dell'oggetto sopra , ricora di mettere la prima lettera in minuscolo 
//dobbiamo capire cosa fare per ogni contatto preso
//creo un div vuoto 
    const newDiv = document.createElement('div')
    //aggiungiamo la classe col di bootstrap
    newDiv.classList.add('col')
    //riempio il div
    newDiv.innerHTML = `
    <div class="card $ { pet.owner ? 'border border-info border-5 : ''}">
      <div class="card-body">
         <h5 class="card-title">${pet.petName}</h5>
         <h5 class="card-title">${pet.ownerName}</h5>
         <h5 class="card-title">${pet.species}</h5>
         <h5 class="card-title">${pet.breed}</h5>
      </div>
    </div>
    `
     //dobbiamo solo più appendere il div creato nella row del html 
     petsRow.appendChild(newDiv)


    } )
    



}

//3)lavoriamo adesso sull'elemento bottone 
formTag.addEventListener('submit', function(e){
e.preventDefault() // in questo modo una volta aggiornata la pagina non perdiamo i dati 
//4)istruzioni per prendere il valore scritto dall'utente nel form, creando un nuovo oggetto
const petFromFormValues = new Pet (petInput.value, ownerInput.value, speciesInput.value, breedInput.value )
console.log('Contatto animali',petFromFormValues ) //così possiamo vedere già a console i contatti che vengono salvati 
//5)inserisco i contatti nell array 
pets.push(petFromFormValues)

//bisogna azzerare il form adesso , 
petInput.value = '' 
ownerInput.value = ' '
speciesInput.value = ' '
 breedInput.value = '' 

 //dobbiamo creare qualcosa che ci permette di creare delle 'card' dove salvare ciò che Viene compilato nel form 

 updatePets()
})