const functions = require("./index");

test("Formatin numbers to phon number", () => {
  expect(functions.formatPhone("123456789")).toBe("123 456 789");
});
test("Formatin numbers to phon number", () => {
  expect(functions.formatPostCode("12345")).toBe("12-345");
});
