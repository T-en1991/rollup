//懒加载，用到了再加载

define(
    axios,
    ['require','exports','http'],
    function (require,exports,http) {
        exports.get=function () {
            return new P+romise((resolve,reject)=>{
                //code
                let http=require('http');
                //code
                resolve('msg')
            })
        }
    }
)