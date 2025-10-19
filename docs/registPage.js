

/* part2 */
document.addEventListener("DOMContentLoaded", () => {
  const from = document.getElementById("from");
  if (!from) return;

  from.addEventListener("submit", async (e) => {
    e.preventDefault(); // блокируем стандартную отправку

    const formData = new FormData(from);

    try {
      const response = await fetch("/submit-from", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Сервер вернул ошибку");

      const result = await response.json();

      // ✅ SweetAlert2 уведомление об успехе
      Swal.fire({
        icon: "success",
        title: "Успешно!",
        text: result.message,
        showConfirmButton: false,
        timer: 2500
      }).then(() =>{
        window.location.href ="index.html";
      });

      from.reset();
    } catch (err) {
      console.error("Ошибка при отправке:", err);

      // ❌ SweetAlert2 уведомление об ошибке
      Swal.fire({
        icon: "error",
        title: "Не удалось отправить",
        text: "Попробуй ещё раз через минуту.",
        confirmButtonText: "Ок"
      });
    }
  });
});

