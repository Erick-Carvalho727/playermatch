CREATE DATABASE IF NOT EXISTS playermatch;
USE playermatch;

CREATE TABLE usuario (
  id int NOT NULL AUTO_INCREMENT,
  login varchar (100) NOT NULL,
  email varchar(100) NOT NULL,
  senha varchar (100) NOT NULL,
  token char(32) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY login_UN (login)
);
