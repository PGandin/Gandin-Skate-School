var videoModel = require("../models/videoModel");

function GuardarResposta(req, res) {


    var nivelUsuario = req.body.nivelUsuario
    var video = req.body.video
    var ResultadoResposta = req.body.ResultadoResposta
    var idUsuario = req.body.idUsuario

    if (ResultadoResposta == false) {

        videoModel.InserirResposta(nivelUsuario, video, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }else{

        videoModel.AtualizarResposta(nivelUsuario, video, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function VerificarResposta(req, res) {

    var video = req.body.video
    var idUsuario = req.body.idUsuario


        videoModel.VerificarResposta(video, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    
}

module.exports = {
    GuardarResposta,
    VerificarResposta
}