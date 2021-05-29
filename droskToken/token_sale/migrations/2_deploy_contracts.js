const drosToken = artifacts.require("drosToken.sol");

module.exports = function (deployer) {
  deployer.deploy(drosToken);
};