let currentImageIndex = 0;
let images = [];

function openModal(title, description, imageArray) {
    var modal = document.getElementById('productModal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    images = imageArray;
    currentImageIndex = 0;
    updateCarousel();
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    updateCarousel();
}

function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    updateCarousel();
}

function updateCarousel() {
    document.getElementById('carouselImage').src = images[currentImageIndex];
    document.getElementById('imageCounter').textContent = `${currentImageIndex + 1}/${images.length}`;
}

window.onclick = function(event) {
    var modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function joinDiscord() {
    window.open('https://discord.gg/your-discord-link', '_blank');
}

function filterProducts() {
    var input, filter, container, boxes, title, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    container = document.getElementsByClassName("products-container")[0];
    boxes = container.getElementsByClassName("product-box");
    for (i = 0; i < boxes.length; i++) {
        title = boxes[i].getElementsByTagName("h2")[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            boxes[i].style.display = "";
        } else {
            boxes[i].style.display = "none";
        }
    }
}