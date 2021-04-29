const Chat = artifacts.require("../contracts/Chat.sol")
contract("vanilla test", (accounts) => {
    it("get account", () => {
        console.log("first account:", accounts[0])
    })
    it("get balance", () => { 
        balance = web3.eth.getBalance(accounts[0])
        console.log("balance=",balance)
    })
});
