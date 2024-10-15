# jest-test 공부

## toBe

값의 비교는 `toBe` 로 진행한다.

```ts
// code
const sum = (a: number, b: number): number => {
  return a + b;
};
```

```ts
// test
test("두 값의 합을 반환해라", () => {
  spec(sum(3, 5).toBe(8));
});
```

<br />
<br />
<br />

## toStric

객체, 배열 은 `toStricEqual` 을 사용하여 비교한다.

```tsx
const obj = () => {
  return { a: "hello" };
};
```

```tsx
test("객체의 값을 비교하여라", () => {
  spec(obj()).toStricEqual({ a: "hello" });
});
```

<br />
<br />
<br />

## toMatchObject

클래스 가 다른 경우 `toMatchObject` 를 사용한다.

```ts
class TestObj {
  a: string;
  constructor(str) {
    this.a = str;
  }
}
export function obj(str: string) {
  return new TestObj(str);
}
```

```ts
import { obj } from "./toMatchObject";

test("객체를 비교하여라", () => {
  //   expect(obj('hello')).not.toBe({ a: "hello" });
  expect(obj("hello")).toMatchObject({ a: "hello" });
});
```
