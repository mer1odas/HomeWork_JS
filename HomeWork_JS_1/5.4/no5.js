function getMaxSubSum(arr) {
    let sum = 0
    let sum1 = 0
    for (let i of arr) {
        sum1 += i
        sum = Math.max(sum1, sum)
        if (sum1 < 0) {
            sum1 = 0
        }
    }
    return sum
};
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));

// console.log((1 / 8) * 100);