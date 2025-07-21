import { test } from "microbit-test-framework";
import * as codecraftbit from "../codecraftbit"; // Adjust the path if needed

// Example: test for a function named add in codecraftbit.ts
test("codecraftbit.add adds numbers", () => {
  let result = codecraftbit.add(2, 3);
  if (result !== 5) {
    throw new Error("add function failed");
  }
});

// Add more tests for other functions from codecraftbit.ts

// Example: test for a function named subtract with @block annotation
test("codecraftbit.subtract subtracts numbers", () => {
  let result = codecraftbit.subtract(5, 2);
  if (result !== 3) {
    throw new Error("subtract function failed");
  }
});

// Example: test for a function named multiply with @block annotation
test("codecraftbit.multiply multiplies numbers", () => {
  let result = codecraftbit.multiply(4, 3);
  if (result !== 12) {
    throw new Error("multiply function failed");
  }
});

// Example: test for a function named divide with @block annotation
test("codecraftbit.divide divides numbers", () => {
  let result = codecraftbit.divide(10, 2);
  if (result !== 5) {
    throw new Error("divide function failed");
  }
});

// Example: test for a function named isEven with @block annotation
test("codecraftbit.isEven returns true for even numbers", () => {
  let result = codecraftbit.isEven(4);
  if (result !== true) {
    throw new Error("isEven failed for even number");
  }
});

test("codecraftbit.isEven returns false for odd numbers", () => {
  let result = codecraftbit.isEven(5);
  if (result !== false) {
    throw new Error("isEven failed for odd number");
  }
});
