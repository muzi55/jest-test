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

## 테스트 코드를 짜면서 유심 해야하는 상황

테스트 코드를 작성할 때 <br />
도움이 되는 테스트, 명확한 테스트를 하는 것이 중요하다.

```ts
// ex
test("배열을 비교하기", () => {
  // 해당 배열을 비교하는 테스트
  expect([1, 2, 3]).not.toBe([1, 2, 3]);
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
});
```

위의 테스트 코드를 보게 되면 해당 테스트는 배열을 비교하기 위해 사용하는 테스트 코드임을 분명히 알 수 있다.

이러한 도움이 되는 테스트 코드를 작성해야 한다.
