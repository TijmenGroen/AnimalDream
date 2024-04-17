CREATE TABLE `animaldream_dev`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `hashedPassword` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`iduser`));