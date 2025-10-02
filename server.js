const express = require("express");
const app = express();

// чтобы сервер понимал JSON
app.use(express.json());

// обработка формы
app.post("/submit", (req, res) => {
  const { username, email, phone } = req.body;
  console.log("получено:", username, email, phone);

  res.json({ message: `Привет, ${username}! Мы получили твой email: ${email} Контактный номер ${phone}` });
});

// раздаём статику (index.html, стили, скрипты)
app.use(express.static("public"));

// запускаем сервер
app.listen(3000, () => {
  console.log("Сервер запущен по адресу http://localhost:3000");
});