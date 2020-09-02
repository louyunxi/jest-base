/*
 * @Author: your name
 * @Date: 2020-09-01 19:47:58
 * @LastEditTime: 2020-09-02 09:19:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-Knowledge-Summaryf:\linshi\jest-base\7.mock.test.js
 */
//mock函数  捕获函数的调用
import {runCallback, runSyncCallback, runCallback1, runSyncCallback1} from './runCallback.js'
import { syncReturnPromise } from './getSyncData.js'
import axios from 'axios';
//jest.mock('axios');

describe('没有mock函数 要这样',()=>{
    test('测试 某函数最终会执行传入的回调函数',()=>{
        const fun=()=>{
            console.log('看 真的执行了我这个回调函数！');
            return '执行了';    //完全用来为了验证正确执行的值
        }
        expect(runCallback(fun)).toBe('执行了');
    })
    
    test('测试 某异步带回调函数最终是否会执行传入的回调函数',(done)=>{
        const fun=()=>{
            console.log('看 真的执行了我这个回调函数！');
            return '执行了';    //完全用来为了验证正确执行的值
        }
        runSyncCallback(()=>{
            expect(fun()).toBe('执行了');
            done();
        })
    })
})

describe('mock方式',()=>{
    test('测试 某函数最终会执行传入的回调函数',()=>{
        //1.mock函数 可以捕获函数的调用
        const func=jest.fn();
        runCallback1(func);
        expect(func).toBeCalled();
    })
    
    test('测试 某异步带回调函数最终是否会执行传入的回调函数',(done)=>{
        //1.mock函数 可以捕获函数的调用
        const func=jest.fn();   
        runSyncCallback1(()=>{
            func();
            expect(func).toBeCalled();
            done();
        })
    })

    test('回调函数被调用两次',()=>{
        const func=jest.fn();
        runCallback1(func);
        runCallback1(func);
        console.log(func.mock);
       /*  
       { 
           calls: [ [ '传参' ], [ '传参' ] ], 传入的参数
            instances: [ undefined, undefined ],
            invocationCallOrder: [ 3, 4 ],  被调用的顺序
            results: 执行的回调返回值
                [ { type: 'return', value: undefined },
                { type: 'return', value: undefined } ] 
        } 
        */
        expect(func.mock.calls.length).toBe(2);
        expect(func.mock.calls[0]).toEqual(['传参']);
    })
    
    test('可以自由的设置返回结果',()=>{
        //2.可以自由的设置返回结果
        //const func=jest.fn(()=>{return '123456'});
        const func=jest.fn();
        func.mockReturnValueOnce('once').mockReturnValueOnce('two-result').mockReturnValueOnce('three-result');  //模拟一次 func返回结果
        //func.mockReturnValue('模拟执行后所有的返回结果')
        runCallback1(func);
        runCallback1(func);
        runCallback1(func);
        expect(func.mock.calls[0]).toEqual(['传参']);
    })

    test.only('普通异步请求 真去拉数据的话 耗时',async ()=>{
        var result=await syncReturnPromise();
        console.log(result)
        expect(result.data.respCode).toBe(0);   //697 ms
    })

    test('mock 改变函数的内部实现',async ()=>{
        //axios.get.mockResolvedValue({data:{'respCode':0,'obj':{'list':[1,2,3,4]}}})
       /*  var result=await syncReturnPromise();
        expect(result.data.respCode).toBe(0);   //697 ms */
    })
})