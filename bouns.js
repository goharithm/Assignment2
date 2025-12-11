function findKthPositive(arr, k) {
    let missing = 0;
    let num = 1;
    let i = 0;

    while (true) {
        if (i < arr.length && arr[i] === num) {
            i++;
        } else {
            missing++;
            if (missing === k) return num;
        }
        num++;
    }
}

module.exports = findKthPositive;

