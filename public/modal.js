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

document.body.style.overflowX = 'hidden';

document.getElementById("modelForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  try {
    const response = await fetch("/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, phone, email }),
    });

    const result = await response.json();
    alert(result.message); // ответ от сервера
    modal.style.display = "none";
  } catch (err) {
    console.error("Ошибка при отправке:", err);
    alert("Не удалось отправить данные на сервер");
  }
});

