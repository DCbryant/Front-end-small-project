function flattenDownDepth(array, result, depth) {
    depth--
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (depth > -1 && Array.isArray(value)) {
            flattenDownDepth(value, result, depth)
        } else {
            result.push(value)
        }
    } return result
}
