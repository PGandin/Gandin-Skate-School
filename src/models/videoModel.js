var database = require("../database/config")

function AtualizarResposta(nivelUsuario, video, idUsuario) {

    var instrucaoSql = `
     UPDATE Nivelamento SET Nivel = ${nivelUsuario} WHERE idVideo = ${video} AND fkCadastro = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function InserirResposta(nivelUsuario, video, idUsuario) {

    var instrucaoSql = `
        INSERT INTO Nivelamento (Nivel, fkCadastro, idVideo)VALUES ('${nivelUsuario}',${idUsuario}, ${video});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function VerificarResposta(video, idUsuario) {

    var instrucaoSql = `
        SELECT * FROM Nivelamento WHERE idVideo = ${video} AND fkCadastro = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    InserirResposta,
    AtualizarResposta,
    VerificarResposta
};