-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-02-2023 a las 19:40:01
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sanitariabd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `casettes`
--

CREATE TABLE `casettes` (
  `id_muestra` int(11) NOT NULL,
  `fecha` varchar(255) NOT NULL,
  `caracteristicas` varchar(255) NOT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `imagen` blob DEFAULT NULL,
  `qr_casette` varchar(255) NOT NULL,
  `tecnicoIdTecnico` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cortes`
--

CREATE TABLE `cortes` (
  `id_corte` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `qr_corte` varchar(255) NOT NULL,
  `casetteIdMuestra` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestras`
--

CREATE TABLE `muestras` (
  `id_corte` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `tincion` varchar(255) NOT NULL,
  `organo` varchar(255) NOT NULL,
  `qr_muestra` varchar(255) NOT NULL,
  `corteIdCorte` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnicos`
--

CREATE TABLE `tecnicos` (
  `id_tecnico` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `curso` varchar(255) NOT NULL,
  `centro` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `casettes`
--
ALTER TABLE `casettes`
  ADD PRIMARY KEY (`id_muestra`),
  ADD KEY `tecnicoIdTecnico` (`tecnicoIdTecnico`);

--
-- Indices de la tabla `cortes`
--
ALTER TABLE `cortes`
  ADD PRIMARY KEY (`id_corte`),
  ADD KEY `casetteIdMuestra` (`casetteIdMuestra`);

--
-- Indices de la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD PRIMARY KEY (`id_corte`),
  ADD KEY `corteIdCorte` (`corteIdCorte`);

--
-- Indices de la tabla `tecnicos`
--
ALTER TABLE `tecnicos`
  ADD PRIMARY KEY (`id_tecnico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `casettes`
--
ALTER TABLE `casettes`
  MODIFY `id_muestra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cortes`
--
ALTER TABLE `cortes`
  MODIFY `id_corte` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `muestras`
--
ALTER TABLE `muestras`
  MODIFY `id_corte` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tecnicos`
--
ALTER TABLE `tecnicos`
  MODIFY `id_tecnico` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `casettes`
--
ALTER TABLE `casettes`
  ADD CONSTRAINT `casettes_ibfk_1` FOREIGN KEY (`tecnicoIdTecnico`) REFERENCES `tecnicos` (`id_tecnico`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `cortes`
--
ALTER TABLE `cortes`
  ADD CONSTRAINT `cortes_ibfk_1` FOREIGN KEY (`casetteIdMuestra`) REFERENCES `casettes` (`id_muestra`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD CONSTRAINT `muestras_ibfk_1` FOREIGN KEY (`corteIdCorte`) REFERENCES `cortes` (`id_corte`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;







commit;