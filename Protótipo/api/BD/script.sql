drop database if exists pedidos;
create database pedidos CHARSET=UTF8 COLLATE utf8_general_ci ;
use pedidos;

Create table Entrega(
    numeroDoPedido INT primary key not null auto_increment,
    nomeDoProduto varchar(50) not null,
    lotes varchar(30) not null,
    quantidade float(10,3) not null,
    peso float(10,3) not null
);

CREATE TABLE Etiquetas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    numeroDoPedido INT NOT NULL,
    idEtiqueta VARCHAR(50) NOT NULL,
    FOREIGN KEY (numeroDoPedido) REFERENCES Entrega(numeroDoPedido)
);

-- Add informações


insert into Entrega (nomeDoProduto, lotes, quantidade, peso) VALUES 
('Balde 12L', '1,2 e 3', '40.000', 100.230),
('Balde 20L', '4', '10.000', 50.100),
('Caixa Organizadora 5L', '5', '3.000', 1.263),
('Garrafa Térmica 1L', '6,7', '25.000', 30.500),
('Caixa de Ferramentas', '8', '15.000', 2.500),
('Organizador de Mesa', '9', '20.000', 0.800),
('Balde 5L', '10', '50.000', 40.000),
('Tampas para Baldes', '11', '100.000', 5.000),
('Saco de Lixo 100L', '12', '75.000', 100.000),
('Escorredor de Louças', '13', '30.000', 1.200),
('Protetor de Sofá', '14', '5.000', 3.000);

INSERT INTO Etiquetas (numeroDoPedido, idEtiqueta) VALUES 
(1, 'etiqueta-0'), 
(2, 'etiqueta-1'), 
(3, 'etiqueta-2'); 

select * from entrega;
select * from etiquetas;

SELECT e.numeroDoPedido, e.nomeDoProduto, et.idEtiqueta 
FROM Entrega e
JOIN Etiquetas et ON e.numeroDoPedido = et.numeroDoPedido;
