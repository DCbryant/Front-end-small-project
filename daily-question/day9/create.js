function create(construct){
    var args = [].slice.call(arguments,1)
    var obj = {}
    Object.setPrototypeOf(obj,construct.prototype)
    // obj.__proto__ = construct.prototype
    var res = construct.apply(obj,args)
    if(typeof res === 'object' && res !== null){
        return res
    }
    return obj
}