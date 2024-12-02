CREATE DATABASE GSS;
use GSS;
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
flip360 INT
);

SELECT Nivel, idVideo FROM Nivelamento WHERE fkCadastro = 1 order by idVideo;