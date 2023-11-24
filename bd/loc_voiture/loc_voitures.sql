-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Ven 24 Novembre 2023 à 14:51
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `loc_voitures`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE IF NOT EXISTS `client` (
  `ncin` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `tel` varchar(50) NOT NULL,
  `date_naissance` date NOT NULL,
  `num_permis` varchar(50) NOT NULL,
  PRIMARY KEY (`ncin`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`ncin`, `email`, `nom`, `prenom`, `adresse`, `tel`, `date_naissance`, `num_permis`) VALUES
('123456789012', 'Blaisou@gmail.com', 'Matuidi', 'Blaise', 'Parc des princes', '07123456789', '1992-11-19', '97216587N9136'),
('123456789054', 'pasdidee@hotmail.com', 'Leo', 'LaPulga', 'Camp Nou', '0654132095', '1990-11-08', '97216587N9200');

-- --------------------------------------------------------

--
-- Structure de la table `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `num_location` int(11) NOT NULL AUTO_INCREMENT,
  `prix_location` float NOT NULL,
  `duree` int(11) NOT NULL,
  `caution` float NOT NULL,
  `date_location` date NOT NULL,
  `immatriculation` varchar(50) NOT NULL,
  `ncin` varchar(50) NOT NULL,
  PRIMARY KEY (`num_location`),
  KEY `immatriculation` (`immatriculation`,`ncin`),
  KEY `ncin` (`ncin`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `location`
--

INSERT INTO `location` (`num_location`, `prix_location`, `duree`, `caution`, `date_location`, `immatriculation`, `ncin`) VALUES
(1, 70, 5, 2000, '2023-11-23', 'AA00ER', '123456789012'),
(2, 50, 3, 1000, '2023-11-30', 'BB11AE', '123456789054');

-- --------------------------------------------------------

--
-- Structure de la table `voiture`
--

CREATE TABLE IF NOT EXISTS `voiture` (
  `immatriculation` varchar(50) NOT NULL,
  `marque` varchar(50) NOT NULL,
  `couleur` varchar(50) NOT NULL,
  `nmb_porte` int(11) NOT NULL,
  `kilometrage` int(11) NOT NULL,
  `boite_vitesse` varchar(50) NOT NULL,
  `energie` varchar(50) NOT NULL,
  `puissance` int(11) NOT NULL,
  PRIMARY KEY (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `voiture`
--

INSERT INTO `voiture` (`immatriculation`, `marque`, `couleur`, `nmb_porte`, `kilometrage`, `boite_vitesse`, `energie`, `puissance`) VALUES
('AA00ER', 'audi', 'rouge', 2, 10000, 'manuelle', 'essence', 400),
('BB11AE', 'Toyota', 'Gris', 4, 200000, 'manuelle', 'essence', 200);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `location`
--
ALTER TABLE `location`
  ADD CONSTRAINT `location_ibfk_2` FOREIGN KEY (`immatriculation`) REFERENCES `voiture` (`immatriculation`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `location_ibfk_1` FOREIGN KEY (`ncin`) REFERENCES `client` (`ncin`) ON DELETE CASCADE ON UPDATE CASCADE;
