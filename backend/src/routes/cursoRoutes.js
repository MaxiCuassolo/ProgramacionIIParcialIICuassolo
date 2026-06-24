const express = require("express");
const router = express.Router();

const { obtenerCursos, registrarCurso, eliminarCurso } = require("../controllers/cursoControllers");

router.get("/", obtenerCursos);
router.post("/", registrarCurso);
router.delete("/:id", eliminarCurso);

module.exports = router;
