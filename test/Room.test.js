const assert = require("assert");
const Room = require("../Room");

let r1;

before(()=>{console.log("first time init")})
after(()=>{console.log("final clean up")})
beforeEach(() => { 
    console.log("prepare...")
    r1 = new Room()
})

afterEach(()=>{
    console.log("store result and save to db...and clean...")
})

describe("Test Room", () => {
    it("has an open function", () => {
        //const r1 = new Room()
        assert.strictEqual(r1.open(), "welcome");
    })
    it("has a close function", () => {
        //const r1 = new Room()
        assert.strictEqual(r1.close(), "good bye")
    })
})
describe("Test Room2", () => {
    it("fake something1", () => {
        //const r1 = new Room()
        assert.strictEqual(r1.open(), "welcome");
    })
    it("fake something2", () => {
        //const r1 = new Room()
        assert.strictEqual(r1.close(), "good bye");
    })
})