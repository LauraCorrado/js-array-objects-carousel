const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const container = document.querySelector(".container")

images.forEach((el) => {
    container.innerHTML += `<div class="card relative d-none">
    <img src="${el.image}" alt="image">
    <div class="text absolute">
    <h2>${el.title}</h2>
    <p>${el.text}</p>
    </div>
    </div>`
})


const card = document.querySelectorAll(".card")
const next = document.querySelector(".btn-right")
const prev = document.querySelector(".btn-left")

// var elemento visibile
let active = 0;
card[active].classList.remove("d-none");

next.addEventListener("click", function() {
    card[active].classList.add("d-none")
    if(active == images.length - 1) {
        active = 0
    } else {
        active++
    }
    card[active].classList.remove("d-none")
})

card[active].classList.remove("d-none");
prev.addEventListener("click", function() {
    card[active].classList.add("d-none")
    if(active === 0) {
        active = images.length - 1
    } else {
        active--
    }
    card[active].classList.remove("d-none")
})