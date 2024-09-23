

const slider = document.querySelector('.slider');
const categoryLabels = document.querySelector('.category-labels');
let rotationY = 0;
let isRotating = false;
let rotationTimeout;

// Function to hide category labels when rotating starts
function startRotation() {
    if (!isRotating) {
        categoryLabels.classList.add('hidden');
        isRotating = true;
    }
}

// Function to show category labels when rotation stops
function stopRotation() {
    clearTimeout(rotationTimeout);
    rotationTimeout = setTimeout(() => {
        categoryLabels.classList.remove('hidden');
        isRotating = false;
    }, 500); // Wait for the rotation to stop
}

function adjustCategoryLabelRotation() {
categoryLabels.forEach(label => {
    // Apply the inverse of the rotationY so labels face the user
    label.style.transform = `rotateY(${-rotationY}deg)`;
});
}



// Wheel event for rotation
window.addEventListener('wheel', (event) => {
    event.preventDefault();
    rotationY += event.deltaY * 0.2;
    slider.style.transform = `rotateX(-30.5deg) rotateY(${rotationY}deg)`;

    startRotation();  // Hide category labels when rotating
    stopRotation();   // Show category labels after the rotation stops
    adjustCategoryLabelRotation(); // Adjust label rotation so they always face the user
});

// Hover effect to duplicate image to the top-right corner
const topRightImgDiv = document.getElementById('top-right-img');
const topRightImg = topRightImgDiv.querySelector('img');
const topRightText = topRightImgDiv.querySelector('p');

slider.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'IMG') {
        topRightText.style.display = 'none';  // Hide the text
        topRightImg.src = event.target.src;
        topRightImg.style.display = 'block'; // Show the image
    }
});

slider.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'IMG') {
        topRightImg.style.display = 'none';
        topRightText.style.display = 'block';  // Show the text
    }
});