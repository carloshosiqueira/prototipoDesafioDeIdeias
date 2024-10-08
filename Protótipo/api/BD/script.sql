drop database if exists pedidos;
create database pedidos CHARSET=UTF8 COLLATE utf8_general_ci ;
use pedidos;

Create table Entrega(
    numeroDoPedido integer primary key not null auto_increment,
    nomeDoProduto varchar(50) not null,
    lotes varchar(30) not null,
    quantidade float(10,3) not null,
    peso float(10,3) not null
);


-- Add informações

insert into Entrega (nomeDoProduto, lotes, quantidade, peso) VALUES 
('Balde 12L', '1,2 e 3', '40.000', 100.230),
('Balde 20L', '4', '10.000', 50.100),
('Caixa Organizadora 5L', '5', '3.000', 1.263);

select * from entrega;