/*
 * @Author: your name
 * @Date: 2020-08-31 18:27:49
 * @LastEditTime: 2020-08-31 19:55:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-Knowledge-Summaryf:\linshi\jest-base\5.async.test.js
 */
//关于 异步方法的测试

import {getSyncData} from './getSyncData.js'
//错误写法
test('测试异步请求',()=>{
    getSyncData((ret)=>{
        expect(ret).toBeTruthy(true);
    })
})
//如同
test('测试异步请求2',()=>{
    getSyncData()
})

//正确写法
test('测试异步请求',(done)=>{
    getSyncData((ret)=>{
        expect(ret).toBeTruthy(true);
        done();
    })
})