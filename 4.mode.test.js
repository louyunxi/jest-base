/*
 * @Author: your name
 * @Date: 2020-08-31 18:27:49
 * @LastEditTime: 2020-08-31 19:10:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-Knowledge-Summaryf:\linshi\jest-base\4.mode.test.js
 */
//命令行工具
//测试模式
/* jest --watch-AbortController

w展示所有模式
Watch Usage
 › Press f to run only failed tests.   f 只执行未通过的测试用例 （已通过的即使再次修改了 也不会执行）
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.

a 监听全部文件 并执行

f 只执行未通过的测试用例 （已通过的即使再次修改了 也不会执行） 再点击 f 退出f 模式*/

test('测试',()=>{
    expect(11).toBe(11);
})
test('未通过测试',()=>{
    expect(11).toBe(11);
})

// o模式  只执行你改过的文件的测试用例 （需要配合git）
test('o模式 只执行你当前修改的文件',()=>{
    var obj={'name':'fage'};
    expect(obj).toEqual({'name':'fage'});
})