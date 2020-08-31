/*
 * @Author: your name
 * @Date: 2020-08-31 19:27:53
 * @LastEditTime: 2020-08-31 20:16:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-Knowledge-Summaryf:\linshi\jest-base\getSyncData.js
 */
import axios from 'axios';
export const syncCallback=(callback)=>{
    const url='https://test.snkoudai.com/api/foundation/validate/code/get?timestamp=1598875042842';
    axios.get(url).then((ret)=>{
        callback(ret);
    })
}

export const syncReturnPromise=(callback)=>{
    const url='https://test.snkoudai.com/api/foundation/validate/code/get?timestamp=1598875042842';
    return axios.get(url);
}

export const syncRRError=(callback)=>{
    const url='https://test.snkoudai.com/api/operuser/co/operate/subject/get';
    return axios.post(url);
}