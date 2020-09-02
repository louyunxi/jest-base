/*
 * @Author: your name
 * @Date: 2020-09-01 19:50:43
 * @LastEditTime: 2020-09-01 20:20:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-Knowledge-Summaryf:\linshi\jest-base\runCallback.js
 */
export const runCallback=function(callback){
    //...
    return callback();
}

export const runSyncCallback=function(callback){
    //...
    setTimeout(()=>{
        if(callback){
            return callback();
        }
    },200)
}

export const runCallback1=function(callback){
    //...
    callback && callback('传参');
}

export const runSyncCallback1=function(callback){
    //...
    setTimeout(()=>{
        callback && callback();
    },200)
}