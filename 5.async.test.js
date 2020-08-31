
//关于 异步方法的测试

import {syncCallback, syncReturnPromise, syncRRError} from './getSyncData.js'
//错误写法
// test('测试异步请求',()=>{
//     syncCallback((ret)=>{
//         expect(ret).toBeTruthy(true);
//     })
// })
// //如同
// test('测试异步请求2',()=>{
//     syncCallback()
// })

//正确写法
test('带回调的异步1',(done)=>{
    syncCallback((ret)=>{
        expect(JSON.stringify(ret)).toContain('status":200');
        done();
    })
})

test('返回promise的异步2',()=>{
    return syncReturnPromise().then((ret)=>{
        expect(JSON.stringify(ret)).toContain('status":200');
    })
})

test('异步测试3,针对返回premise',()=>{
    return expect(syncReturnPromise()).resolves.toMatchObject({
        "status":200
    })
    //toMatchObject 是属于resolves的方法 expect({}).toMatchObject()这样不行
})

test('异步测试4,针对返回premise',async ()=>{
    await expect(syncReturnPromise()).resolves.toMatchObject({
        "status":200
    })
    //toMatchObject 是属于resolves的方法 expect({}).toMatchObject()这样不行
})

test('异步测试5,针对返回premise',async ()=>{
    var result=await expect(syncReturnPromise());
    expect(result.respCode).toBe(0);
})



//测试 error 
test('测试400',()=>{
    expect.assertions(1); //要求必须执行一次 expect
    return syncRRError().catch((ret)=>{
        //console.log(ret.toString()) //Error: Request failed with status code 400
        expect(ret.toString().indexOf('400')!==-1).toBe(true);
    })
})

test('抛错测试1',()=>{
    return expect(syncRRError()).rejects.toThrow(); //期望这个请求是 失败的 并抛出异常 
})

test('抛错测试2',async ()=>{
    await expect(syncRRError()).rejects.toThrow(); //期望这个请求是 失败的 并抛出异常 
})

test('抛错测试3',async ()=>{
    try {
        await expect(syncRRError())
    } catch (error) {
        expect(ret.toString().indexOf('400')!==-1).toBe(true);
    }
})
