function mergeSort() {
    const sortedArray = mergeSortRecursive(array);
    updateBars(sortedArray);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function mergeSortRecursive(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSortRecursive(left), mergeSortRecursive(right));
}

async function updateBars(arr) {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < arr.length; i++) {
        await sleep(100);
        bars[i].style.height = `${arr[i]*4}px`;
    }
}

resetArray();