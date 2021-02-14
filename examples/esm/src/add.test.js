import { add } from "./add";

test("examples/esm: add two numbers", () => {
  expect(add(3, 4)).toBe(7);
});
