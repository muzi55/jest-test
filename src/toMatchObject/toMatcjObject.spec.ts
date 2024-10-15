import { obj } from "./toMatchObject";

test("객체를 비교하여라", () => {
  //   expect(obj('hello')).not.toBe({ a: "hello" });
  expect(obj("hello")).toMatchObject({ a: "hello" });
});
