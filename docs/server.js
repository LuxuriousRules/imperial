const express = require("express");
const app = express();

// чтобы сервер понимал JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// обработка формы
app.post("/submit", (req, res) => {
  const { username, name, email, phone, age, city, country, lastName, height, job, children, about  } = req.body;
  console.log("получено:", name, username, email, phone, age, city, country, lastName, height, job, children,  about  );
  
  res.json({ message: `Привет, ${username} ! Мы получили твой email: ${email} Контактный номер ${phone} ` });
});

// раздаём статику (index.html, стили, скрипты)
app.use(express.static(__dirname));

// запускаем сервер
app.listen(3000, () => {
  console.log("Сервер запущен по адресу http://localhost:3000");
});


/* reg */

