/* 

//匹配器
toBe 相当于 ===
toEqual 比较对象内容 
toBeNull 是否为null （undefined也无法满足）
toBeUndefined 是否为undefined
toBeDefined  是否被定义过了

//布尔值相关
toBeTruthy 是否为真   1，true等 （expect().not.toBeFalsy()）
toBeFalsy 是否为false  0,false等 （expect().not.toBeTruthy()）

//数字相关
toBeGreaterThan  大于
toBeGreaterThanOrEqual 大于等于
toBeLessThan 小于
toBeLessThanOrEqual 小于等于
toBeCloseTo

//字符串 相关
toMatch expect(str).toMatch(/zuoanxinhui/); expect(set).toContain('zuoan');
//array set
toContain expect(set).toContain('zuoan');

//错误
expect(throwNewErrorFunc).toThrow('this is a new error'); 

*/


/**
 * @作者 Lucifer-ye
 * @创建时间 2020/8/16 0016 17:55
 */
test('测试10与10相匹配', () => {
  // toBe 匹配器 matchers
  // object is  ===
  const a = { one: 1 };
  expect(a).toEqual({ one: 1});
});

test('toEqual 匹配器', () => {
  // toEqual 匹配器 只匹配内容
  // const a = { one: 1 };
  // expect(a).toEqual({ one: 2});
  const a = null;
  expect(a).toBeNull();
});

/** 真假有关的匹配器 **/
test('toBeUndefined 匹配器', () => {
  // toEqual 匹配器 只匹配内容
  const a = undefined;
  expect(a).toBeUndefined();
});

test('toBeDefined 匹配器', () => {
  const a = 'fff';
  expect(a).toBeDefined();
});

test('toBeTruthy 匹配器', () => {
  const a = 1;
  expect(a).toBeTruthy();
});

test('toBeFalsy 匹配器', () => {
  const a = 0;
  expect(a).toBeFalsy();
});

test('not 匹配器', () => {
  const a = 1;
  expect(a).not.toBeFalsy();
});

/** 数字相关的匹配器 **/
test('toBeGreaterThan 匹配器', () => {
  const count = 10;
  expect(count).toBeGreaterThan(9);
});

test('toBeLessThan 匹配器', () => {
  const count = 10;
  expect(count).toBeLessThan(12);
});

test('toBeGreaterThanOrEqual 匹配器', () => {
  const count = 10;
  expect(count).toBeGreaterThanOrEqual(10);
});

 
test('toBeCloseTo 匹配器', () => {
  const firstNumber = 0.1;
  const secondNumber = 0.2;
  expect(firstNumber + secondNumber).toBeCloseTo(0.3);
});

/** String **/
test('toMatch 匹配器', () => {
  const str = 'http://www.zuoanxinhui.com';
  expect(str).toMatch(/zuoanxinhui/);
});

/** Array, Set **/
test('toContain 匹配器', () => {
  const arr = ['zuoan', 'xinhui', 'qianduan'];
  const set = new Set(arr);
  expect(set).toContain('zuoan');
});

/** 异常 **/
const throwNewErrorFunc = () => {
  throw new Error('this is a new error');
}
test('toThrow 匹配器', () => {
  expect(throwNewErrorFunc).toThrow('this is a new error');
});