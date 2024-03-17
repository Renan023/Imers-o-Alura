const bulb = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
];

const imgContainer = document.querySelector('.details1 img');
let current = 0;

function change() {
    current = (current + 1) % bulb.length;
    const imageUrl = bulb[current];

    imgContainer.style.opacity = 0;

    setTimeout(() => {
        imgContainer.src = imageUrl;
        imgContainer.style.opacity = 1;
    }, 500);
}

setInterval(change, 3000);
