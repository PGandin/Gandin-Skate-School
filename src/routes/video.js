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

module.exports = router;