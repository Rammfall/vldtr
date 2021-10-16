const sum = require("./index")

const index = require("./index")
describe('Sum function', () => {
  test('Sum of 4 and 6 return 10', () => {
    expect(sum(4, 6)).toEqual(10);
  });
});

// @ponicode
describe("index", () => {
    test("0", () => {
        let callFunction = () => {
            index("label_1", -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index(1, "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index(1, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index(0.0, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index(-10, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
