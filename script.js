var originalSrc;

window.onload = function () {
  originalSrc = document.getElementById("mainImage").src;
};

function changeImage(smallImg) {
  document.getElementById("mainImage").src = smallImg.src;
}

function resetImage() {
  document.getElementById("mainImage").src = originalSrc;
}
