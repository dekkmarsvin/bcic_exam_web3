const ganache = require("ganache-cli")
const W3 = require("web3")
const web3 = new W3(ganache.provider())
let fetchAccounts;
beforeEach(async () => {
    console.log("get account from ethereum")
    fetchAccounts = await web3.eth.getAccounts()
    console.log("beforeEach finished")
})
describe("Chat Test", () => {
    it("get all accounts", () => {
        console.log("is it an array?", Array.isArray(fetchAccounts))
        console.log("the type is==>", typeof fetchAccounts)
        console.log(fetchAccounts)
    })
    it("get first account", () => {
        console.log(fetchAccounts[0])
    })
})
describe("type test", () => {
    it("int is array?", () => {
        const x = 5
        console.log("is it an array?", Array.isArray(x))
    })
})
