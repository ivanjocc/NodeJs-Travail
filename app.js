const express = require("express");
const app = express();
const ejs = require("ejs");

// Configuración de EJS como motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Rutas
app.get("/", (req, res) => {
  // Renderizar el archivo index.ejs
  res.render("index");
});

app.get("/profile", (req, res) => {
  // Simulación de datos del usuario
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  // Renderizar el archivo profile.ejs y pasar los datos del usuario
  res.render("profile", { user });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor en ejecución en el puerto 3000");
});
