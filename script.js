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
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("nav ul");
  var adminName = localStorage.getItem("user");

  if (adminName) {
    var li = document.createElement("li");
    li.innerHTML = `
      <a href="#">👤 ${adminName}</a>
      <ul class="dropdown-menu">
        <li><a href="#" id="logoutBtn">Đăng xuất</a></li>
      </ul>
    `;
    li.classList.add("dropdown");
    nav.replaceChild(li, nav.lastElementChild);

    // Gán sự kiện đăng xuất
    document.getElementById("logoutBtn").addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("admin");
      localStorage.removeItem("user");
      alert("Đã đăng xuất!");
      window.location.href = "index.html";
    });
  }
});
