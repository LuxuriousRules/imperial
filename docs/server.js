const express = require("express");
const multer = require("multer");
const app = express();

// Настройка хранилища для файлов
const upload = multer({ dest: "uploads/" }); // файлы будут сохраняться в папку uploads

// чтобы сервер понимал JSON и обычные формы
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// обработка формы 1 (модальное окно)
app.post("/submit-modal", upload.none(), (req, res) => {
  const { username, email, phone } = req.body;
  console.log("Текстовые данные:", username, email, phone);

  res.json({
    message: `Привет, ${username}! Мы получили твой email: ${email}, телефон: ${phone}`
  });
});

// обработка формы 2 (анкета с фото)
app.post("/submit-from", upload.single("photo"), (req, res) => {
  console.log("Данные анкеты:", req.body);
  console.log("Файл:", req.file);

  res.json({
    message: `Анкета получена от ${req.body.name}, фото загружено ✅`
  });
});

// раздаём статику (index.html, стили, скрипты)
app.use(express.static(__dirname));

// запускаем сервер
app.listen(3000, () => {
  console.log("Сервер запущен по адресу http://localhost:3000");
});

