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

    // Проверяем HTTP-статус
    if (!response.ok) throw new Error("Сервер вернул ошибку");

    const result = await response.json();

    // Красивое уведомление об успехе
    await Swal.fire({
      icon: "success",
      title: "Успешно!",
      text: result.message,
      showConfirmButton: false,
      timer: 2500,
    });

    // Закрываем модалку после уведомления
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "none";
  } catch (err) {
    console.error("Ошибка при отправке:", err);

    // Красивое уведомление об ошибке
    Swal.fire({
      icon: "error",
      title: "Не удалось отправить",
      text: "Попробуй ещё раз через минуту.",
      confirmButtonText: "Ок",
    });
  }
});


