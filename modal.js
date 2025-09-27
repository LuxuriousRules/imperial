const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal ) {
    modal.style.display = "none";
    }
};

document.getElementById("modelForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Форма отправлена! (здесь будет запрос на сервер)");
  modal.style.display = "none";
});
