
/* 
1.默认只支持 node环境下的 模块导入导出方式 commonJs exports module.exports require这种
不支持 esModule   export default/export import
所以要用babel解析下 

配置babel
cnpm install @babel/core @babel/preset-env -D

.babelrc
{
  "presets":[
    [
      "@babel/preset-env"，{
        "targets":{
          "node":"current"
        }
      }
    ]
  ]
}
jest 内置jest-babel插件 会找到项目中 .babelrc文件 并运行babel编译后 再进行测试

*/


/* 
2.生成 jest 注册表

> jest --init

The following questions will help Jest to create a suitable configuration for your project
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » babel
√ Automatically clear mock calls and instances between every test? ... yes
�  Configuration file created at F:\linshi\jest-base\jest.config.js 
可配置 指定测试文件和文件夹 testRegex
*/

/* 
3.生成测试覆盖率
npx jest --coverage 

*/
import {add, minus, multi} from './1.math';

test('测试加法 3 + 7', () => {
  expect(add(3, 7)).toBe(10);
});

test('测试减法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0);
});

test('测试乘法 3 * 3', () => {
  expect(multi(3, 3)).toBe(9);
})

// jest 默认不支持 esmodule  只支持commonJs 的模块方式
