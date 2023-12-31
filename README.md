# Carousel con JS

Questo programma scritto in JS crea partendo da un markup assente un carosello che mostra una serie di immagini. Si può selezionare l'immagine che si desidera visualizzare a schermo intero sia cliccando sul thumbnail o muovendosi con le frecce poste in alto e in basso rispetto al contenitore del thumbnail.  

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

5- Questa riga di codice seleziona tutti gli elementi con classe items e li salva in una variabile per poterli manipolare dopo con JS.

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

## Tecnologie web

- HTML
- CSS
- JS






