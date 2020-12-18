const funFact = document.getElementById("random");

var randomQuotes = [
    "The worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared.",
    "No matter how much suffering you went through, you never wanted to let go of those memories.",
    "The past beats inside me like a second heart.", 
    "Sometimes things become possible if we want them bad enough.",
    "Humans, not places, make memories.",
    "There are memories that time does not erase... Forever does not make loss forgettable, only bearable.",
    "If music be the food of love, play on.” – William Shakespeare",
    "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.” – Plato",
    "After silence, that which comes nearest to expressing the inexpressible is music.” – Aldous Huxley"
]



funFact.addEventListener("click", () => {
    var randomNumber = Math.floor(Math.random() * (randomQuotes.length));
    funFact.innerHTML = randomQuotes[randomNumber];
    funFact.innerHTML = ` "${randomQuotes[randomNumber]}" `;
});


