const Chat = artifacts.require("../contracts/Chat.sol")
contract("vanilla test", (accounts) => {
    it("get account", () => {
        console.log("first account:", accounts[0])
    })
    it("get first balance", async () => { 
        const balance = await web3.eth.getBalance(accounts[0])
        console.log("balance=",balance)
    })
    it("get second balance", async () => { 
        const balance = await web3.eth.getBalance(accounts[1])
        console.log("second balance=",balance)
    })
});