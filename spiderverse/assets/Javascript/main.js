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