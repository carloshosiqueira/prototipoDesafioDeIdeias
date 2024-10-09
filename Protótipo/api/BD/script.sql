DROP DATABASE IF EXISTS pedidos;
CREATE DATABASE pedidos CHARSET=UTF8 COLLATE utf8_general_ci;
USE pedidos;

CREATE TABLE Entrega (
    numeroDoPedido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nomeDoProduto VARCHAR(50) NOT NULL,
    lotes VARCHAR(30) NOT NULL,
    quantidade FLOAT NOT NULL,
    peso FLOAT NOT NULL,
    ruc VARCHAR(14) NOT NULL UNIQUE,
    cnpj VARCHAR(18) NOT NULL UNIQUE
);

CREATE TABLE Etiquetas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    numeroDoPedido INT NOT NULL,
    idEtiqueta VARCHAR(50) NOT NULL,
    ruc VARCHAR(14) NOT NULL,
    cnpj VARCHAR(18) NOT NULL,
    FOREIGN KEY (numeroDoPedido) REFERENCES Entrega(numeroDoPedido)
);

-- Adicionando informações
INSERT INTO Entrega (nomeDoProduto, lotes, quantidade, peso, cnpj, ruc) VALUES 
('Balde 12L', '1,2 e 3', 40.000, 100.230, '48.839.872/0001-74', '80082675-2'),
('Balde 20L', '4', 10.000, 50.100, '48.839.872/0001-74', '80033748-4'),
('Caixa Organizadora 5L', '5', 3.000, 1.263, '48.839.872/0001-74', '80007444-0'),
('Garrafa Térmica 1L', '6,7', 25.000, 30.500, '48.839.872/0001-74', '80082675-2'),
('Caixa de Ferramentas', '8', 15.000, 2.500, '48.839.872/0001-74', '80033748-4'),
('Organizador de Mesa', '9', 20.000, 0.800, '48.839.872/0001-74', '80082675-2'),
('Balde 5L', '10', 50.000, 40.000, '48.839.872/0001-74', '80007444-0'),
('Tampas para Baldes', '11', 100.000, 5.000, '48.839.872/0001-74', '80007444-0'),
('Saco de Lixo 100L', '12', 75.000, 100.000, '48.839.872/0001-74', '80033748-4'),
('Escorredor de Louças', '13', 30.000, 1.200, '48.839.872/0001-74', '80033748-4'),
('Protetor de Sofá', '14', 5.000, 3.000, '48.839.872/0001-74', '80082675-2');

INSERT INTO Etiquetas (numeroDoPedido, idEtiqueta, ruc, cnpj) VALUES 
(1, 'etiqueta-0', '80082675-2', '48.839.872/0001-74'), 
(2, 'etiqueta-1', '80033748-4', '48.839.872/0001-74'), 
(3, 'etiqueta-2', '80007444-0', '48.839.872/0001-74'); 

SELECT * FROM Entrega;
SELECT * FROM Etiquetas;

SELECT e.numeroDoPedido, e.nomeDoProduto, et.idEtiqueta 
FROM Entrega e
JOIN Etiquetas et ON e.numeroDoPedido = et.numeroDoPedido;
