CREATE DATABASE GSS;
USE GSS;

CREATE TABLE Cadastro(
idCadastro INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR (100),
Email VARCHAR(100),
cpf VARCHAR(11),
Senha VARCHAR(50)
);

CREATE TABLE Nivelamento(
idNivelamento INT PRIMARY KEY AUTO_INCREMENT,
Nivel VARCHAR(30),
fkCadastro int,
constraint fkNivelamentoCadastro FOREIGN KEY (fkCadastro) REFERENCES Cadastro(idCadastro) 
);
