
//钩子函数
//钩子 beforeAll(()=>{})    afterAll(()=>{}) 
//beforeEach(()=>{})    afterEach(()=>{})

import Count from './someClass.js'


/* 
//测试类时 需要在测试外面 实例化
const count=new Count(0);
test('测试加一',()=>{
    count.addOne();
    expect(count.count).toBe(1);
})
test('测试减一',()=>{
    count.minusOne();
    expect(count.count).toBe(0);
}) 
*/

/* 
let count=null;
//beforeAll 在所有测试用例执行之前 会先执行这个钩子
beforeAll(()=>{
    console.log('beforeAll')
    count=new Count(0);
})
//afterAll 等待所有测试用例执行完成之后 会执行
afterAll(()=>{
    console.log('afterAll')
})
//每个测试用例执行之前 都会执行当前钩子
beforeEach(()=>{
    console.log('beforeEach')
    //在beforeEach 实例化类 就可以保证每个测试用例 拿到的实例都是全新的独立的 互不干扰的实例
    count=new Count(0);
})
//每个测试用例执行之后
afterEach(()=>{
    console.log('afterEach')
    //在beforeEach 实例化类 就可以保证每个测试用例 拿到的实例都是全新的独立的 互不干扰的实例
    count=new Count(0);
})
test('测试加一',()=>{
    console.log('测试加一')
    count.addOne();
    expect(count.count).toBe(1);
})
test('测试减一',()=>{
    console.log('测试减一')
    count.minusOne();
    expect(count.count).toBe(-1);
})  
*/

//分组语法
/* let count=null;
describe('测试count类',()=>{
    beforeEach(()=>{
        //在beforeEach 实例化类 就可以保证每个测试用例 拿到的实例都是全新的独立的 互不干扰的实例
        count=new Count(0);
    })
    describe('测试增加相关的代码',()=>{
        test('测试加1',()=>{
            count.addOne();
            expect(count.count).toBe(1);
        })
        test('测试加2',()=>{
            count.addTwo();
            expect(count.count).toBe(2);
        })
    })
    describe('测试减少相关的代码',()=>{
        test('测试减一',()=>{
            count.minusOne();
            expect(count.count).toBe(-1);
        })
        test('测试减2',()=>{
            count.minusTwo();
            expect(count.count).toBe(-2);
        })
    })
}) */

/* 
//返回结果 根据结构化 方便阅读 和管理

测试count类
    测试增加相关的代码
      √ 测试加1 (74 ms)
      √ 测试加2 (4 ms)
    测试减少相关的代码
      √ 测试减一 (5 ms)
      √ 测试减2 (6 ms)
*/

/* 
钩子函数 有作用域
describe 都可以有自己的  beforeAll，afterAll，beforeEach，afterEach
describe 与 describe 嵌套时 先执行外部的 钩子函数 在执行内部的钩子函数

*/


//想要 对单个测试进行测试 可以加only修饰符 
//describe 准备性的工作 不要直接放describe里 而是尽可能的用 钩子 方便理清执行顺序
/* let count=null;
describe('测试count类',()=>{
    console.log('111')
    beforeAll(()=>{
        console.log('beforeAll')
    })
    beforeEach(()=>{
        console.log('beforeEach')
        //在beforeEach 实例化类 就可以保证每个测试用例 拿到的实例都是全新的独立的 互不干扰的实例
        count=new Count(0);
    })
    describe('测试增加相关的代码',()=>{
        console.log('222')
        test.only('测试加1',()=>{
            console.log('测试加1')
            count.addOne();
            expect(count.count).toBe(1);
        })
        test('测试加2',()=>{
            console.log('测试加2')
            count.addTwo();
            expect(count.count).toBe(2);
        })
    })
}) */
/* 
PASS  ./6.hookFunction.test.js
测试count类
  测试增加相关的代码
    √ 测试加1 (10 ms)
    ○ skipped 测试加2 
*/
