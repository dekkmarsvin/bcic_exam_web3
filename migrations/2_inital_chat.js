const Chat = artifacts.require("Chat");

module.exports = function(deployer) {
    deployer.deploy(Chat,"deploy from truffle");
    //deployer.deploy(Chat);
}