const functions = require("./index");

test("Formatin numbers to phon number", () => {
  expect(functions.formatPhone("123456789")).toBe("123 456 789");
});
