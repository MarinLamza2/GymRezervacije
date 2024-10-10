use master;
go
drop database if exists gym; 
go
create database gym collate Croatian_CI_AS;
go
use gym;


create table korisnici(
id int not null primary key identity (1,1),
ime varchar (50) not null,
prezime varchar (50) not null,
brojtelefona varchar(50) not null,
adresa varchar (50),
grupa int not null
) ;

create table grupe(
id int not null primary key identity (1,1),
naziv varchar (50) not null,
zaposlenik varchar (50),
)
;
 


alter table korisnici add foreign key (grupa) references grupe (id);



insert into grupe (naziv,zaposlenik) values
('G1','pero'),
('G2','pero'),
('G3','pero');

insert into korisnici ( ime, prezime, brojtelefona, adresa, grupa) values
('Marin', 'Ivankvoic', '0993332134', 'Vijenac Medvjednice 3', 1),
('Ivan', 'Markovic',  '0953132444', 'Velebitska 5', 1),
('Sven', 'Jurkovic', '0913222987', 'Kopska 14', 3);