// Структура сервера

import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

//наша база
const users = [];

app.use(cors());
app.use(express.json());

//обработчик запроса
app.post("/user", (req, res) => {
  const { name, password } = req.body;
console.log(users);
  let user = users.find((user) => user.name === name);

  if (user) {
    if (user.password === password) {
      res.send("Добро пожаловать");
    } else {
      res.status(401).send("Неверный пароль");
    }
  } else {
    users.push({ name, password });
    res.status(201).send("Пользователь создан");
  }
});

app.listen(PORT, () => {
  console.log("Server has been started on port 5000...");
});
