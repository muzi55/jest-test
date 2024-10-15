import { arr, obj } from "./toStrictEqual";

test("객체를 비교하여라(클래스)", () => {
  expect(obj()).not.toBe({ a: "hello" });
  expect(obj()).toStrictEqual({ a: "hello" });
  expect(arr()).toStrictEqual([1, 2, 3]);
  // expect(arr().toBe([1, 2, 3]));
});
