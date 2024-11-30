var express = require("express");
var router = express.Router();

var videoController = require("../controllers/videoController");

router.post("/GuardarResposta", function (req, res) {
    videoController.GuardarResposta(req, res);
})
router.post("/VerificarResposta", function (req, res) {
    videoController.VerificarResposta(req, res);
})

module.exports = router;