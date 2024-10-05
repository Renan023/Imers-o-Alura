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

