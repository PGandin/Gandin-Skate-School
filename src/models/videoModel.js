/* const { VerificarManobra } = require("../controllers/videoController"); */
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

function kpiResposta(idUsuario) {

    var instrucaoSql = `
        SELECT Nivel, idVideo FROM Nivelamento WHERE fkCadastro = ${idUsuario} ORDER BY idVideo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ArmazenarManobra(idUsuario, Manobra, qtdAcertos) {

    var instrucaoSql = `
        
    INSERT INTO Manobras (fkCadastro, ${Manobra})VALUES 
                            ('${idUsuario}', '${qtdAcertos}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function VerificarManobra(idUsuario) {

    var instrucaoSql = `
        SELECT * FROM Manobras WHERE fkCadastro = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function AtualizarManobra(idUsuario, Manobra, qtdAcertos) {

    var instrucaoSql = `
     UPDATE Manobras SET ${Manobra} = ${qtdAcertos} WHERE fkCadastro = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function PostarManobra (idUsuario) {

    var instrucaoSql = `
        SELECT * FROM Manobras WHERE fkCadastro = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function PostarUsuarios () {

    var instrucaoSql = `
        SELECT count(idCadastro) as 'Contador' FROM Cadastro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    InserirResposta,
    AtualizarResposta,
    VerificarResposta,
    kpiResposta,
    ArmazenarManobra,
    VerificarManobra,
    AtualizarManobra,
    PostarManobra,
    PostarUsuarios

};