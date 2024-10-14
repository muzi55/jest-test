import { sum } from "./toBe";

test("이 테스트는 두개의 값을 더한 값을 반환해야한다.", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toBe(2);
});
