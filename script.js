const popup = document.getElementById("lightbox");
const popupImage = document.getElementById("lightbox-img");
const popupClose = document.getElementById("close-btn");
const imageThumbs = document.querySelectorAll(".thumbnail");

for (let thumb of imageThumbs) {
    thumb.addEventListener("click", function() {
        popupImage.src = thumb.dataset.full;
        popup.classList.add("show");
    });
}

popupClose.addEventListener("click", function() {
    popup.classList.remove("show");
});