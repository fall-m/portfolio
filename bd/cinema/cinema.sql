-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Ven 24 Novembre 2023 à 15:52
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `cinema`
--

-- --------------------------------------------------------

--
-- Structure de la table `artiste`
--

CREATE TABLE IF NOT EXISTS `artiste` (
  `idRealisateur` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `anneeNaiss` date NOT NULL,
  PRIMARY KEY (`idRealisateur`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `artiste`
--

INSERT INTO `artiste` (`idRealisateur`, `nom`, `prenom`, `anneeNaiss`) VALUES
(1, 'Dwayne', 'Johnson', '1985-11-20'),
(2, 'Lee', 'Bruce', '1992-11-25');

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

CREATE TABLE IF NOT EXISTS `film` (
  `idFilm` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(50) NOT NULL,
  `annee` date NOT NULL,
  `genre` varchar(50) NOT NULL,
  `resume` text NOT NULL,
  `idRealisateur` int(11) NOT NULL,
  `codePays` varchar(50) NOT NULL,
  PRIMARY KEY (`idFilm`),
  KEY `idRealisateur` (`idRealisateur`,`codePays`),
  KEY `codePays` (`codePays`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `film`
--

INSERT INTO `film` (`idFilm`, `titre`, `annee`, `genre`, `resume`, `idRealisateur`, `codePays`) VALUES
(1, 'La bagarre', '2023-11-14', 'action', 'la bagarre dans tous les sens', 1, 'EN'),
(2, 'Rapide et Dangereux', '2023-11-11', 'Action', 'Ca roule vite', 2, 'FR');

-- --------------------------------------------------------

--
-- Structure de la table `internaute`
--

CREATE TABLE IF NOT EXISTS `internaute` (
  `email` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `region` varchar(50) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `internaute`
--

INSERT INTO `internaute` (`email`, `nom`, `prenom`, `region`) VALUES
('cr7officiel@gmail.com', 'Ronaldo', 'Cristiano', 'Portugal'),
('messileo@hotmail.com', 'Messi', 'Lionel', 'Argentine');

-- --------------------------------------------------------

--
-- Structure de la table `notation`
--

CREATE TABLE IF NOT EXISTS `notation` (
  `idNotation` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `idFilm` int(11) NOT NULL,
  `note` int(10) NOT NULL,
  PRIMARY KEY (`idNotation`),
  KEY `idFilm` (`idFilm`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `notation`
--

INSERT INTO `notation` (`idNotation`, `email`, `idFilm`, `note`) VALUES
(1, 'film1@gmail.com', 1, 10),
(2, 'film2@gmail.com', 2, 5);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE IF NOT EXISTS `pays` (
  `codePays` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `langue` varchar(50) NOT NULL,
  PRIMARY KEY (`codePays`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`codePays`, `nom`, `langue`) VALUES
('EN', 'Angleterre', 'Anglais'),
('FR', 'France', 'Francais');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `idRole` int(11) NOT NULL AUTO_INCREMENT,
  `idFilm` int(11) NOT NULL,
  `idRealisateur` int(11) NOT NULL,
  `nomRole` varchar(50) NOT NULL,
  PRIMARY KEY (`idRole`),
  KEY `idFilm` (`idFilm`,`idRealisateur`),
  KEY `idRealisateur` (`idRealisateur`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `role`
--

INSERT INTO `role` (`idRole`, `idFilm`, `idRealisateur`, `nomRole`) VALUES
(1, 1, 1, 'perso principal'),
(2, 2, 2, 'perso secondaire');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `film`
--
ALTER TABLE `film`
  ADD CONSTRAINT `film_ibfk_2` FOREIGN KEY (`codePays`) REFERENCES `pays` (`codePays`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `film_ibfk_1` FOREIGN KEY (`idRealisateur`) REFERENCES `artiste` (`idRealisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `notation`
--
ALTER TABLE `notation`
  ADD CONSTRAINT `notation_ibfk_1` FOREIGN KEY (`idFilm`) REFERENCES `film` (`idFilm`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `role`
--
ALTER TABLE `role`
  ADD CONSTRAINT `role_ibfk_2` FOREIGN KEY (`idRealisateur`) REFERENCES `artiste` (`idRealisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `role_ibfk_1` FOREIGN KEY (`idFilm`) REFERENCES `film` (`idFilm`) ON DELETE CASCADE ON UPDATE CASCADE;
