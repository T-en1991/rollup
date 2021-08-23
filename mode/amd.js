//预加载

define(
    function (require,exports,http) {
        exports.get=function () {
            return new Promise((resolve,reject)=>{
                //code
                let http=require('http');
                //code
                resolve('msg')
            })
        }
    }
)