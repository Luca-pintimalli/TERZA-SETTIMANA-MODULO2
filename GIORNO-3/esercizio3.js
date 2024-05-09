//creo questo array  per poter prendere l'array dentro alla funzione getLibrary 
let allTheBooks = [];
const book = []; //


//creo una funzione che opererà una fetch 
const getLibrary = function () {
    fetch('https://striveschool-api.herokuapp.com/books', {
        /*in teoria qui dovrei inserire altri parametri , che però non servono in questo esercizio
        stiamo usando un metodo get, che è già quello di default , possiamo mettere anche altri metodi , tipo: POST,PUT,DELETE
        Non cè nessun tipo di autenticazione perchè il sito è free
        visto che stiamo eseguendo un get il body non ce'

        */
    })
        //quando la chiamata va a buon fine si entra nel then , e parte la funzione 
        //in sostanza ci vogliono due blocchi then , il primo torna un oggetto RESPONSE, dal quale capiamo se la chiamata è andata a buon fine o meno
        .then((response) => { //nel then ci ritorna quello che esce dalla getLibrary cioè una response che è incapsulata in una promise(cliccando sulla fetch esce fuori ci che ho appena scritto)
            if (response.ok) {
                console.log('OPERAZIONE OK!', response)
                //se finiamo qui vuol dire che i dati sono arrivati , ma sono arrivati in una in una promise 
                //dove trovo l'array di oggetti? lo trovo nel PAYLOAD della RESPONSE,come posso recuperarlo?
                return response.json(); //i dati tornano in una promise, quindi dobbiamo crere un blocco then successivo. 
                //non è detto che se finiamo nel then in automatico non cè nessun errore , posssiamo finire nel then anche con un errore tipo 400 , 500,fino a 520
                //facendo un if andiamo a filtrare uleriormente , se finiamo nell if vuol dire che abbiamo ottenuto una risposta 400, 404, 500ecc
            } else {
                //nel caso finissimo qui la cosa giusta è fare auto-lanciarsi nel catch 
                if (response.status == 404) {
                    throw new Error('la pagina non è stata trovata')
                } else if (response.status === 500) {
                    throw new Error('risposta server negativa')
                }
            }
        })
        //ogni volta che torna in una promise dobbiamo creare un nuovo then , dove andiamo ad estrarre il body dalla response , 
        .then((arrayOfLibrary) => {
            console.log('ho estratto il body , dalla response! ecco il risultato : ', arrayOfLibrary)
            //adesso da qui in poi posso andare a modificare il DOM 
          //  allTheBooks = arrayOfLibrary // prendo l'array dei libri e lo inserisco in questa variabile , per poter utilizzare l'array al di fuori di questa funzione , (mi serve per agg al carrello o per fare altre operazioni)
            const list = document.getElementById('libraryCard')
            arrayOfLibrary.forEach((user, i) => { //per ogni libro voglio crearmi una col con dentro una card
                const newCard = document.createElement('div')
                newCard.classList.add('col-3')
                newCard.innerHTML = ` 
        <div class="card h-100 mb-3">
        <img src="${user.img}" class="card-img-top" alt="...">
         <div class="card-body text-start">
           <h5 class="card-title"> ${user.title}</h5>
           <p class="card-text"> ${user.price}€ </p>
           <div class="btn-group" role="group" aria-label="Basic example">
             <button class="me-3 bg-warner" onclick='remove(event)' type="button" class="btn btn-primary">Scarta</button>
             <button type="button" class="btn btn-primary onclick=' ${i}  ">Compra Ora.</button>
             <button class='bg-danger' type="button" class="btn btn-primary">Rimuovi Dal carrello</button>
           </div>
         </div>
        </div>

         
        `
                list.appendChild(newCard)


            })





        })
        //quando si verifica un errore si entra nella catch 
        .catch((err) => {
            console.log('ERRORE', err)
        })
}


const remove = function (e) {
    console.log(e.target.closest(".col"))//vado a fare in modo che una volta eliminata la card , non rimanga lo spazio vuoto
     console.log('RIMUOVI CARD') 
    e.target.closest('.col').remove()
}

const addBook = function (index) {
    console.log(index)
    book.push(allTheBooks[index]);
    console.log('Stato del Carrello', cart)
    const cartList = document.getElementById('cart') // sono andato a prendermi l'elemento card per potere appendere il carello 
    cartList.innerHTML +=  `
    <li class='list-group-item >${allTheBooks[index].title} - ${allTheBooks[index].price}</li> 
    `
    //vado a creare la riga dove mettere il libro selezionato , in uno seleziono il titolo e nell'altro il prezzo da vedere nel carrello


}



getLibrary()

