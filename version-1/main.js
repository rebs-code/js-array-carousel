"use strict";

//create array with img
const images = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];
// create container
const container = document.createElement('div');
container.classList.add('container');
// create items
const items = document.createElement('div');
items.classList.add('items');
// create thumbnail container
const thumbnails = document.createElement('div');
thumbnails.classList.add('thumbnails');
// create prev button
const prev = document.createElement('div');
prev.classList.add('prev');
// create next button
const next = document.createElement('div');
next.classList.add('next');
// append buttons to itemsa div
items.appendChild(prev);
items.appendChild(next);
//append items to container
container.appendChild(items);
//appenmd thumbnails to container
container.appendChild(thumbnails);
// append container to body
document.body.appendChild(container);

let currentSlide = 0; //questa è la prima immagine con indice 0 nell'array

for (let i = 0; i < images.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    if (i === currentSlide) {
        item.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = `/img/0${i+1}.jpg`;
    img.alt = 'image 0${i}';
    item.appendChild(img);
    items.appendChild(item);
};

for (let i = 0; i < images.length; i++) {
    // creo un elemento img per ogni singolo thumbnail
    const thumbnail = document.createElement('img');
    thumbnail.src = `/img/0${i+1}.jpg`;
    thumbnail.alt = `Thumbnail ${i+1}`;
    // aggiungo un event listener per ogni thumbnail
    thumbnail.addEventListener('click', function() {
        // rimuovo la classe active dall'immagine corrente
        allItems[currentSlide].classList.remove('active');
        // cambio currentSlide con l'indice dell'immagine cliccata
        currentSlide = i;
        // aggiungo la classe active all'immagine corrente
        allItems[currentSlide].classList.add('active');
    });
    thumbnails.appendChild(thumbnail);
};

// This LOC selects all the elements in the hmtl with class "item" and stores them in a variable.
const allItems = document.querySelectorAll(".item");
// add event listeners to buttons
next.addEventListener('click', function() {
    // if the current slide is not the last one, remove the class "active" from the current slide and add it to the next one.
    if(currentSlide < allItems.length - 1) {
        allItems[currentSlide].classList.remove("active");
        currentSlide++;
        allItems[currentSlide].classList.add("active");
    }
});

prev.addEventListener('click', function() {
    // if the current slide is not the first one, remove the class "active" from the current slide and add it to the previous one.
    if(currentSlide > 0) {
        allItems[currentSlide].classList.remove("active");
        currentSlide--;
        allItems[currentSlide].classList.add("active");
    }
});
