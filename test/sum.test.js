import { expect, test, describe } from "vitest";
import { sum } from "../sum";

import { expect } from "vitest";

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum", () => {
  expect(sum(3, 3)).toBe(6);
});

test.todo("Todo");

// my-test.ts

describe.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])("describe object add($a, $b)", ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });
});

async function todosFn({ task }, use) {
  console.log(task.expect);
  await use([1, 2, 3]);
}

const todoStore = [];

export const myTest = test.extend({
  todos: todosFn,
  archive: [],
});

myTest("add items to todos", ({ todos }) => {
  console.log(todos);
  expect(todos.length).toBe(3);

  todos.push(4);
  expect(todos.length).toBe(4);
});

myTest("move items from todos to archive", ({ todos, archive }) => {
  expect(todos.length).toBe(3);
  expect(archive.length).toBe(0);

  archive.push(todos.pop());
  expect(todos.length).toBe(2);
  expect(archive.length).toBe(1);
});
