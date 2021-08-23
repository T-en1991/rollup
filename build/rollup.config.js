import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
export default {
    input:'./src/index',//以根目录指令为标准
    output:[
        {
            file:'dist/gte1.js',
            format:'iife',
            banner:'/*Ten(940075665@qq.com)*/',
            footer:'footer',
            intro:'intro',
            outro:'outro'
        },
        {
            file:'dist/gte2.js',
            format:'iife',
            banner:'/*Ten(940075665@qq.com)*/',
            footer:'footer',
            intro:'intro',
            outro:'outro'
        }
    ],
    plugins:[
        resolve({
           browser:true
        }),
        commonjs(),
        babel({
            exclude:'node_modules'
        })
    ],
    global:{
        jquery:'$'
    },
    external:[
        'jquery'
    ]
}