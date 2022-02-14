/*
 Navicat Premium Data Transfer

 Source Server         : pledgemainnet
 Source Server Type    : MySQL
 Source Server Version : 50734
 Source Host           : 192.168.0.106:3306
 Source Schema         : pledgemainnet

 Target Server Type    : MySQL
 Target Server Version : 50734
 File Encoding         : 65001

 Date: 14/02/2022 09:09:55
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
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
BEGIN;
INSERT INTO `admin` VALUES (1, 'admin', '$2b$12$V4n31JgG1ybX1NuAUgp6keYw5eAyCrNQ5TAl/FyRtgBtF9/uf1Q6S');
COMMIT;

-- ----------------------------
-- Table structure for multi_sign
-- ----------------------------
DROP TABLE IF EXISTS `multi_sign`;
CREATE TABLE `multi_sign` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `p_name` varchar(255) DEFAULT NULL,
  `sp_token` varchar(255) DEFAULT NULL,
  `jp_name` varchar(255) DEFAULT NULL,
  `jp_token` varchar(255) DEFAULT NULL,
  `sp_address` varchar(255) DEFAULT NULL,
  `jp_address` varchar(255) DEFAULT NULL,
  `sp_hash` varchar(255) DEFAULT NULL,
  `jp_hash` varchar(255) DEFAULT NULL,
  `multi_sign_account` varchar(255) DEFAULT NULL,
  `chain_id` int(10) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of multi_sign
-- ----------------------------
BEGIN;
INSERT INTO `multi_sign` VALUES (4, 'string765', 'string6666', 'string', 'string999', 'string', 'string', 'string', 'string', '[\"string1\",\"string2\"]', 97, '2022-02-12', '2022-02-13');
INSERT INTO `multi_sign` VALUES (5, 'string7', 'string67', 'string', 'string9997', 'string8', 'string7', 'string7', 'string7', '[\"string1\",\"string2\"]', 56, '2022-02-12', '2022-02-13');
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
  `borrow_token_info` varchar(255) DEFAULT NULL,
  `lend_token_info` varchar(255) DEFAULT NULL,
  `chain_id` varchar(20) DEFAULT '56',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=431 DEFAULT CHARSET=utf8 COMMENT='poolbase';

-- ----------------------------
-- Records of poolbases
-- ----------------------------
BEGIN;
INSERT INTO `poolbases` VALUES (423, '1643558400', '1643817600', '5000000', '100000000000000000000000', '20000000000000000000', '506810558736854', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '2', '0xEC446F606bF543511080031A1d839842056eDF24', '0x3f9b13Bc64D6Da2b56A20d83755Cf2D06430ff7D', '20000000', '2022-02-12', '2022-02-12', 1, NULL, NULL, '56');
INSERT INTO `poolbases` VALUES (424, '1644005970', '1644265178', '4000000', '100000000000000000000000', '65000000000000000000', '1070946941727608', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '3', '0x8Dbe02eB53c409756Ca250137996F1ceaFAf3557', '0xaFAbf67BD0c1FB875F17DF9063328982A2538a7c', '100000000', '2022-02-12', '2022-02-12', 2, NULL, NULL, '56');
INSERT INTO `poolbases` VALUES (425, '1643402775', '1643402968', '5000000', '100000000000000000000000', '10000000000000000000', '962887635827337', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '2', '0x43C6195cFBEfDFfb98e8aA043c7AEeE83EdB1e24', '0x08622e15fa321b66D55846EDAa1f0912432ea6ad', '30000000', '2022-02-12', '2022-02-12', 3, NULL, NULL, '56');
INSERT INTO `poolbases` VALUES (426, '1644018452', '1644094063', '6000000', '10000000000000000000000', '51000000000000000000', '1395716938127436', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '2', '0x26B99638c525296B04a0150044A9e23D61b95a3b', '0x2FaC08e5Ff93CEdb5AA2678c35B885A23454B585', '20000000', '2022-02-12', '2022-02-12', 4, NULL, NULL, '56');
INSERT INTO `poolbases` VALUES (427, '1644014387', '1644360003', '7000000', '100000000000000000000000', '1000000000000000000', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '4', '0x4dd305aCC09bc180Ac14fA24F0895BE6f7065A44', '0x4D63B40FaC1254AeF2Ed43e05D02c6DaF215208A', '20000000', '2022-02-12', '2022-02-12', 5, NULL, NULL, '56');
INSERT INTO `poolbases` VALUES (428, '1644638402', '1645243208', '4000000', '10000000000000000000000', '30000000000000000000', '960262149375210', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '1', '0xe268c022E80F42DdFDfcdBdf5BB0Df0b77e53CcC', '0xB1A31db22655c74dc0886C2E6E44Bf2cC3539Ce1', '20000000', '2022-02-12', '2022-02-12', 6, NULL, NULL, '56');
INSERT INTO `poolbases` VALUES (429, '1645244011', '1645848818', '3000000', '10000000000000000000000', '20000000000000000000', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0', '0xDa2e5b8484e8A760615027d8721458D794f64bbB', '0xaa3621852264F91Be9d9450D8f5B06C97DDDEF47', '20000000', '2022-02-12', '2022-02-12', 7, NULL, NULL, '56');
INSERT INTO `poolbases` VALUES (430, '1645244304', '1645935511', '5000000', '10000000000000000000000', '0', '0', '200000000', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0', '0x80C4b556Df7CEEd97bE4F396dfaB68244e7877AC', '0xaD3fC9593b66617Cbaf9154deF567657302eE907', '20000000', '2022-02-12', '2022-02-12', 8, NULL, NULL, '56');
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
  `chain_id` varchar(20) DEFAULT '56',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8 COMMENT='pooldata';

-- ----------------------------
-- Records of pooldata
-- ----------------------------
BEGIN;
INSERT INTO `pooldata` VALUES (1, '9622480365307393626', '506810558736854', '9701569167251517196', '246056897508601', '0', '0', '2022-02-12', '2022-02-12', 94, '56');
INSERT INTO `pooldata` VALUES (2, '21784681613977652294', '1070946941727608', '0', '0', '21963739279576028628', '527106498724037', '2022-02-12', '2022-02-12', 95, '56');
INSERT INTO `pooldata` VALUES (3, '10000000000000000000', '531338857291495', '10000061100000000000', '263993253351156', '0', '0', '2022-02-12', '2022-02-12', 96, '56');
INSERT INTO `pooldata` VALUES (4, '28574755457698650835', '1395716938127436', '28643266291384029120', '700751333610913', '0', '0', '2022-02-12', '2022-02-12', 97, '56');
INSERT INTO `pooldata` VALUES (5, '1000000000000000000', '0', '0', '0', '0', '0', '2022-02-12', '2022-02-12', 98, '56');
INSERT INTO `pooldata` VALUES (6, '20332950849176712243', '960262149375210', '0', '0', '0', '0', '2022-02-12', '2022-02-12', 99, '56');
INSERT INTO `pooldata` VALUES (7, '0', '0', '0', '0', '0', '0', '2022-02-12', '2022-02-12', 100, '56');
INSERT INTO `pooldata` VALUES (8, '0', '0', '0', '0', '0', '0', '2022-02-12', '2022-02-12', 101, '56');
COMMIT;

-- ----------------------------
-- Table structure for token_info
-- ----------------------------
DROP TABLE IF EXISTS `token_info`;
CREATE TABLE `token_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `symbol` varchar(100) DEFAULT NULL,
  `logo` varchar(150) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `token` varchar(60) DEFAULT NULL,
  `chain_id` varchar(20) DEFAULT '56',
  `abi_file_exist` int(2) unsigned DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of token_info
-- ----------------------------
BEGIN;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='token_names';

-- ----------------------------
-- Records of token_names
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
