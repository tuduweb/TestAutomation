const Migrations = artifacts.require("./Migrations.sol");
const MyTest = artifacts.require("./BlockchainNoteService.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyTest);
};