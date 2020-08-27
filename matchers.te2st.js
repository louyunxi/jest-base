/**
 * @作者 Lucifer-ye
 * @创建时间 2020/8/16 0016 17:55
 */
// test('测试10与10相匹配', () => {
//   // toBe 匹配器 matchers
//   // object is  ===
//   const a = { one: 1 };
//   // expect(10).toBe(10);
//   expect(a).toBe({ one: 1});
// });

// test('toEqual 匹配器', () => {
//   // toEqual 匹配器 只匹配内容
//   // const a = { one: 1 };
//   // expect(a).toEqual({ one: 2});
//   const a = null;
//   expect(a).toBeNull();
// });

/** 真假有关的匹配器 **/
// test('toBeUndefined 匹配器', () => {
//   // toEqual 匹配器 只匹配内容
//   const a = undefined;
//   expect(a).toBeUndefined();
// });

// test('toBeDefined 匹配器', () => {
//   const a = 'fff';
//   expect(a).toBeDefined();
// });

// test('toBeTruthy 匹配器', () => {
//   const a = 1;
//   expect(a).toBeTruthy();
// });
//
// test('toBeFalsy 匹配器', () => {
//   const a = 0;
//   expect(a).toBeFalsy();
// });
//
// test('not 匹配器', () => {
//   const a = 1;
//   expect(a).not.toBeFalsy();
// });

/** 数字相关的匹配器 **/
// test('toBeGreaterThan 匹配器', () => {
//   const count = 10;
//   expect(count).toBeGreaterThan(9);
// });

// test('toBeLessThan 匹配器', () => {
//   const count = 10;
//   expect(count).toBeLessThan(12);
// });

// test('toBeGreaterThanOrEqual 匹配器', () => {
//   const count = 10;
//   expect(count).toBeGreaterThanOrEqual(10);
// });

// test('toBeCloseTo 匹配器', () => {
//   const firstNumber = 0.1;
//   const secondNumber = 0.2;
//   expect(firstNumber + secondNumber).toBeCloseTo(0.3);
// });

/** String **/
// test('toMatch 匹配器', () => {
//   const str = 'http://www.zuoanxinhui.com';
//   expect(str).toMatch(/zuoanxinhui/);
// });

/** Array, Set **/
// test('toContain 匹配器', () => {
//   const arr = ['zuoan', 'xinhui', 'qianduan'];
//   const set = new Set(arr);
//   expect(set).toContain('zuoan');
// });

/** 异常 **/
const throwNewErrorFunc = () => {
  throw new Error('this is a new error');
}
test('toThrow 匹配器', () => {
  expect(throwNewErrorFunc).toThrow('this is a new error');
});