document.addEventListener('DOMContentLoaded', function(){
    const images = document.querySelectorAll('#s-icon .s-icon_item');
    let currentIndex = 0;

    function NextImage(){
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }
    images[currentIndex].classList.add('active');

    setInterval(NextImage, 3000)
})

function handleMouseEnter(){
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListeners(){
    const card = document.getElementsByClassName('s-card')

    for(let index = 0; 0 < card.length ; index ++){
        const cards = card[index];
        cards.addEventListener('mouseenter', handleMouseEnter)
        cards.addEventListener('mouseleave',handleMouseLeave)
    }
}

document.addEventListener('DOMContentLoaded',addEventListeners,false)

const listMusic = [
    "./assets/Musica/Tonight Alive - The Edge (Official Video).mp3",
    "./assets/Musica/Blackway & Black Caviar - _What's Up Danger_ (Spider-Man_ Into the Spider-Verse).mp3",
    "./assets/Musica/Dove Cameron - Born Ready (From “Marvel Rising”).mp3"
]

currentSong = 0;
const player = document.getElementById('player')

player.src = listMusic[currentSong];

player.onended = function(){
    currentSong++;
    if(currentSong < listMusic.length){
        player.src = listMusic[currentSong];
        player.play();
    }else{
        currentSong = 0;
        player.src = listMusic[currentSong];
        player.play();
    }
}