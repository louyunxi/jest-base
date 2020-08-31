/*
 * @Author: your name
 * @Date: 2020-08-31 19:27:53
 * @LastEditTime: 2020-08-31 19:53:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-Knowledge-Summaryf:\linshi\jest-base\getSyncData.js
 */
import axios from 'axios';
export const getSyncData=(callback)=>{
    const url='https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=7509,32606,1423,31254,32046,32678,32117,31322,32691,26350&wd=%E8%8A%9C%E6%B9%96%E6%96%B9%E7%89%B9%E4%B8%9C%E6%96%B9%E7%A5%9E%E7%94%BB&req=2&csor=8&cb=jQuery1102003805612213613285_1598873406147&_=1598873406148';
    axios.get(url).then((ret)=>{
        callback(ret);
    })
}