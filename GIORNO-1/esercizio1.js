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
//Devo prendere i vari campi input creati nell HTML 
const petInput = document.getElementById('namePet')

const ownerInput = document.getElementById('owner')

const speciesInput = document.getElementById('species')

const breedInput = document.getElementById('breed')
//creo la classe pet 
class Pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName 
        this.ownerName = _ownerName 
        this.species = _species 
        this.breed = _breed 
    }
}

//riferimento generico form , serve per l'evento di submit
const formTag = document.getElementsByTagName('form')[0]  //andiamo a prendere solo il form che vogliamo 

//creo un arrey per salvare i contatti 
const pets = [];
//inserisco i contatti nell array 
pets.push(petFromFormValues)

const updatePets = function (){
    //prendiamo l'Id che abbiamo creato in html 
    const petsRow = document.getElementById('pets-row')
    

}

// lavoriamo adesso sull'elemento bottone 
formTag.addEventListener('submit', function(e){
e.preventDefault() // in questo modo una volta aggiornata la pagina non perdiamo i dati 
//adesso posso scrivere le istruzione per eseguire l'esercizio 
const petFromFormValues = new Pet(petInput.value, ownerInput.value, speciesInput.value, breedInput.value )
console.log('Contatto animali',petFromFormValues ) //così possiamo vedere già a console i contatti che vengono salvati 
//bisogna azzerare il form adesso , 
petInput.value = '' 
ownerInput.value = ' '
speciesInput.value = ' '
 breedInput.value = '' 

 //dobbiamo creare qualcosa che ci permette di creare delle 'card' dove salvare ciò che ciene compilato nel form 

 updatePets()
})