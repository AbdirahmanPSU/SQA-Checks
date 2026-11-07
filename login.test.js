const test = require("node:test");
const assert = require("node:assert");
const { validateLogin } = require("./login.js");

test("rejects an empty username", () => {
  assert.strictEqual(validateLogin("", "password123"), false);
});

test("rejects a short password", () => {
  assert.strictEqual(validateLogin("ali", "abc"), false);
});

test("accepts a password with exactly 8 characters", () => {
  assert.strictEqual(validateLogin("ali", "12345678"), true);
});

test("accepts a normal valid login", () => {
  assert.strictEqual(validateLogin("ali", "password123"), true);
});
