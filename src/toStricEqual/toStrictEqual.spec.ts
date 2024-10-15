import { arr, obj } from "./toStrictEqual";

test("객체를 비교하여라", () => {
  expect(obj()).not.toBe({ a: "hello" });
  expect(obj()).toStrictEqual({ a: "hello" });
  expect(arr()).toStrictEqual([1, 2, 3]);
  // expect(arr().toBe([1, 2, 3]));
});

test("배열을 비여하여라", () => {
  expect(arr()).not.toBe([1, 2, 3]);
  expect(arr()).toStrictEqual([1, 2, 3]);
  // expect([1, 2, 3]).toBe([1, 2, 3]);
});
