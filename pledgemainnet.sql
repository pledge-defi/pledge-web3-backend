/*
 Navicat Premium Data Transfer

 Source Server         : pledge
 Source Server Type    : MySQL
 Source Server Version : 100332
 Source Host           : 54.67.12.175:9521
 Source Schema         : pledgemainnet

 Target Server Type    : MySQL
 Target Server Version : 100332
 File Encoding         : 65001

 Date: 10/02/2022 14:00:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
BEGIN;
INSERT INTO `admin` VALUES (1, 'admin', '$2b$12$V4n31JgG1ybX1NuAUgp6keYw5eAyCrNQ5TAl/FyRtgBtF9/uf1Q6S');
COMMIT;

-- ----------------------------
-- Table structure for poolbases
-- ----------------------------
DROP TABLE IF EXISTS `poolbases`;
CREATE TABLE `poolbases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `settle_time` varchar(100) DEFAULT NULL,
  `end_time` varchar(100) DEFAULT NULL,
  `interest_rate` varchar(100) DEFAULT NULL,
  `max_supply` varchar(100) DEFAULT NULL,
  `lend_supply` varchar(100) DEFAULT NULL,
  `borrow_supply` varchar(100) DEFAULT NULL,
  `martgage_rate` varchar(100) DEFAULT NULL,
  `lend_token` varchar(100) DEFAULT NULL,
  `borrow_token` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `jp_coin` varchar(100) DEFAULT NULL,
  `sp_coin` varchar(100) DEFAULT NULL,
  `auto_liquidate_threshold` varchar(100) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `pool_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='poolbase';

-- ----------------------------
-- Records of poolbases
-- ----------------------------
BEGIN;
INSERT INTO `poolbases` VALUES (1, '1643558400', '1643817600', '5000000', '100000000000000000000000', '0', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0', '0xEC446F606bF543511080031A1d839842056eDF24', '0x3f9b13Bc64D6Da2b56A20d83755Cf2D06430ff7D', '20000000', '2022-01-27', '2022-01-27', 1);
INSERT INTO `poolbases` VALUES (2, '1644005970', '1644265178', '4000000', '100000000000000000000000', '0', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0', '0x8Dbe02eB53c409756Ca250137996F1ceaFAf3557', '0xaFAbf67BD0c1FB875F17DF9063328982A2538a7c', '100000000', '2022-01-28', '2022-01-28', 2);
INSERT INTO `poolbases` VALUES (3, '1643402775', '1643402968', '5000000', '100000000000000000000000', '0', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0', '0x43C6195cFBEfDFfb98e8aA043c7AEeE83EdB1e24', '0x08622e15fa321b66D55846EDAa1f0912432ea6ad', '30000000', '2022-01-28', '2022-01-28', 3);
INSERT INTO `poolbases` VALUES (4, '1644018452', '1644094063', '6000000', '10000000000000000000000', '0', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0', '0x26B99638c525296B04a0150044A9e23D61b95a3b', '0x2FaC08e5Ff93CEdb5AA2678c35B885A23454B585', '20000000', '2022-01-28', '2022-01-28', 4);
INSERT INTO `poolbases` VALUES (5, '1644014387', '1644360003', '7000000', '100000000000000000000000', '0', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0', '0x4dd305aCC09bc180Ac14fA24F0895BE6f7065A44', '0x4D63B40FaC1254AeF2Ed43e05D02c6DaF215208A', '20000000', '2022-01-31', '2022-01-31', 5);
INSERT INTO `poolbases` VALUES (6, '1644638402', '1645243208', '4000000', '10000000000000000000000', '0', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0', '0xe268c022E80F42DdFDfcdBdf5BB0Df0b77e53CcC', '0xB1A31db22655c74dc0886C2E6E44Bf2cC3539Ce1', '20000000', '2022-02-05', '2022-02-05', 6);
INSERT INTO `poolbases` VALUES (7, '1645244011', '1645848818', '3000000', '10000000000000000000000', '0', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0', '0xDa2e5b8484e8A760615027d8721458D794f64bbB', '0xaa3621852264F91Be9d9450D8f5B06C97DDDEF47', '20000000', '2022-02-05', '2022-02-05', 7);
INSERT INTO `poolbases` VALUES (8, '1645244304', '1645935511', '5000000', '10000000000000000000000', '0', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0', '0x80C4b556Df7CEEd97bE4F396dfaB68244e7877AC', '0xaD3fC9593b66617Cbaf9154deF567657302eE907', '20000000', '2022-02-05', '2022-02-05', 8);
COMMIT;

-- ----------------------------
-- Table structure for pooldata
-- ----------------------------
DROP TABLE IF EXISTS `pooldata`;
CREATE TABLE `pooldata` (
  `pooldatum_id` int(11) DEFAULT NULL,
  `settle_amount_lend` varchar(100) DEFAULT NULL,
  `settle_amount_borrow` varchar(100) DEFAULT NULL,
  `finish_amount_lend` varchar(100) DEFAULT NULL,
  `finish_amount_borrow` varchar(100) DEFAULT NULL,
  `liquidation_amoun_lend` varchar(100) DEFAULT NULL,
  `liquidation_amoun_borrow` varchar(100) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_ID` FOREIGN KEY (`id`) REFERENCES `poolbases` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='pooldata';

-- ----------------------------
-- Records of pooldata
-- ----------------------------
BEGIN;
INSERT INTO `pooldata` VALUES (1, '0', '0', '0', '0', '0', '0', '2022-01-27', '2022-01-27', 1);
INSERT INTO `pooldata` VALUES (2, '0', '0', '0', '0', '0', '0', '2022-01-28', '2022-01-28', 2);
INSERT INTO `pooldata` VALUES (3, '0', '0', '0', '0', '0', '0', '2022-01-28', '2022-01-28', 3);
INSERT INTO `pooldata` VALUES (4, '0', '0', '0', '0', '0', '0', '2022-01-28', '2022-01-28', 4);
INSERT INTO `pooldata` VALUES (5, '0', '0', '0', '0', '0', '0', '2022-01-31', '2022-01-31', 5);
INSERT INTO `pooldata` VALUES (6, '0', '0', '0', '0', '0', '0', '2022-02-05', '2022-02-05', 6);
INSERT INTO `pooldata` VALUES (7, '0', '0', '0', '0', '0', '0', '2022-02-05', '2022-02-05', 7);
INSERT INTO `pooldata` VALUES (8, '0', '0', '0', '0', '0', '0', '2022-02-05', '2022-02-05', 8);
COMMIT;

-- ----------------------------
-- Table structure for token_names
-- ----------------------------
DROP TABLE IF EXISTS `token_names`;
CREATE TABLE `token_names` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `symbol` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='token_names';

-- ----------------------------
-- Records of token_names
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
