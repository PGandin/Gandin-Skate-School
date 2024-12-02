use GSS;
describe Nivelamento;

USE GSS;
show tables;
CREATE TABLE Cadastro(
idCadastro INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR (100),
Email VARCHAR(100),
cpf VARCHAR(11),
Senha VARCHAR(50)
);

CREATE TABLE Nivelamento(
idNivelamento INT AUTO_INCREMENT,
Nivel VARCHAR(30),
fkCadastro int,
idVideo INT,
constraint fkNivelamentoCadastro FOREIGN KEY (fkCadastro) REFERENCES Cadastro(idCadastro),
PRIMARY KEY (idNivelamento, idVideo) 
);

CREATE TABLE Manobras(
idManobra INT PRIMARY KEY auto_increment,
ollie INT,
varial INT,
olliefront INT,
flip INT,
fakieollie INT,
fakiefront INT,
varial360 INT,
ollieback INT,
flip360 INT,
fkCadastro INT,
Constraint fkManobrasCadastro FOREIGN KEY (fkCadastro) REFERENCES Cadastro(idCadastro)
);
SELECT * FROM Manobras;

INSERT INTO Manobras (ollie, varial, olliefront, flip, fakieollie, fakiefront, varial360, ollieback, flip360, fkCadastro)VALUES
(1, 3, 4, 6, 7, 7, 8, 9, 1, 1);


SELECT Nivel, idVideo FROM Nivelamento WHERE fkCadastro = 1 order by idVideo;
