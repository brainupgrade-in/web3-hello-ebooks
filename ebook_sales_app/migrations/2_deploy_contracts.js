const EbookSales = artifacts.require("EbookSales");

module.exports = function(deployer) {
  deployer.deploy(EbookSales);
};
