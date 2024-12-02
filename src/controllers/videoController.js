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
    } else {

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
function kpiResposta(req, res) {
    // Captura o parâmetro 'id' da URL
    var idUsuario = req.params.id; // Corrigi aqui para acessar o parâmetro corretamente

    // Chama a função no 'videoModel' passando o 'idUsuario'
    videoModel.kpiResposta(idUsuario)
        .then(function (resultado) {
            res.json(resultado); // Retorna o resultado em formato JSON
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar a consulta! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage); // Responde com status de erro
        });
}
function ArmazenarManobra(req, res) {

    var idUsuario = req.body.idUsuario
    var Manobra = req.body.Manobra
    var qtdAcertos = req.body.qtdAcertos


    videoModel.ArmazenarManobra(idUsuario, Manobra, qtdAcertos)
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
    VerificarResposta,
    kpiResposta,
    ArmazenarManobra

}