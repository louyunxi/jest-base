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

*/

// f模式 只执行未通过的测试用例 （已通过的即使再次修改了 也不会执行） 再点击 f 退出f模式
test('测试',()=>{
    expect(11).toBe(11);
})
test('未通过测试',()=>{
    expect(11).toBe(11);
})

// o模式  只执行你改过的文件的测试用例 （需要配合git） jest --watch
test('o模式 只执行你当前修改的文件',()=>{
    var obj={'name':'fage'};
    expect(obj).toEqual({'name':'fage'});
})

// t模式 需要填写 pattern：toContain   根据测试用例名字 去执行测试用例 过滤模式也就filter模式
test('toContain的另一个匹配器，还有一个在3.marcher.test.js文件里', () => {
    const arr = ['zuoan', 'xinhui', 'qianduan'];
    const set = new Set(arr);
    expect(set).toContain('zuoan');
});

// p模式 需要填写 pattern：4.mode   根据测试文件名文件 去执行测试用例 过滤模式也就filter模式 (watchall下会有)
test('p模式', () => {
    expect('fage').toMatch('fa');
});

//q 退出 watch测试
//center 再次执行测试