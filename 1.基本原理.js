/*
 * @Author: your name
 * @Date: 2020-08-26 19:38:35
 * @LastEditTime: 2020-08-26 21:03:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-Knowledge-Summaryf:\linshi\jest-base\1.基本原理.js
 */
/**
 * @作者 Lucifer-ye
 * @创建时间 2020/8/16 0016 17:55
 */
import { add, minus, multi } from './1.math'
/** ———————————————————————————————————————— step one ———————————————————————————————————————— **/
const result = add(3,7);
const expected = 10;

if(result !== expected) {
  throw Error(`3 + 7 应该等于 ${expected}, 但是结果却是 ${result}`);
}

const result2 = minus(3,3);
const expected2 = 0;

if(result2 !== expected2) {
  throw Error(`3 - 3 应该等于 ${expected2}, 但是结果却是 ${result2}`);
}

/** ———————————————————————————————————————— step two ———————————————————————————————————————— **/
/**
 * 
 * @param {*} result 测试函数的执行结果 
 * return 返回一个对象 包含比较toBe（验证执行结果与期待值的方法）
 */
function expect(result) {
  return {
    toBe: function (actual) {
      if(result !== actual) {
        throw new Error('预期值和实际值不相等');
      }
    }
  }
}
//{   toBe: function(actual){ if(result !== actual) { throw new Error('预期值和实际值不相等');}}  }
//expect 返回一个包含执行结果的对象 通过闭包形式缓存了执行结果 通过对象中toBe 与传入的期待值比较 
expect(add(3,7)).toBe(10);
expect(minus(3,3)).toBe(0);


/** ———————————————————————————————————————— step three ———————————————————————————————————————— **/
function expect(result) {
  return {
    toBe: function (actual) {
      if(result !== actual) {
        //throw new Error('预期值和实际值不相等');
        throw new Error(`预期值和实际值不相等 预期${actual} 结果却是${result}`);
      }
    }
  }
}
function test(desc, fn) {
  try {
    fn();
    console.log(`${desc} 通过测试`);
  } catch (e) {
    console.log(`${desc} 没有通过测试 ${e}`);
  }
}
//进一步封装 在test 函数中 捕获错误 并结合传参 返回优化后错误提示

test('测试加法 3 + 7', () => {
  expect(add(3,7)).toBe(10);
});

test('测试减法 3 - 3', () => {
  expect(minus(3,3)).toBe(0);
});

test('测试乘法 3 * 3', () => {
  expect(multi(3,3)).toBe(9);
})

