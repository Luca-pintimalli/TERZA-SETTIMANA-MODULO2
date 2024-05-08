const getLibrary = function () {
    fetch('https://striveschool-api.herokuapp.com/books', {

    })

        .then((response) => {
            if (response.ok) {
                console.log('OPERAZIONE OK!', response)
                //dove trovo l'array di oggetti? lo trovo nel PAYLOAD della RESPONSE,come posso recuperarlo?
                return response.json(); //i dati tornano in una promise, quindi dobbiamo crere un blocco then successivo. 

            } else {
                if (response.status == 404) {
                    throw new Error('la pagina non è stata trovata')
                } else if (response.status === 500) {
                    throw new Error('risposta server negativa')
                }
            }
        })
        .then((arrayOfLibrary) => {
            console.log('ho estratto il body , dalla response! ecco il risultato : ', arrayOfLibrary)
            //adesso da qui in poi posso andare a modificare il DOM 
            const list = document.getElementById('libraryCard')
            arrayOfLibrary.forEach((user) => {
                const newCard = document.createElement('div')
                newCard.classList.add('col-3')
                newCard.innerHTML = ` 
        <div class="card mb-3">
        <img src="${user.img}" class="card-img-top" alt="...">
         <div class="card-body text-start">
           <h5 class="card-title"> ${user.title}</h5>
           <p class="card-text"> ${user.price}€ </p>
           <div class="btn-group" role="group" aria-label="Basic example">
             <button class="me-3 bg-warner" onclick='deleteCard(event)' type="button" class="btn btn-primary">Scarta</button>
             <button type="button" class="btn btn-primary">Compra Ora.</button>
             <button class='bg-danger' type="button" class="btn btn-primary">Rimuovi Dal carrello</button>
           </div>
         </div>
        </div>

         
        `
                list.appendChild(newCard)


            })





        })
        .catch((err) => {
            console.log('ERRORE', err)
        })
}
getLibrary()

const deleteCard = function (e){
    console.log('elimina card',e)
    e.target.closest('.card').remove()
}