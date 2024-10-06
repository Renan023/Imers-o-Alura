document.addEventListener("DOMContentLoaded", function(){
    const images = document.querySelectorAll('#gallery-container .gallery-image')
    let currentIndex = 0;

    function showNextImage(){
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }
        
    images[currentIndex].classList.add('active');

    setInterval(showNextImage,3000)
})

function switchTheme(){
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}