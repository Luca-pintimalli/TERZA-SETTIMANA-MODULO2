//1)seleziono il bottone che mi permette di salvare il contenuto dell area input 

//2)prendo il contenuto dal campo input 
const contentName = document.getElementById('contentName')


//seleziono il bottone che mi permette di salvare , una volta selezionato gli associo una funzione 
const save = document.getElementsByClassName('btn-success')[0].addEventListener('click', function () {
    console.log('premuto salva!')
    //2)prendo il contenuto dal campo input 
   // const contentName = document.getElementById('contentName') successivamente per caricare il contenuto abbiamo messo questa riga fuori perchè senno non veniva letta , essendo che era dentro una funzione 

    //3)essendo un campo input il valore lo prendo tramite value 
    const textName = contentName.value
    console.log(textName)
    //così facendo una volta che abbiamo scritto qualcosa nel campo input , lo possiamo salvare in console tramite il suo tasto salva 
    localStorage.setItem('contenuto del testo', textName ) // in questo caso il contenuto del testo è già una stringa , quindi non dobbiamo fare nessun 'altro procedimento 
    
    
    //3) cosi il pulsante carica verrà fuori solamente dopo il salvataggio senza refresh 
    toogleLoadButton('enable')
})

//3) cosi il pulsante carica verrà fuori solamente dopo il salvataggio senza refresh 



//1)seleziono il bottone ad una funzione 
const load = function(){
    console.log('premuto carica!')
    //2) devo recuperare il valore dal localstorage 
    const saveValue = localStorage.getItem('contenuto del testo')
    //una volta preso lo dobbiamo caricare 
contentName.value = saveValue 

}




//1)seleziono il secondo bottone per caricare 
const loadButton = document.getElementsByClassName('btn-info')[0].addEventListener('click', load)

//2) creo una funzione che mi permette di attivare il pulsante senza che devo refrshare la pagina 
const toogleLoadButton = function(str){
    if(str === 'enable'){
    document.getElementsByClassName('btn-info')[0].removeAttribute('disabled')

    } else {
        document.getElementsByClassName('btn-info')[0].setAttribute('disabled',true )

    }






}




//1)facciamo in modo che il pulsante carica rimane disattivato  se non ha niente da caricare.
if (localStorage.getItem('contenuto del testo')){
    toogleLoadButton('disable'); 

//il pulsante è disabilitato già alla nascita , così se vedrà un valore salvato verrà abilitato

}



//elimina la chiave e disabilita il btn carica
const deleteMemory = function (){
    localStorage.removeItem('contenuto del testo') //così eliminiamo il localstorage
}


//contatore che tiene presente del tempo passato una volta entrto nella pagina 
let i = sessionStorage.getItem('count') //verifico se esiste un valore salvato nella chiave count all'intero di sessionstorage 
        ? parseInt(sessionStorage.getItem('count')) // se esiste il valore viene convertito in un numero utilizzando parseInt() 
        : 0 //altrimenti gli viene assegnato 0 

      const conta = function () { // in questa funzione all'interno il valore di i viene incrementato di 1 e viene salvato nella chiave count dentro sessionstorage 
        i = i + 1
        document.getElementById('timer').innerText =
          i + ' secondi di sessione aperta'
        sessionStorage.setItem('count', i)
      }

      setInterval(conta, 1000) // 1000 sarebbero i millisecondi ---> quindi 1 secondo , in questo caso noi richiamiamo la funzione ogni secondo in modo da aggiornare il contatore 






      //stesso procedimento fatto spiegato in maniera + dettagliata 
      /*
         Verifica se esiste un valore salvato nella chiave 'count' all'interno di sessionStorage
         let countValue = sessionStorage.getItem('count');

         Inizializza la variabile i con il valore salvato convertito in numero intero, altrimenti assegna il valore 0
         let i = countValue ? parseInt(countValue) : 0;

         Definisci la funzione che incrementa il contatore e aggiorna l'elemento 'timer'
         const conta = function () {
        i++; // Incrementa il contatore di 1
        document.getElementById('timer').textContent = i; // Aggiorna il contenuto dell'elemento 'timer'
        sessionStorage.setItem('count', i); // Salva il valore di i nella chiave 'count' di sessionStorage
             };

         Chiama la funzione 'conta' ogni secondo per aggiornare il contatore
         setInterval(conta, 1000)
         */