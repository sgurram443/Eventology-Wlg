window.addEventListener('scroll', function() {
    let scrollValue = window.scrollY;
    let rotatingImages = document.querySelectorAll('.rotate');

    rotatingImages.forEach((image, index) => {
        let angle = scrollValue * 0.1 + index * 90;
        image.style.transform = `rotate(${angle}deg) translateX(150px) rotate(-${angle}deg)`;
    });
});
