const express = require("express");
const router = express.Router();

// Importar el controlador de juegos
const gameController = require("../controllers/gameController");

// Ruta para obtener todos los juegos
router.get("/", gameController.getAllGames);

// Ruta para obtener un juego por ID
router.get("/:id", gameController.getGameById);

// Ruta para crear un nuevo juego
router.post("/", gameController.createGame);

// Ruta para actualizar un juego
router.put("/:id", gameController.updateGame);

// Ruta para eliminar un juego
router.delete("/:id", gameController.deleteGame);

module.exports = router;
