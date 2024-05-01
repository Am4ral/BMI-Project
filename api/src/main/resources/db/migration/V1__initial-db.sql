-- noinspection SqlNoDataSourceInspectionForFile

-- noinspection SqlDialectInspectionForFile

-- Tabela role
CREATE TABLE role (
    id_role SERIAL PRIMARY KEY,
    authority VARCHAR(20) NOT NULL
);

-- Tabela users
CREATE TABLE users (
    id_users BIGSERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(45) NOT NULL,
    idRole BIGINT,
    FOREIGN KEY (idRole) REFERENCES role(id_role)
);

-- Tabela pacient
CREATE TABLE pacient (
     id_pacient BIGSERIAL PRIMARY KEY,
     name VARCHAR(80) NOT NULL,
     birthdate DATE,
     gender CHAR(1) NOT NULL
);

-- Tabela measurement
CREATE TABLE measurement (
     id_measurement BIGSERIAL PRIMARY KEY,
     height FLOAT NOT NULL,
     weight FLOAT NOT NULL,
     bmi FLOAT,
     measurement_date DATE,
     id_pacient BIGINT,
     FOREIGN KEY (id_pacient) REFERENCES pacient(id_pacient)
);
