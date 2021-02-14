const add = require("./add");

test("examples/commonjs: add two numbers", () => {
  expect(add(3, 4)).toBe(7);
});
