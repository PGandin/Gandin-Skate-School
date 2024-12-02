var express = require("express");
var router = express.Router();

var videoController = require("../controllers/videoController");

router.post("/GuardarResposta", function (req, res) {
    videoController.GuardarResposta(req, res);
})
router.post("/VerificarResposta", function (req, res) {
    videoController.VerificarResposta(req, res);
})
router.get("/kpiResposta/:id", function (req, res) {
    videoController.kpiResposta(req, res);
})
router.post("/ArmazenarManobra", function (req, res) {
    videoController.ArmazenarManobra(req, res);
})
router.get("/VerificarManobra/:id", function (req, res) {
    videoController.VerificarManobra(req, res);
})
router.post("/AtualizarManobra", function (req, res) {
    videoController.AtualizarManobra(req, res);
})
router.get("/PostarManobra/:idUsuario", function (req, res) {
    videoController.PostarManobra(req, res);
})
router.get("/PostarUsuarios", function (req, res) {
    videoController.PostarUsuarios(req, res);
})
module.exports = router;