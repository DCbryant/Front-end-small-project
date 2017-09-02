let arr = [1, 2, [3, 4], [5, 6], [8, 9], [10, 11, [12]]]

function* flat (arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            yield * flat(arr[i])
        } else {
            result.push(arr[i])
        }
    }
}
flat(arr).next()