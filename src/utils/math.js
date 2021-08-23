function add(...args){
    return args.reduce((pre,cv)=>{
      return pre+cv
    })
}


function mutil(...args){
    return args.reduce((pre,cv)=>{
        return pre*cv
    })
}


export {
    add,
    mutil
}