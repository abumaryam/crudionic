DROP TABLE IF EXISTS `datateman`;
CREATE TABLE `datateman` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(30) NOT NULL,
  `alamat` tinytext NOT NULL,
  `spesialis` varchar(50) NOT NULL,
  `fb` varchar(100) NOT NULL,
  `icon` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
