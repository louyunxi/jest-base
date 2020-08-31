/*
 * @Author: your name
 * @Date: 2020-08-31 21:13:51
 * @LastEditTime: 2020-08-31 21:32:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-Knowledge-Summaryf:\linshi\jest-base\someClass.js
 */
export default class Count{
    constructor(count){
        this.count=count;
    }
    addOne(){
        this.count++;
    }
    minusOne(){
        this.count--;
    }
    addTwo(){
        this.count++;
        this.count++;
    }
    minusTwo(){
        this.count--;
        this.count--;
    }
}