Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
MILESTONE 2
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
BONUS 3:
Al click sulla thumbnail, viene visualizzata l'immagine selezionata;
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto rispondete a questa domanda: "Quanti cicli servono?"

# Carousel con JS

## Descrizione del codice

1- Creo un array contenente le immagini

const images = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];

2- Con JS creo il markup

const container = document.createElement('div');
container.classList.add('container');

const items = document.createElement('div');
items.classList.add('items');

const prev = document.createElement('div');
prev.classList.add('prev');

const next = document.createElement('div');
next.classList.add('next');

items.appendChild(prev);
items.appendChild(next);

container.appendChild(items);

document.body.appendChild(container);

3- Ora creo i div di tutte le immagini. Solo la prima sarà visibile, le altre saranno nascoste. L'immagine visibile avrà classe active, le altre immagini non avranno questa classe.

for (let i = 0; i < images.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    if (i === 0) {
        item.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = images[i];
    img.alt = '';
    item.appendChild(img);
    items.appendChild(item);
};

4- Inizializzo una variabile "currentSlide" che serve per definire quale immagine sarà attiva in un determinato momento e vado a riscrivere il loop

let currentSlide = 0; //questa è la prima immagine con indice 0 nell'array

for (let i = 0; i < images.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    if (i === currentSlide) {
        item.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = images[i];
    img.alt = 'image ${i}';
    item.appendChild(img);
    items.appendChild(item);
};

5- 
const allItems = document.getQuerySelectAll(".items")

6- Se clicco su la freccia next, la classe active verrà spostata sulla prossima immagine contenuta nell'array. Creo degli eventListener per entrambi gli elementi

next.addEventListener('click', function() {
    if(currentSlide < allItems.length - 1) {
        allItems[currentSlide].classList.remove("active");
        currentSlide++;
        allItems[currentSlide].classList.add("active");
    }
});

prev.addEventListener('click', function() {
    if(currentSlide > allItems.length - 1) {
        allItems[currentSlide].classList.remove("active");
        currentSlide--;
        allItems[currentSlide].classList.add("active");
    }
});





