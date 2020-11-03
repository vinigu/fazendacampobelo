-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.32-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `FUNCIONARIO`
--

DROP TABLE IF EXISTS `FUNCIONARIO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FUNCIONARIO` (
  `cod_func` smallint(6) NOT NULL,
  `nome_func` varchar(45) COLLATE utf8_bin NOT NULL,
  `dta_adm` date NOT NULL,
  `usuario_func` varchar(10) COLLATE utf8_bin NOT NULL,
  `senha_func` varchar(10) COLLATE utf8_bin NOT NULL,
  `dta_demis` date DEFAULT NULL,
  `cod_permis` tinyint(4) NOT NULL,
  `cod_setor` tinyint(4) NOT NULL,
  PRIMARY KEY (`cod_func`),
  KEY `fk_FUNCIONARIO_PERMISSAO_idx` (`cod_permis`),
  KEY `fk_FUNCIONARIO_SETOR1_idx` (`cod_setor`),
  CONSTRAINT `fk_FUNCIONARIO_PERMISSAO` FOREIGN KEY (`cod_permis`) REFERENCES `PERMISSAO` (`cod_permis`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_FUNCIONARIO_SETOR1` FOREIGN KEY (`cod_setor`) REFERENCES `SETOR` (`cod_setor`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FUNCIONARIO`
--

LOCK TABLES `FUNCIONARIO` WRITE;
/*!40000 ALTER TABLE `FUNCIONARIO` DISABLE KEYS */;
INSERT INTO `FUNCIONARIO` VALUES (1,'Vinicius','2020-07-20','Teste','101010',NULL,1,1);
/*!40000 ALTER TABLE `FUNCIONARIO` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-03 20:58:21
