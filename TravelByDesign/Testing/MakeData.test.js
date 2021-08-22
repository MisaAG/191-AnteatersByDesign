const rewire = require("rewire")
const MakeData = rewire("./MakeData")
const getUsers = MakeData.__get__("getUsers")
const writeNewPost = MakeData.__get__("writeNewPost")
const getCommand = MakeData.__get__("getCommand")
// @ponicode
describe("getUsers", () => {
    test("0", async () => {
        await getUsers()
    })
})

// @ponicode
describe("writeNewPost", () => {
    test("0", () => {
        let callFunction = () => {
            writeNewPost({ userid: "test_user" }, "Product Accountability Executive", true, "https://api.telegram.org/", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            writeNewPost({ userid: "b'nXQpVsglEGFJgfK'" }, "Senior Brand Assistant", true, "http://www.example.com/route/123?foo=bar", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            writeNewPost({ userid: "test_user" }, "Product Accountability Executive", true, "http://base.com", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            writeNewPost({ userid: "A1234" }, "Principal Implementation Strategist", false, "http://www.croplands.org/account/confirm?t=", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            writeNewPost({ userid: "c466a48309794261b64a4f02cfcc3d64" }, "Principal Implementation Strategist", true, "http://base.com", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            writeNewPost(undefined, undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getCommand", () => {
    test("0", () => {
        let callFunction = () => {
            getCommand()
        }
    
        expect(callFunction).not.toThrow()
    })
})
