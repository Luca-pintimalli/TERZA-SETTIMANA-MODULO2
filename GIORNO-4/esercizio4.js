 const loadImages = function (searchKeyword) {
    fetch("https://api.pexels.com/v1/search?query=" + searchKeyword, {
        headers: {
            Authorization: 'dLmmKrIm1JvgQuoEem69yUPUyCXV2xlJyvP7CneHJkB194ElMAiBHCZo'
        },
    })
    .then((response) => {
        console.log('response pexels', response)
        if (response.ok)  {
           return response.json()
        } else {
            throw new Error('Error pexels')

        }


    
    } )
    .then(data => {
        //data.photos è un array di oggetti 
        //troviamo tutte le immagini delle card , sono 9 quelle dell'array che vogliamo utilizzare ne h 15 , se avessimo ciclato l'array più grande avremmo avuto come risultato undefineld 
        const allTheCardImgs = document.querySelectorAll('.card img')
        //cicliamo le immagini 
        allTheCardImgs.forEach((cardImg, i ) => {
            cardImg.setAttribute('src', data.photos[i].src.medium) //in questo modo vado a cambiare le immagini del cane con le nostre immagini , in sostanza gli cambiamo l'attributo src 
            cardImg.addEventListener('click', function (){
                location.assign('detalis.html?imageId=' + data.photos[i].id)
            })
        })
        changeAll9mins(data.photos) // possiamo invocarla qui perchè è assincono 
    })
    .catch((err) => {
        console.log('ERRORE', err)
    } )
}

loadImages('nature') ; //mettimo un parametro perche tutte le volte che dovrò prendere delle foto diverse mi basterà richimre la funzione 
//adesso qualsiasi cosa che scriviamo nel parametro automaticamente troveremo le foto sostituite con quello che vogliamo 
//adesso dobbiamo collegare i bottoni 
const primaryButton = document.getElementsByClassName('btn-primary')[0] // seleziono il primo bottone 
const secondaryButton = document.getElementsByClassName('btn-secondary')[0]

primaryButton.addEventListener('click', () => {     //assegno al primo bottone un evento , e inserisco il richiamo dellla funzione e come parametro posso inserire quello che voglio
    loadImages('fruit')
})

secondaryButton.addEventListener('click', () => { // stessa cosa ma per il seocndo bottone 
    loadImages('city')

})


//adesso dobbiamo prendere tutti i bottoni edit della pagina , perchè dobbiamo andare a cambiare il contenuto
//come facciamo ? con un selettore css riesco a trovare solamente i tasti edit 
const allEditButtons = document.querySelectorAll('.card .btn-group button:nth-of-type(2)')
console.log('allEditButtons', allEditButtons)


const deleteCard = function (btn) { // in questo caso passando come parametro btn vado a cancellare tutta la card
   const col = btn.closest('.col-md-4') //così va a prendere di riferimento la posizione della colonna che contiene il bottone ed elimino la card 
   col.classList.add('invisible')
}


//a questo punto devo ciclare i bottoni che ho torvato 
allEditButtons.forEach(btn =>{ //ricorda che allEditButton è un array , quindi quindi andava bene usare un forEach , non potevo fare solo btn.innerText 
    btn.innerText = 'Hide'
//al click la carta si deve cancellare , riutilizzo questo ciclo per cancellare la carta
    btn.addEventListener('click', function (e) {
        deleteCard(e.target)

    })
})
//devo andare a sostituire il 9mins della card con l'id dell immagine 
// prima cosa da chiedersi ? dove sono le immagini ? in questo file js abbiamo preso le immagini , per sostituire le foto nelle card 
//le immagini sono in data.photos , il problema è che sono dentro una funzione , dobbiamo trovare un modo per tirarle fuori 
//creo una funzione per recuperarmi 9mins
const changeAll9mins = function (photos){
    const all9mins = document.querySelectorAll('small.text-muted')
    all9mins.forEach((small, i) => {
        small.innerText = photos[i].id
    })
}
//in questo caso vado a invocare la funzione dove si trovano le immagini 



//ricerca custom 
//seleziono l'input 
const searchInput = document.getElementById('custom-search')
const searchButton= document.getElementById('search-button')
searchButton.addEventListener('click', function (){
    loadImages(searchInput.value)
})
