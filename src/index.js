const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home</h1>");
});

app.listen(PORT, () => {
  console.log(`Servidor corriento en el puerto: http://localhost:8080`);
});
