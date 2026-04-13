CREATE DATABASE IF NOT EXISTS biblioteca_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE biblioteca_db;

CREATE TABLE prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombreUsuario VARCHAR(100) NOT NULL,
    libro VARCHAR(255) NOT NULL,
    fechaPrestamo DATE NOT NULL
);