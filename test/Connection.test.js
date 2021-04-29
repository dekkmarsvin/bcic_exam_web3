const ganache = require("ganache-cli")
const W3 = require("web3")
const web3 = new W3(ganache.provider())
beforeEach(() => {
    console.log("get account from ethereum")
    web3.eth.getAccounts().then((fetchAccounts)=>{
        console.log(fetchAccounts)
    })
})
describe("Chat Test", () => {
    it("deploy a contract", () => { 
        console.log("All right, I already got the accounts?")
    })
})