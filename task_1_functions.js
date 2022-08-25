



function simpleNum(num) {
    let nums_arr = [];
    let count = 2;
    while (true) {
        if (count === 2) {
            nums_arr.push(2)
        } else {
            let flag = true
            for (let i of nums_arr) {
                if (count % i === 0) {
                    flag = false;
                    break
                }
            }
            if (flag) nums_arr.push(count)
        }
        if (nums_arr.length === num) return nums_arr
        count += 1
    }
}

// console.log(simpleNum(200))
// console.log(simpleNum(process.argv[2]))