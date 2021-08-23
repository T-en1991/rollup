import {add} from './utils/math'
import $ from 'jquery'
//halo
console.log(add(1,2,3,4,5))


let fn=()=>{
    return 'hello rollup'
}

let p1=new Promise((resolve,reject)=>{
    resolve('hello rollup')
})

console.log($)