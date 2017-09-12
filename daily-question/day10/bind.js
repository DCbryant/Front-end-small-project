Function.prototype.bind = Function.prototype.bind ||
function(context){
    var self = this
    var args = Array.prototype.slice.call(arguments, 1)
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return self.apply(context,finalArgs);
    }
}